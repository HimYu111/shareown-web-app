import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Components/Loading";

function Input({ setResult }) {
  const [loading, setLoading] = useState(false);
  const [scrollToResults, setScrollToResults] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateInputs = () => {
    const inputs = [
      document.getElementById("input-1").value,
      document.getElementById("input-2").value,
      document.getElementById("input-3").value,
      document.getElementById("input-4").value,
      document.getElementById("input-5").value,
      document.getElementById("input-6").value,
      document.getElementById("input-7").value,
      document.getElementById("input-8").value,
      document.getElementById("input-9").value,
      document.getElementById("input-10").value,
      document.getElementById("input-11").value,
    ];
    return inputs.every(input => input !== "" && input !== null);
  };

  const handleInputs = async () => {
    if (!validateInputs()) {
      setErrorMessage("Please fill in all fields before submitting.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setErrorMessage(""); // Clear any previous error messages
    try {
      const postData = {
        postcode: document.getElementById("input-1").value,
        propertyType: document.getElementById("input-2").value,
        bedrooms: document.getElementById("input-3").value,
        occupation: document.getElementById("input-4").value,
        housePrice: parseFloat(document.getElementById("input-5").value),
        isFirstTimeBuyer: document.getElementById("input-6").value === "Yes" ? 1 : 0,
        income: parseFloat(document.getElementById("input-7").value),
        monthspending: parseFloat(document.getElementById("input-8").value),
        headOfHouseholdAge: parseFloat(document.getElementById("input-9").value),
        savings: parseFloat(document.getElementById("input-10").value),
        currentRent: parseFloat(document.getElementById("input-11").value),
      };

      const response = await axios.post("https://shareown-backend.onrender.com/predict", postData);
      setResult(response.data);
      setScrollToResults(true);
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while fetching data.");
    } finally {
      setLoading(false);
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
  const propertyTypeOptions = ["Apartment", "Detached House", "Semi-detached House", "Terrace House"];



  return (
    <div id="input" className="bg-gray-200 min-h-screen">
      <div className="flex justify-center pt-20">
        {/* Column 1 */}
        <div className="w-4/12 p-12 pl-4">
          <div className="mb-4">
            <label className="block text-black mb-2">
              What postcode do you want to live in?
            </label>
            <select className="input input-bordered w-full" id="input-1">
                {options.map((postcode, index) => (
                  <option key={index} value={postcode}>{postcode}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              What kind of property do you want to live in?
            </label>
            <select className="input input-bordered w-full" id="input-2">
              {propertyTypeOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              How many bedrooms does your desired home have?
            </label>
            <select className="input input-bordered w-full" id="input-3">
              {bedroomOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              What is your occupation?
            </label>
            <select className="input input-bordered w-full" id="input-4">
            {joboptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              Are you a first-time buyer?
            </label>
            <select className="input input-bordered w-full" id="input-6">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        {/* Column 2 */}
        <div className="w-4/12 p-4 pl-12">
          <div className="mb-4">
              <label className="block text-black mb-2">
                What is the price of the home you wish to purchase?
              </label>
              <input
                id="input-5"
                className="input input-bordered w-full"
                type="number"
                min="0"
                placeholder="Enter house price in £"
              />
            </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              What is the current annual gross income of the household buying the home (indicate the total amount if more than one person buying the home)?
            </label>
            <input
              id="input-7"
              className="input input-bordered w-full"
              type="number"
              min="0"
              max="15000"
              placeholder="Enter income in £"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              How much do you think you spend each month (excluding housing)?
            </label>
            <input
              id="input-8"
              className="input input-bordered w-full"
              type="number"
              min="1"
              max="100"
              placeholder="Enter amount in £"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              How old are you?
            </label>
            <input
              id="input-9"
              className="input input-bordered w-full"
              type="number"
              min="18"
              max="80"
              placeholder="Enter age"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              How much in savings do you have?
            </label>
            <input
              id="input-10"
              className="input input-bordered w-full"
              type="number"
              min="0"
              placeholder="Enter savings amount in £"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              What is your current monthly rent?
            </label>
            <input
              id="input-11"
              className="input input-bordered w-full"
              type="number"
              min="0"
              max="10000"
              placeholder="Enter rent amount in £"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="btn btn-primary mb-10"
          onClick={handleInputs}
          disabled={loading}
        >
          {loading ? <Loading /> : "Submit"}
        </button>
      </div>
      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
    </div>
  );
}

export default Input;