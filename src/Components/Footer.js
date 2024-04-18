import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex items-center">
            UCL © 2024 - {" "}
            <a href="https://flowbite.com/" className="hover:underline">
              University College London, Bartlett School of Sustainable Construction
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                s.milcheva@ucl.ac.uk
            </li>
            <li>
                1-19 Torrington Place London WC1E 7HB
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;