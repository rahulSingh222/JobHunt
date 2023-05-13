import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux"
import { showStats } from "../../features/alljobs/allJobsSlice";
import {StatsContainer, ChartContainer, Loading} from "../../Components"
function Stats() {

  const {isLoading, monthlyApplications} =useSelector( (store) => store.allJobs);

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(showStats());
  }, [])

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0  && <ChartContainer />}
    </>
  )
}

export default Stats