import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow } from "../Components";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";


const intitalState = {
  name: "",
  email: "",
  password: "",
  isMember: "",
};

function Register() {
  const [values, setValues] = useState(intitalState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill all val");
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name: name, email: email, password: password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if(user) {
      setTimeout(() => {
        navigate('/');
      }, 2000)
    }
  }, [user]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button
          style={{ backgroundColor: "#A0A" }}
          type="submit"
          className="btn btn-block"
          disabled={isLoading}
        >
          {isLoading? "Loading..." : "submit"}
        </button>
        <button type='button' className="btn btn-block btn-hipster" disabled={isLoading} onClick={() => dispatch(loginUser({email : 'testUser@test.com', password : 'secret'}))}>
          {isLoading? 'Loading...' : "Login as Test User"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button
            type="button"
            className="member-btn"
            onClick={toggleMember}
            style={{ color: "#A0A" }}
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
