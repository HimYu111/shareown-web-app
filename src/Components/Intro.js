import React from "react";

function Intro() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
  };
  return (
    <div className="bg-gray-900 h-screen ">
      <div className="translate-y-[10rem]">
        <h1 className="text-5xl text-white py-20">
          Welcome to the ownership model calculator. Discover our modelled routes to home ownership.
        </h1>
        <p className="text-2xl text-white py-20">
          Click on the 'Questions' button below to enter your inputs in order to begin your simulation.
          (This build uses the beta model with SO testing)
        </p>
        <div className="flex justify-end pr-20">
          <button
            onClick={() => scrollToSection("input")}
            style={{ cursor: "pointer" }}
            className="btn btn-lg bg-accent text-neutral"
          >
            Questions
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
