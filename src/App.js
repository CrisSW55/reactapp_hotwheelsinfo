//Unused imports//
//Router, Links classes
//import { Outlet, Link } from "react-router-dom";
//Header/Layout class
//import Layout from "./layout";
//Images 
//import hwlogo from './images/hwlogo.png'
//import grandprixcars from './images/grandprixcars.png'
//import logo from './logo.svg';
//import manycars from './images/manycars.png'

import './App.css';
//Navigating through webpages using routes,router, and link React classes
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import Home from "./home";
import Collectors from "./collectors";
import Collaborations from './collaborations';
import NoPage from "./nopage";



function App() {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   // 👇️ navigate programmatically
  //   navigate('/collaborations', {replace: true});};
  return (
    
  <>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />}>
          <Route exact path="/collaborations" element={<Collaborations />} />
          <Route exact path="/collectors" element={<Collectors />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
  
};
export default App;

