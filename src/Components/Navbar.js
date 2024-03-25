import React from "react";
import logo from "../Assets/logo-new.png";
import homeIcon from "../Assets/home-icon.png";
import blogIcon from "../Assets/blog-icon.png";
import vidIcon from "../Assets/question-icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="img-logo-wrapper">
          <img className="img-logo" src={logo}  alt="logo"/>
        </div>
        <div className="text-logo">
        Lifetime Wealth Calculator
        </div>
        {/* <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <img className="absolute -ml-10" src={homeIcon} alt="home button"/>
              <Link to="/">Home</Link>
            </li>
           <li>
              <img className="absolute -ml-8" src={blogIcon} alt="blog icon"/>
              <Link to="/blog"> Blog </Link>
            </li>
            <li>
              <img className="absolute -ml-8" src={vidIcon} alt="vid icon"/>
              <Link to="/vid"> Vid </Link>
  </li> 
          </ul>
        </div>*/}
      </div>
    </div>
  );
}

export default Navbar;