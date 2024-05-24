import { Link } from "react-router-dom";
import React, { useState } from 'react';
import ContactForm from "./ContactForm";  // Import the ContactForm component


function Footer() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  return (
    <div>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
            UCL © 2024 - 1-19 Torrington Place London WC1E 7HB
            <button onClick={openForm} className="ml-10 font-bold">Contact Us</button>
            <Link to="/TCs" className="ml-10 font-bold">T&Cs</Link>
          </span>
        </div>
      </footer>
      {isFormOpen && <ContactForm onClose={closeForm} />}
    </div>
  );
}

export default Footer;
