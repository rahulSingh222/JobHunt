import main from "../assets/images/landing_img.svg";
import Wrapper from "../assets/wrappers/LandingPage"
import { Logo } from "../Components";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      <nav>        
        <Logo />
      </nav>
      <div className="container page">
        {/* info details */}
        <div className="info">
          <h1>
            Job <span>tracking</span> website
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <Link to='/register' style={{background : "#A0A"}} className="btn btn-hero">Login/Register</Link>
        </div>
        <div className="info">
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </div>
    </Wrapper>
  );
}


export default Landing;
