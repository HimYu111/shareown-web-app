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
    <div className="bg-gray-900" style={{ minHeight: 'calc(130vh + 100px)' }}>
      <div className="translate-y-[10rem]">
        <h1 className="text-5xl text-white py-20" style={{ color: 'lightblue', fontWeight: 'bold', textAlign: 'left' }}>
          Housing Affordability <i>Lifetime Wealth</i> Calculator
        </h1>
        <p className="text-2xl text-white py-20" style={{ textAlign: 'left' }}>
          Our interactive housing affordability lifetime wealth calculator will help show you the wealth you accumulate during the rest of your working life when you own a property outright versus using Shared Ownership 
          <a href="#find-out-more" style={{ textDecoration: 'underline' }}> find out more about Shared Ownership</a>.
        </p>
        <h2 className="text-4xl text-white py-20" style={{ color: 'lightblue', fontWeight: 'bold', textAlign: 'left'}}>
          You can use our Lifetime Wealth Calculator to better understand your housing affordability.
        </h2>
        <p className="text-2xl text-white py-20" style={{ textAlign: 'left' }}>
          You can understand at what age you can buy a home (outright or using Shared Ownership), how long it will take you to repay your mortgage (or/and staircase) and how much wealth are you accumulating during your working life up until you retire.
          
          <i>The lifetime calculator is based on an EPSRC-UCL research funded project. The underlying calculator is developed by academics at UCL and Durham University and is free of charge. It is not for commercial use and does not provide financial advice. ®</i>
        </p>
        <div className="flex justify-end pr-20">
          <button
            onClick={() => scrollToSection("input")}
            style={{ cursor: "pointer", backgroundColor: '#00BFFF' }} // Example button color change, adjust as needed
            className="btn btn-lg text-neutral"
          >
            Questions
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;