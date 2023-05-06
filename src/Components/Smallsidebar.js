import NavLinks from "./NavLinks";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import {toggleSideBar} from "../features/user/userSlice";

function Smallsidebar() {

  const dispatch = useDispatch();
  const {isSidebarOpen} = useSelector( (store) => store.user );

  const toggle = () => {
      dispatch(toggleSideBar());
  }
  return (
    <Wrapper>
      <div className={ isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container" }>
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </Wrapper>
  );
}

export default Smallsidebar;
