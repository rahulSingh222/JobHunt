import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';
import customFetch from "../../utils/axios";


const initialFilterState = {
    search : '',
    searchOptions : 'all',
    searchTupe : 'all',
    sort : 'latest',
    sortOptions :['latest', 'oldest', 'a-z', 'z-a' ],

};

const initialState = {
    isLoading : true,
    jobs: [],
    totalJobs : 0,
    numOfPages : 1,
    page :1,
    stats : {},
    monthlyApplications : [],
    ...initialFilterState,
};

export const getAllJobs = createAsyncThunk('allJobs/getJobs', async (_, thunkAPI) => {
    let url = '/jobs';

    try {
         const response = await customFetch.get(url, {
            headers : {
                authorization : `Bearer ${thunkAPI.getState().user.user.token}`,
            }
         });

         return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
})

const allJobsSlice = createSlice({
    name : 'allJobs',
    initialState,
    reducers : {
       showLoading : (state) => {
        state.isLoading = true;
       },
       hideLoading : (state) => {
        state.isLoading = false;
       },
    },
    extraReducers : {
        [getAllJobs.pending] : (state) => {
            state.isLoading = true;
        },
        [getAllJobs.fulfilled] : (state, {payload}) => {
            state.isLoading = false;
            state.jobs = payload.jobs;
        },
        [getAllJobs.rejected] : (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload);
        }
    }
});


export const {showLoading,hideLoading} = allJobsSlice.actions;
export default allJobsSlice.reducer;