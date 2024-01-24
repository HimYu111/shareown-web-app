import React from "react";
import logo from "../Assets/icon-ShareOwn.png";
import homeIcon from "../Assets/home-icon.png";
import blogIcon from "../Assets/blog-icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-gray-200 fixed z-20">
        <div className="flex-1 flex items-left">
          <img className="scale-[13%] absolute max-sm:hidden" src={logo} alt="logo"/>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <img className="absolute -ml-10" src={homeIcon} alt="home button"/>
              <Link to="/">Home</Link>
            </li>
            <li>
              <img className="absolute -ml-8" src={blogIcon} alt="blog icon"/>
              <Link to="/blog"> Blog </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;