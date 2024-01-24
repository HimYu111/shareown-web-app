import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            UCL © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Placeholder™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                +44 (0)20 3108 3220
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                bssc.enquiries@ucl.ac.uk{" "}
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                1-19 Torrington Place London WC1E 7HB
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
