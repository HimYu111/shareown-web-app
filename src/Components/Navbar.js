import React from "react";
import logo from "../Assets/icon-ShareOwn.png";
import homeIcon from "../Assets/home-icon.png";
import blogIcon from "../Assets/blog-icon.png";
import vidIcon from "../Assets/question-icon.png";
import TCsIcon from "../Assets/TCs-icon.png";
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

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
          <img className="mt-1 w-7 h-7" src={homeIcon} alt="home button"/>
            <li>
              <Link to="/">Home</Link>
            </li>
          <img className="mt-1 w-7 h-7" src={blogIcon} alt="blog icon"/>
            <li className="mr-4">
                <Link to="/blog"> Blog </Link>
            </li>
            <img className="mt-1 w-7 h-7" src={vidIcon} alt="vid icon"/>
            <li className="mr-4">
              <Link to="/vid"> Video Guide </Link>
            </li> 
              <img className="mt-1 w-7 h-7" src={TCsIcon} alt="TCs icon"/>
            <li className="mr-4">
              <Link to="/TCs"> TCs </Link>
            </li> 
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;