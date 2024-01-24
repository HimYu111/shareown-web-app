import React, { useEffect } from "react";
import { Ripple, initTE } from "tw-elements";
function Scroll() {
  initTE({ Ripple });

  const scrollUp = () => {
    const currentUpPosition =
      window.scrollY || document.documentElement.scrollTop;
    const newUpPosition = currentUpPosition - 1000;

    window.scrollTo({ top: newUpPosition, behavior: "smooth" });
  };

  const scrollDown = () => {
    const currentDownPosition =
      window.scrollY || document.documentElement.scrollBottom;
    const newDownPosition = currentDownPosition + 1000;

    window.scrollTo({ top: newDownPosition, behavior: "smooth" });
  };

  useEffect(() => {
    const handleUpButtonClick = () => {
      scrollUp();
    };
    const handleDownButtonClick = () => {
      scrollDown();
    };

    const myupbutton = document.getElementById("btn-up");
    const mydownbutton = document.getElementById("btn-down");

    if (myupbutton) {
      myupbutton.addEventListener("click", handleUpButtonClick);
    }

    if (mydownbutton) {
      mydownbutton.addEventListener("click", handleDownButtonClick);
    }

    return () => {
      if (myupbutton) {
        myupbutton.removeEventListener("click", handleUpButtonClick);
      }
      if (mydownbutton) {
        mydownbutton.removeEventListener("click", handleDownButtonClick);
      }
    };
  }, []);

  return (
    <div>
      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="!fixed bottom-96 right-5 rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
        id="btn-up"
      >
        <svg
          focusable="false"
          data-prefix="fas"
          className="h-4 w-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </button>

      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="!fixed bottom-80 right-5 rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
        id="btn-down"
      >
        <svg
          focusable="false"
          data-prefix="fas"
          className="h-4 w-4 transform rotate-180"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default Scroll;
