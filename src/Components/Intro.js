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
    <div className="bg-gray-900" style={{ minHeight: 'calc(150vh + 100px)' }}>
      <div className="translate-y-[10rem]">
        <h1 className="text-5xl text-white py-20" style={{ color: 'lightblue', fontWeight: 'bold', textAlign: 'center' }}>
          Housing Affordability <i>Lifetime Wealth</i> Calculator
        </h1>
        <p className="text-2xl text-white py-20" style={{ textAlign: 'center' }}>
        Calculate Your Future Home Ownership Path and Lifetime Wealth Under Various Ownership Scenarios 
          <a href="#find-out-more" style={{ textDecoration: 'underline' }}>Find out more about Shared Ownership</a>.
        </p>
        <h2 className="text-4xl text-white py-20" style={{ color: 'lightblue', fontWeight: 'bold', textAlign: 'center'}}>
          What it is 
        </h2>
        <p className="text-2xl text-white py-20" style={{ textAlign: 'center' }}>
        Our  housing affordability lifetime wealth calculator will help calculate your future home ownership path scenarios. 
        It will also show you the wealth you accumulate during the rest of your working life in two scenarios, under full home ownership versus shared ownership.
         </p>
        <h2 className="text-4xl text-white py-20" style={{ color: 'lightblue', fontWeight: 'bold', textAlign: 'center'}}>
          How it works
        </h2>
        <p className="text-2xl text-white py-20" style={{ textAlign: 'center' }}>
        Our  housing affordability lifetime wealth calculator will help calculate your future home ownership path scenarios. 
        It will also show you the wealth you accumulate during the rest of your working life in two scenarios, under full home ownership versus shared ownership.
         </p>
         
        <p className="text-2xl text-white py-20" style={{ textAlign: 'center' }}>
        Enter your details
        We will ask you to provide some basic information about your income, desired location of property, property price, age, and more, before the calculator is able to ‘run the numbers’.  
        </p>
        
        <p className="text-2xl text-white py-20" style={{ textAlign: 'center' }}>
          <i>The lifetime calculator is based on an EPSRC-UCL research funded project. The underlying calculator is developed by academics at UCL and Durham University and is free of charge. It is not for commercial use and does not provide financial advice. ®</i>
        </p>
        <div className="flex justify-end pr-20">
          <button
            onClick={() => scrollToSection("input")}
            style={{ cursor: "pointer", backgroundColor: '#00BFFF' }} // Example button color change, adjust as needed
            className="btn btn-lg text-neutral"
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;