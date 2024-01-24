import React from "react";
import axios from "axios";

function Question({ setResult, hasChosenNo, setHasChosenNo }) {
  const handleYes = async (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
    try {
      const answer1 = document.getElementById("input-1").value;
      const answer2 = document.getElementById("input-2").value;
      const answer3 = document.getElementById("input-3").value;
      const answer4 = document.getElementById("input-4").value;
      const answer5 = parseFloat(document.getElementById("input-5").value);
      const answer6 = parseFloat(document.getElementById("input-6").value);
      const answer7 = parseFloat(document.getElementById("input-7").value);
      const answer8 = parseFloat(document.getElementById("input-8").value);
      const answer9 = parseFloat(document.getElementById("input-9").value);

      const postData = {
        postcode: answer1,
        propertyType: answer2,
        bedrooms: answer3,
        occupation: answer4,
        monthlyIncome: answer5,
        expensePercentage: answer6,
        headOfHouseholdAge: answer7,
        savings: answer8,
        currentRent: answer9,
      };

      const response = await axios.post(
        "http://localhost:5000/predict",
        postData,
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while fetching data.");
    }
  };
  const handleNo = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
    setHasChosenNo(true);
  };

  return (
    <div className="bg-slate-800 py-20">
      <h1 className="text-3xl text-white">
        Would you like to explore shared ownership?
      </h1>
      <h2 className="text-2xl text-white my-5">
        Shared ownership involves multiple parties jointly owning a property,
        typically between a buyer and a housing association, enabling
        individuals to purchase a percentage of the property and pay rent on the
        remaining portion.
      </h2>
      <h2 className="text-2xl text-white my-5">
        It is also beneficial as it provides an affordable entry into
        homeownership by allowing individuals to purchase a portion of a
        property, reducing the upfront cost and financial burden.
      </h2>
      <div className="py-10 flex justify-evenly">
        <button
          onClick={() => handleYes("results2")}
          className="btn btn-lg btn-accent text-neutral"
        >Yes</button>
        <button
          onClick={() => handleNo("results2")}
          className="btn btn-lg btn-accent text-neutral"
        >No</button>
      </div>
    </div>
  );
}

export default Question;
