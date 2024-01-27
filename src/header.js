import hwlogo from './images/hwlogo.png'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home from "./home";
import Collectors from "./collectors";
import Collaborations from './collaborations';
import NoPage from "./nopage";


export default function Header(){
  return (
    
    <BrowserRouter>
    
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
      <Routes>
        
          <Route path = "" element={<Home />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/collectors" element={<Collectors />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      
    </BrowserRouter>
     
      
    
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