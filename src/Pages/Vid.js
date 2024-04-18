import React from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";

function Blog() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 h-screen flex justify-center items-start translate-y-20">
        <div className="text-white p-4">
          <h1 className="text-xl font-bold mb-4">The Maturing Shared Ownership Market: A Data-Led Analysis - Milcheva S., Damianov D., Williams P.</h1>
          {/* Video Placeholder */}
          <div className="video-container my-8">
            <iframe 
              src="YOUR_VIDEO_URL_HERE" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              title="Embedded Video">
            </iframe>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Recommended information sources</h2>
            <ul className="list-disc pl-6">
              <li>
                <a href="https://www.moneysavingexpert.com/mortgages/mortgage-guide/" target="_blank" rel="noopener noreferrer">Money Saving Expert - Mortgage Guide</a>
              </li>
              <li>
                <a href="https://www.moneysavingexpert.com/mortgages/buying-a-home-timeline/" target="_blank" rel="noopener noreferrer">Money Saving Expert - Buying a Home Timeline</a>
              </li>
              <li>
                <a href="https://www.gov.uk/shared-ownership-scheme" target="_blank" rel="noopener noreferrer">GOV.UK - Shared Ownership Scheme</a>
              </li>
              <li>
                <a href="https://www.gov.uk/affordable-home-ownership-schemes" target="_blank" rel="noopener noreferrer">GOV.UK - Affordable Home Ownership Schemes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;