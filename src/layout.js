import { Outlet, Link } from "react-router-dom";
import hwlogo from './images/hwlogo.png'

const Layout = () => {
  return (
    <>
     <div className="container-sm">
      <img src= {hwlogo} alt="hwlogo" width="10%" height={100} />
    </div>
    <nav className="navbar navbar-expand-sm col-12 bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link class="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link class="nav-link" to="/collaborations">Collaborations</Link>
          </li>
          <li className="nav-item">
          <Link class="nav-link" to="/collectors">Collectors</Link>
          </li>
        </ul>
      </div>
    </nav>
      <Outlet />
    </>
  )
};

export default Layout;