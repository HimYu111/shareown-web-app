import React from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";


function Blog() {
  return (
    <div>
      <Navbar />
      <div className="h-full flex justify-center items-start translate-y-100 more-secion-wrapper">
        <div className="blog-wrapper" > 
            <p className=" mb-7 italic" style={{ paddingLeft: '30px' }}>The lifetime calculator is based on an EPSRC-UCL research funded project. The underlying calculator is developed by academics at UCL and Durham University and is free of charge. It is not for commercial use and does not provide financial advice. ®</p>
            <p className=" mb-7" style={{ paddingLeft: '30px' }}>
              If you want to find out more about shared ownership, you can read the report by main author, UCL’s professor Stanimira Miicheva, and main contact person for this website. The key findings of the report are summarised below.
              <br /> {/* New line */}
              <a href="https://discovery.ucl.ac.uk/id/eprint/10183951/1/so_market_ucl.pdf" 
                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                target="_blank" 
                rel="noopener noreferrer"> 
                Find the report here
              </a>
            </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
