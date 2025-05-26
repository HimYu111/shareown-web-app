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
    <div className="intro-and-3cols-wrapper">
      <div className="bg-gray-900 main-intro-wrapper">
      <div className="main-intro">
        <h1 className="text-6xl text-white py-10" style={{ color: 'lightblue', fontWeight: 'bold', textAlign: 'center' }}>
          Housing Affordability Lifetime Wealth Simulator
        </h1>
        <div className="main-underheading">
        <p className="text-3xl text-white py-10" style={{ textAlign: 'center' }}>
        Explore your options for owning a home
        </p>     
        <p className="text-3xl text-white py-10" style={{ textAlign: 'center' }}>
        Calculate your lifetime wealth under various ownership scenarios 
        </p></div>

        <div className="button-wrapper">
          <button
            onClick={() => scrollToSection("input")}
            className="btn btn-lg text-neutral "
          >
            Start Now
          </button>
        </div>
      </div>

      </div>
      <div className="main-3-cols">
        <div className="main-col1 main-col" >
          <div className="main-col1-1st-part">
            <h2 className="text-4xl ">
            What it is
            </h2>
            <p >
            Explore your options for full and shared ownership. 
           </p>
           <p >
           Find out your wealth over time as a home owner.
           </p>
          </div>
          <div className="main-col1-2nd-part">
            <h2 className="text-4xl ">
            How it works
            </h2>          
            <p >
            We will ask you to provide some basic information about your income, desired location of property, property price, age, and more, before the simulator is able to ‘run the numbers’.
           </p>
           </div>

        </div>

        <div className="main-col2 main-col">
        <div>
        <h2 className="text-4xl ">
        What you find out
        </h2> 
          <p className="main-col2-underheading">A comparison between full ownership and shared ownership.
          </p>
          <h4 className="text-2xl font-bold ">Pathways to home ownership</h4>
          <p>See when you can buy a home, the deposit and the costs associated with owning. 
          </p>
          <h4 className="text-2xl font-bold ">Staircasing</h4>
          <p>See a way to buy more shares as a pathway to full ownership
          </p>
          <h4 className="text-2xl font-bold ">Lifetime wealth</h4>
          <p>Compare savings and housing wealth under shared ownership and full ownership.
          </p>
        </div>

        <div className="cols-last-sentance">        
        </div>
        </div>

      </div>
    </div>
  );
}

export default Intro;