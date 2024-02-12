import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import icon from "../Assets/icon-1-placeholder.png";
import icon2 from "../Assets/icon-2-placeholder.png";
import icon3 from "../Assets/icon-3-placeholder.png";
import floorplan from "../Assets/floorplan.png";
import areas from "../Assets/icon-areas.png";
import cheque from "../Assets/icon-cheque.png";
import rent from "../Assets/icon-rent.png";
import job from "../Assets/icon-job.png";
import savings from "../Assets/icon-savings.png";


import Loading from "../Components/Loading";

function scrollCarousel(targetImageNumber) {
  let carouselElement = document.getElementById("carousel");
  let carouselWidth = carouselElement.clientWidth;
  let targetImage = targetImageNumber - 1;
  let targetXPixel = carouselWidth * targetImage;
  carouselElement.scrollTo({ left: targetXPixel, behavior: "smooth" });
}

function Input({ setResult, setResult2 }) {
  // State declarations
  const [loading, setLoading] = useState(false);
  const [scrollToResults, setScrollToResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const loadingRef = useRef(null);

  const scrollToLoading = () => {
    return new Promise((resolve) => {
      if (loadingRef.current) {
        window.scrollTo({
          behavior: "smooth",
          top: loadingRef.current.offsetTop,
        });
        setTimeout(() => {
          resolve();
        }, 1000);
      }
    });
  };

  const handleInputs = async () => {
    setLoading(true);
    // await scrollToLoading();
    try {
      // Gather the input values
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

      // Send POST request
      const response = await axios.post(
        "https://shareown-backend.onrender.com/predict",
        postData,
      );
      setResult(response.data);

      setScrollToResults(true);
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while fetching data.");
    } finally {
      setLoading(false);
      setSubmitted(true); // Add this line  
    }
  };

  useEffect(() => {
    if (scrollToResults) {
      const element = document.getElementById("results");
      if (element) {
        window.scrollTo({
          behavior: "smooth",
          top: element.offsetTop,
        });
      }
    }
  }, [scrollToResults]);

  const options = [
    "E1",
    "E2",
    "E3",
    "E4",
    "E5",
    "E6",
    "E7",
    "E8",
    "E9",
    "E10",
    "E11",
    "E12",
    "E13",
    "E14",
    "E15",
    "E16",
    "E17",
    "E18",
    "E1W",
    "E20",
    "E98",
    "EC1A",
    "EC1M",
    "EC1N",
    "EC1P",
    "EC1R",
    "EC1V",
    "EC1Y",
    "EC2A",
    "EC2M",
    "EC2N",
    "EC2P",
    "EC2R",
    "EC2V",
    "EC2Y",
    "EC3A",
    "EC3M",
    "EC3N",
    "EC3P",
    "EC3R",
    "EC3V",
    "EC4A",
    "EC4M",
    "EC4N",
    "EC4P",
    "EC4R",
    "EC4V",
    "EC4Y",
    "N1",
    "N2",
    "N3",
    "N4",
    "N5",
    "N6",
    "N7",
    "N8",
    "N9",
    "N10",
    "N11",
    "N12",
    "N13",
    "N14",
    "N15",
    "N16",
    "N17",
    "N18",
    "N19",
    "N1C",
    "N1P",
    "N20",
    "N21",
    "N22",
    "N81",
    "NW1",
    "NW2",
    "NW3",
    "NW4",
    "NW5",
    "NW6",
    "NW7",
    "NW8",
    "NW9",
    "NW10",
    "NW11",
    "NW1W",
    "NW26",
    "SE1",
    "SE2",
    "SE3",
    "SE4",
    "SE5",
    "SE6",
    "SE7",
    "SE8",
    "SE9",
    "SE10",
    "SE11",
    "SE12",
    "SE13",
    "SE14",
    "SE15",
    "SE16",
    "SE17",
    "SE18",
    "SE19",
    "SE1P",
    "SE20",
    "SE21",
    "SE22",
    "SE23",
    "SE24",
    "SE25",
    "SE26",
    "SE27",
    "SE28",
    "SW2",
    "SW3",
    "SW4",
    "SW5",
    "SW6",
    "SW7",
    "SW8",
    "SW9",
    "SW10",
    "SW11",
    "SW12",
    "SW13",
    "SW14",
    "SW15",
    "SW16",
    "SW17",
    "SW18",
    "SW19",
    "SW1A",
    "SW1E",
    "SW1H",
    "SW1P",
    "SW1V",
    "SW1W",
    "SW1X",
    "SW1Y",
    "SW20",
    "SW95",
    "W2",
    "W3",
    "W4",
    "W5",
    "W6",
    "W7",
    "W8",
    "W9",
    "W10",
    "W11",
    "W12",
    "W13",
    "W14",
    "W1A",
    "W1B",
    "W1C",
    "W1D",
    "W1F",
    "W1G",
    "W1H",
    "W1J",
    "W1K",
    "W1S",
    "W1T",
    "W1U",
    "W1W",
    "WC1A",
    "WC1B",
    "WC1E",
    "WC1H",
    "WC1N",
    "WC1R",
    "WC1V",
    "WC1X",
    "WC2A",
    "WC2B",
    "WC2E",
    "WC2H",
    "WC2N",
    "WC2R",
    "BR1",
    "BR2",
    "BR3",
    "BR4",
    "BR5",
    "BR6",
    "BR7",
    "BR8",
    "CR0",
    "CR2",
    "CR3",
    "CR4",
    "CR5",
    "CR6",
    "CR7",
    "CR8",
    "CR9",
    "CR44",
    "CR90",
    "DA1",
    "DA5",
    "DA6",
    "DA7",
    "DA8",
    "DA14",
    "DA15",
    "DA16",
    "DA17",
    "DA18",
    "EN1",
    "EN2",
    "EN3",
    "EN4",
    "EN5",
    "EN6",
    "EN7",
    "EN8",
    "EN9",
    "HA0",
    "HA1",
    "HA2",
    "HA3",
    "HA4",
    "HA5",
    "HA6",
    "HA7",
    "HA8",
    "HA9",
    "IG1",
    "IG2",
    "IG3",
    "IG4",
    "IG5",
    "IG6",
    "IG7",
    "IG8",
    "IG9",
    "IG11",
    "KT1",
    "KT2",
    "KT3",
    "KT4",
    "KT5",
    "KT6",
    "KT7",
    "KT8",
    "KT9",
    "KT17",
    "KT18",
    "KT19",
    "KT22",
    "RM1",
    "RM2",
    "RM3",
    "RM4",
    "RM5",
    "RM6",
    "RM7",
    "RM8",
    "RM9",
    "RM10",
    "RM11",
    "RM12",
    "RM13",
    "RM14",
    "RM15",
    "SM1",
    "SM2",
    "SM3",
    "SM4",
    "SM5",
    "SM6",
    "SM7",
    "TN14",
    "TN16",
    "TW1",
    "TW2",
    "TW3",
    "TW4",
    "TW5",
    "TW6",
    "TW7",
    "TW8",
    "TW9",
    "TW10",
    "TW11",
    "TW12",
    "TW13",
    "TW14",
    "TW15",
    "TW19",
    "UB1",
    "UB2",
    "UB3",
    "UB4",
    "UB5",
    "UB6",
    "UB7",
    "UB8",
    "UB9",
    "UB10",
    "UB11",
    "UB18",
    "WD3",
    "WD6",
    "WD23",
  ];

  const joboptions = [
    "Corporate managers and directors",
    "Other managers and proprietors",
    "Science, research, engineering and technology professionals",
    "Health professionals",
    "Teaching and other educational professionals",
    "Business, media and public service professionals",
    "Science, engineering and technology associate professionals",
    "Health and social care associate professionals",
    "Protective service occupations",
    "Culture, media and sports occupations",
    "Business and public service associate professionals",
    "Administrative occupations",
    "Secretarial and related occupations",
    "Skilled agricultural and related trades",
    "Skilled metal, electrical and electronic trades",
    "Skilled construction and building trades",
    "Textiles, printing and other skilled trades",
    "Caring personal service occupations",
    "Leisure, travel and related personal service occupations",
    "Community and civil enforcement occupations",
    "Sales occupations",
    "Customer service occupations",
    "Process, plant and machine operatives",
    "Transport and mobile machine drivers and operatives",
    "Elementary trades and related occupations",
    "Elementary administration and service occupations",
    "Does not apply",
  ];

  const bedroomOptions = ["1", "2", "3", "4+"];
  const propertyTypeOptions = [
    "Apartment",
    "Detached House",
    "Semi-detached House",
    "Terrace House",
  ];



  const [sliderValue, setSliderValue] = useState(1);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div id="input" className="bg-gray-200 min-h-screen">
      <div id="carousel" className="carousel w-full py-60">
        {/* Slide 1: Postcode (unused) */}
        <div
          id="slide1"
          className="carousel-item relative w-full flex justify-center"
        >
          <img src={areas} className="h-32" alt="london areas map" />
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-black">
                What postcode do you want to live in?
              </span>
            </label>
            <select
              className="input input-bordered w-full max-w-xs"
              id="input-1"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end px-5 my-10">
            <button className="btn" onClick={() => scrollCarousel(2)}>
              Next
            </button>
          </div>
        </div>

        {/* Slide 2: Property Type (unused) */}
        <div
          id="slide2"
          className="carousel-item relative w-full flex justify-center"
        >
          <img src={icon2} className="h-32" alt="house icon"/>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-black">
                What kind of property do you want to live in?
              </span>
            </label>
            <select
              className="input input-bordered w-full max-w-xs"
              id="input-2"
            >
              <option value="Apartment">Apartment</option>
              <option value="Terraced House">Terraced House</option>
              <option value="Semi-detached House">Semi-detached House</option>
              <option value="Detached House">Detached House</option>
            </select>
          </div>
          <div className="flex justify-between px-5 my-10">
            <button className="btn" onClick={() => scrollCarousel(1)}>
              Back
            </button>
            <button className="btn" onClick={() => scrollCarousel(3)}>
              Next
            </button>
          </div>
        </div>

        {/* Slide 3: Bedrooms (unused) */}
        <div
          id="slide3"
          className="carousel-item relative w-full flex justify-center"
        >
          <img src={floorplan} className="h-32" alt="floorplan"/>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-black">
                How many bedrooms does your desired house have?
              </span>
            </label>
            <div className="rounded-lg p-4 shadow-lg max-w-[300px]">
              <div className="p-4">
                <span className="text-sm"> </span>
                <span className="text-sm text-black"> {sliderValue} </span>
                <input
                  id="input-3"
                  className="w-full accent-indigo-600"
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  onChange={handleSliderChange}
                />
                <div className="-mt-2 flex w-full justify-between">
                  <span className="text-sm text-gray-600"> 1 </span>
                  <span className="text-sm text-gray-600"> 4+ </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-5 my-10">
            <button className="btn" onClick={() => scrollCarousel(2)}>
              Back
            </button>
            <button className="btn" onClick={() => scrollCarousel(4)}>
              Next
            </button>
          </div>
        </div>

        {/* Slide 4: Occupation (unused) */}
        <div
          id="slide4"
          className="carousel-item relative w-full flex justify-center"
        >
          <img src={job} className="h-32" alt="job icon"/>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-black">What is your occupation?</span>
            </label>
            <select
              className="input input-bordered w-full max-w-xs"
              id="input-4"
            >
              {joboptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between px-5 my-10">
            <button className="btn" onClick={() => scrollCarousel(3)}>
              Back
            </button>
            <button className="btn" onClick={() => scrollCarousel(5)}>
              Next
            </button>
          </div>
        </div>

        {/* Slide 5: Monthly Household Income After Tax (used) */}
        <div
          id="slide5"
          className="carousel-item relative w-full flex justify-center"
        >
          <img src={cheque} className="h-32" alt="income icon"/>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-black">
                What is your monthly household income after tax?
              </span>
            </label>
            <input
              id="input-5"
              className="input input-bordered w-full max-w-xs"
              type="number" // Change to numerical input
              min="0"
              max="15000"
              placeholder="Enter amount in £"
            />
          </div>
          <div className="flex justify-between px-5 my-10">
            <button className="btn" onClick={() => scrollCarousel(4)}>
              Back
            </button>
            <button className="btn" onClick={() => scrollCarousel(6)}>
              Next
            </button>
          </div>
        </div>

        {/* Slide 6: Post Tax Income Spent on Expenses (%) (used) */}
        <div
          id="slide6"
          className="carousel-item relative w-full flex justify-center"
        >
          <img src={icon3} className="h-32" alt="pound sign icon"/>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-black">
                How much of your post-tax income is spent on non-housing expenses (%)?
              </span>
            </label>
            <input
              id="input-6"
              className="input input-bordered w-full max-w-xs"
              type="number" // Change to numerical input
              min="1"
              max="100"
              placeholder="Enter percentage"
            />
          </div>
          <div className="flex justify-between px-5 my-10">
            <button className="btn" onClick={() => scrollCarousel(5)}>
              Back
            </button>
            <button className="btn" onClick={() => scrollCarousel(7)}>
              Next
            </button>
          </div>
        </div>

        {/* Slide 7: Age of Head of Household (used) */}
        <div
          id="slide7"
          className="carousel-item relative w-full flex justify-center"
        >
          <img src={icon} className="h-32" alt="head of household icon"/>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-black">
                What is the age of your head of household?
              </span>
            </label>
            <div className="rounded-lg p-4 shadow-lg max-w-[300px]">
              <div className="p-4">
                <span className="text-sm"> </span>
                <span className="text-sm text-black"> {sliderValue} </span>
                <input
                  id="input-7"
                  className="w-full accent-indigo-600"
                  type="range"
                  min="18"
                  max="67"
                  step="1"
                  onChange={handleSliderChange}
                />
                <div className="-mt-2 flex w-full justify-between">
                  <span className="text-sm text-gray-600"> 18 </span>
                  <span className="text-sm text-gray-600"> 67 </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-5 my-10">
            <button className="btn" onClick={() => scrollCarousel(6)}>
              Back
            </button>
            <button className="btn" onClick={() => scrollCarousel(8)}>
              Next
            </button>
          </div>
        </div>

        {/* Slide 8: Current Savings (used) */}
        <div
          id="slide8"
          className="carousel-item relative w-full flex justify-center"
        >
          <img src={savings} className="h-32" alt="savings icon"/>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-black">
                How much do you have in current savings?
              </span>
            </label>
            <input
              id="input-8"
              className="input input-bordered w-full max-w-xs"
              type="number" // Changed from "range" to "number"
              min="0" // Minimum value for the input, can be adjusted as needed
              placeholder="Enter your current savings in £"
            />
          </div>
          <div className="flex justify-between px-5 my-10">
            <button className="btn" onClick={() => scrollCarousel(7)}>
              Back
            </button>
            <button className="btn" onClick={() => scrollCarousel(9)}>
              Next
            </button>
          </div>
        </div>

        {/* Slide 9: Current Rent (unused) */}
        <div
          id="slide9"
          className="carousel-item relative w-full flex justify-center"
        >
          <img src={rent} className="h-32" alt="rent icon"/>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-black">What is your current monthly rent?</span>
            </label>
            <input
              id="input-9"
              className="input input-bordered w-full max-w-xs"
              type="number" // Changed from "range" to "number"
              min="0" // Minimum value for the input
              max="10000" // Maximum value for the input
              placeholder="Enter your current rent in £"
            />
          </div>
          <div className="flex justify-between px-5 my-10">
            <button className="btn" onClick={() => scrollCarousel(8)}>
              Back
            </button>
            <button className="btn" onClick={() => scrollCarousel(10)}>
              Next
            </button>
          </div>
        </div>

        {/* Slide 10: Final Confirmation */}
        <div
          id="slide10"
          className="carousel-item relative w-full flex justify-center"
        >
          {/* Content for slide 10, if needed */}
          {loading ? <Loading/> : <div className="flex justify-center px-5 my-10">
          <button
              className="btn"
              onClick={!submitted ? handleInputs : null} // Prevent function if already submitted
              disabled={loading || submitted} // Disable button during loading or after submission
            >
              {submitted ? 'Submitted' : 'Submit'}
            </button>
          </div>}
        </div>
      </div>
    </div>
  );
}
export default Input;
