import React, { useEffect } from "react";
import logo from "../Assets/icon-ShareOwn.png";
import { Link } from "react-router-dom";

function Navbar() {

  useEffect(() => {
    const textLogo = document.querySelector(".text-logo");
    textLogo.classList.add("fade-in");
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="img-logo-wrapper">
        <Link to="/"><img className="img-logo" src={logo}  alt="logo"/></Link>
        </div>
       <div className="text-logo">
        ShareOwn Calculator
        </div>


{/*        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
          <img className="mt-1 w-7 h-7" src={homeIcon} alt="home button"/>
            <li>
              <Link to="/">Home</Link>
            </li>
          <img className="mt-1 w-7 h-7" src={blogIcon} alt="blog icon"/>
            <li className="mr-4">
                <Link to="/blog"> More </Link>
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
  </div>*/}

        <div className="menu-buttons-wrapper">
          <div class="menu-home menu-buttons">
            <div class="menu-link"><Link to="/">Home</Link></div> 
          </div>

          <div class="menu-blog menu-buttons">          
            <div class="menu-link"> <Link to="/blog"> About </Link></div>     
          </div>

          <div class="menu-blog menu-buttons">          
            <div class="menu-link"> <Link to="/FAQs"> FAQs </Link></div>     
          </div>

   {/*       <div class="menu-video menu-buttons">          
            <div class="menu-link"><Link to="/vid"> Video Guide </Link></div>  
          </div>
          
          <div class="menu-TC menu-buttons">          
            <div class="menu-link"><Link to="/TCs"> TCs </Link></div>   
          </div>*/}


        </div>
      </div>
    </div>
  );
}

export default Navbar;