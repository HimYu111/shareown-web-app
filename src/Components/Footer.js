import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
            UCL © 2024 - s.milcheva@ucl.ac.uk, 1-19 Torrington Place London WC1E 7HB
            <Link to="/TCs" className="ml-10 font-bold">T&Cs</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
