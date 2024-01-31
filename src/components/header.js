import t_hwilogo from '../images/t_hwilogo.png'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Collectors from "./collectors";
import Collaborations from './collaborations';
import NoPage from "./nopage";


export default function Header(){
  return (
    <>
    <BrowserRouter>
    <nav className="navbar navbar-expand-sm col-12 navbar-dark">
    <div className="container-fluid">
        <Link class="nav-link col-2" to="/">
          <img src= {t_hwilogo} alt="t_hwilogo" width="70%" height={100} />
        </Link>
        <ul className="navbar-nav col-10">
          <li className="nav-item">
          <Link class="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link class="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
          <Link class="nav-link" to="/collaborations">Collaborations</Link>
          </li>
          <li className="nav-item">
          <Link class="nav-link" to="/collectors">Collectors</Link>
          </li>
          <li className="nav-item">
          <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle"
          type="button" id="dropdownMenu1" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Dropdown
          </button>

          <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <Link class="nav-link" to="/">Home</Link>
          <Link class="nav-link" to="/about">About</Link>
          <Link class="nav-link" to="/collaborations">Collaborations</Link>
          <Link class="nav-link" to="/collectors">Collectors</Link>
          </div>
          </div>
          </li>
          

        </ul>
      </div>
    </nav>

    <Routes>
          <Route path = "" element={<Home />} />
          <Route path = "/about" element={<About />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/collectors" element={<Collectors />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      
    </BrowserRouter>
     
     </>
    
  )
};

//The routes array could be used in the future to make more complex subroutes
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/collaborations",
    component: Collaborations,
    
     
  },
  {
    path: "/collectors",
    component: Collectors,
    
     
  },{
    path: "/nopage",
    component: NoPage,
    
     
  }];