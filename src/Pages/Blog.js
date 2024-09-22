import React from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";


function Blog() {
  return (
    <div>
    <Navbar />
    <div className="h-full flex justify-center items-start translate-y-100 more-secion-wrapper">
      <div className="blog-wrapper"> 
        <p className="mb-7" style={{ paddingLeft: '30px' }}>
          The lifetime calculator is based on an EPSRC-UCL research funded project. The underlying model is developed by academics at UCL and Durham University. It is not for commercial use and does not provide financial advice. ®
        </p>
        <p className="mb-7" style={{ paddingLeft: '30px' }}>
          Find out more about shared ownership in our 
          <span> </span> {/* This adds the space */}
          <a href="https://discovery.ucl.ac.uk/id/eprint/10183951/1/so_market_ucl.pdf" 
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
            target="_blank" 
            rel="noopener noreferrer"> 
            report
          </a>.
          {/* Full stop added after the link */}
        </p>
      </div>
  </div>
      <Footer />
    </div>
  );
}

export default Blog;
