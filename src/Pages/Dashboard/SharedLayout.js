import { Outlet } from "react-router-dom"
import { Bigsidebar,Smallsidebar,Navbar } from "../../Components"
import Wrapper from "../../assets/wrappers/SharedLayout"

function SharedLayout() {
  return (
    <Wrapper>
        <main className="dashboard">
          <Smallsidebar />
          <Bigsidebar />
          <div>
            <Navbar/>
            <div className="dashboard-page">
                <Outlet />
            </div>
          </div>   
        </main>
    </Wrapper>
  )
}

export default SharedLayout