import { Link } from "react-router-dom"
import errorImg from "../assets/images/not-found.svg"
import Wrapper from "../assets/wrappers/ErrorPage"

function Error() {
  return (
      <Wrapper className="full-page">
        <div>
          <img src={errorImg} alt="not found" />
          <h3>Ohh! something wrong in the heaven</h3>
          <p>We are unable to find page you are looking for, kindly refresh or try another.</p>
          <Link to="/">back to Home</Link>
        </div>
      </Wrapper>
  )
}

export default Error