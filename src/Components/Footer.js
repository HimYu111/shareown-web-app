import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import LIlogo from "../Assets/LinkedIn_icon.png";
//import Xlogo from "../Assets/X_icon.png";

function Footer() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  // Function to handle external redirects
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <footer className="bg-white rounded-lg shadow m-2 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-center">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 text-center">
            © 2025 ShareOwn.info
            <button onClick={openForm} className="ml-10 font-bold">Contact Us</button>
            <Link to="/TCs" className="ml-10 font-bold">T&Cs</Link>
            <Link to="/FAQs" className="ml-10 font-bold">FAQs</Link>
            <button onClick={() => handleRedirect('https://www.linkedin.com/company/shareown')} className="ml-4">
              <img className="social-icon" src={LIlogo} alt="LinkedIn" />
            </button>
            {/*<button onClick={() => handleRedirect('https://x.example.com/yourprofile')} className="ml-4">
              <img className="social-icon" src={Xlogo} alt="X" />
            </button>*/}
          </div>
        </div>
      </footer>
      {isFormOpen && <ContactForm onClose={closeForm} />}
    </div>
  );
}

export default Footer;
