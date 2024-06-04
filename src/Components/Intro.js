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
          ShareOwn Calculator</h1>
        <div className="main-underheading">        
        <p className="text-3xl text-white py-10" style={{ textAlign: 'center' }}>
          Find out if and when you can become a shared owner or a home owner.
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
          <div>
            <h2 className="text-4xl ">
          What it is 
          </h2>
          </div>
          <div>          
            <p >
            Learn how your home ownership decisions will impact your lifetime wealth
           </p>
           </div>

        </div>
        <div className="main-col2 main-col">        
        <div><h2 className="text-4xl">
          How it works
        </h2>
        </div>
        <div> <p >
        We will ask you to provide some basic information about your income, desired location of property, property price, age, and more, before the calculator is able to ‘run the numbers’.
         </p>
         </div>




        </div>
        <div className="main-col3 main-col">
        <div>
          <h2 className="text-4xl ">
          What you find out
          </h2>
        </div>
        <div>          
          <p>
          The calculator compares pathways to home ownership considering renting, buying using shared ownership and full ownership. 
           </p>
        </div>

        <div className="col3-additional-info">
          <h3 className="text-2xl">
          Pathway to home ownership
          </h3>
        
                
          <p>
          You will see at what age you will be able to buy your property or shared ownership as well as when you would fully own your home. 
           </p>
        

        
          <h3 className="text-2xl">
          Staircasing
          </h3>

          <p>
          You will be provided with a timeline of optimal staircasing under shared ownership.
           </p>
        
           <h3 className="text-2xl">
           Lifetime wealth
          </h3>

          <p>
          You will be provided with a comparison graph of your lifetime wealth under shared ownership versus full ownership.
           </p>
        
        </div>
        </div>

        <div className="cols-last-sentance">        
        </div>
        
      </div>
    </div>
  );
}

export default Intro;