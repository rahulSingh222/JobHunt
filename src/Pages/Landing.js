import logo from "../assets/images/jobhunt_logo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="JobHunt" className="logo" />
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
          <button style={{background : "#A0A"}} className="btn btn-hero">Login/Register</button>
        </div>
        <div className="info">
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
nav{
    width:var(--fluid-width);
    max-width: var(--max-width)
    margin : 0 auto;
    height : var(--nav-height);
    display : flex;
    align-items : center;
 }

 .page {
    min-heigth : calc(100vh- var(--nav-height));
    display : grid;
    align-items: center;
    margin-top : -3rem
 }

 h1 {
    font-weight : 700;
    span {
        color : #A0A;
    }
 }
 p {
    color : var(--grey-600);
 }

 .main-img {
    display : none;
 }

 @media {min-width :992} {
    .page {
        grid-template-columns : 1fr 1fr;
        column-gap : 3rem;
    }

    .main-img {
        display : block;
    }
 }

`;

export default Landing;
