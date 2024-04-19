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
          <p className="text-lg font-bold mb-4"> Coming soon</p>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;