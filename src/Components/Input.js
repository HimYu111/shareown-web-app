import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Components/Loading";
import Cookies from 'js-cookie';
import { setSessionCookie } from './sessionUtils';
import Results from './Results'; // Import the Results component

function Input({ setResult }) {
  const [loading, setLoading] = useState(false);
  const [scrollToResults, setScrollToResults] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValues, setInputValues] = useState({
    housePrice: "",
    income: "",
    monthspending: "",
    savings: "",
    currentRent: "",
  });
  const [formattedValues, setFormattedValues] = useState({
    housePrice: "",
    income: "",
    monthspending: "",
    savings: "",
    currentRent: "",
  });

  const ageInputRef = useRef(null);

  const formatNumber = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat('en-GB').format(value);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const numericValue = value.replace(/,/g, '');
    if (!isNaN(numericValue)) {
      setInputValues((prevValues) => ({
        ...prevValues,
        [id]: numericValue,
      }));
      setFormattedValues((prevValues) => ({
        ...prevValues,
        [id]: formatNumber(numericValue),
      }));
    }
  };

  const validateInputs = () => {
    const inputs = [
      document.getElementById("input-1").value,
      document.getElementById("input-2").value,
      document.getElementById("input-3").value,
      document.getElementById("input-4").value,
      inputValues.housePrice,
      document.getElementById("input-6").value,
      inputValues.income,
      inputValues.monthspending,
      document.getElementById("input-9").value,
      inputValues.savings,
      inputValues.currentRent,
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
        // Check if consent has been given
        let sessionId = null;
        if (Cookies.get('consent') === 'true') {
            sessionId = setSessionCookie(); // Only set session cookie if consented
        }

        const postData = {
            sessionId: sessionId,
            postcode: document.getElementById("input-1").value,
            propertyType: document.getElementById("input-2").value,
            bedrooms: document.getElementById("input-3").value,
            occupation: document.getElementById("input-4").value,
            housePrice: parseFloat(inputValues.housePrice),
            isFirstTimeBuyer: document.getElementById("input-6").value === "Yes" ? 1 : 0,
            income: parseFloat(inputValues.income),
            monthspending: parseFloat(inputValues.monthspending),
            headOfHouseholdAge: parseFloat(document.getElementById("input-9").value),
            savings: parseFloat(inputValues.savings),
            currentRent: parseFloat(inputValues.currentRent),
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
    if (scrollToResults && Results) {
      const element = document.getElementById("results");
      if (element) {
        window.scrollTo({
          behavior: "smooth",
          top: element.offsetTop,
        });
      }
      setScrollToResults(false); // Reset scroll flag
    }
  }, [scrollToResults, Results]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (ageInputRef.current && ageInputRef.current.contains(e.target)) {
        e.preventDefault();
      }
    };

    if (ageInputRef.current) {
      ageInputRef.current.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (ageInputRef.current) {
        ageInputRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);


  const options = ["",
    "Hartlepool",
    "Middlesbrough",
    "Redcar and Cleveland",
    "Stockton-on-Tees",
    "Darlington",
    "County Durham",
    "Northumberland",
    "Newcastle upon Tyne",
    "North Tyneside",
    "South Tyneside",
    "Sunderland",
    "Gateshead",
    "Halton",
    "Warrington",
    "Blackburn with Darwen",
    "Blackpool",
    "Cheshire East",
    "Cheshire West and Chester",
    "Allerdale",
    "Barrow-in-Furness",
    "Carlisle",
    "Copeland",
    "Eden",
    "South Lakeland",
    "Burnley",
    "Chorley",
    "Fylde",
    "Hyndburn",
    "Lancaster",
    "Pendle",
    "Preston",
    "Ribble Valley",
    "Rossendale",
    "South Ribble",
    "West Lancashire",
    "Wyre",
    "Bolton",
    "Bury",
    "Manchester",
    "Oldham",
    "Rochdale",
    "Salford",
    "Stockport",
    "Tameside",
    "Trafford",
    "Wigan",
    "Knowsley",
    "Liverpool",
    "St. Helens",
    "Sefton",
    "Wirral",
    "Kingston upon Hull, City of",
    "East Riding of Yorkshire",
    "North East Lincolnshire",
    "North Lincolnshire",
    "York",
    "Craven",
    "Hambleton",
    "Harrogate",
    "Richmondshire",
    "Ryedale",
    "Scarborough",
    "Selby",
    "Barnsley",
    "Doncaster",
    "Rotherham",
    "Sheffield",
    "Bradford",
    "Calderdale",
    "Kirklees",
    "Leeds",
    "Wakefield",
    "Derby",
    "Leicester",
    "Rutland",
    "Nottingham",
    "Amber Valley",
    "Bolsover",
    "Chesterfield",
    "Derbyshire Dales",
    "Erewash",
    "High Peak",
    "North East Derbyshire",
    "South Derbyshire",
    "Blaby",
    "Charnwood",
    "Harborough",
    "Hinckley and Bosworth",
    "Melton",
    "North West Leicestershire",
    "Oadby and Wigston",
    "Boston",
    "East Lindsey",
    "Lincoln",
    "North Kesteven",
    "South Holland",
    "South Kesteven",
    "West Lindsey",
    "North Northamptonshire",
    "West Northamptonshire",
    "Ashfield",
    "Bassetlaw",
    "Broxtowe",
    "Gedling",
    "Mansfield",
    "Newark and Sherwood",
    "Rushcliffe",
    "Herefordshire, County of",
    "Telford and Wrekin",
    "Stoke-on-Trent",
    "Shropshire",
    "Cannock Chase",
    "East Staffordshire",
    "Lichfield",
    "Newcastle-under-Lyme",
    "South Staffordshire",
    "Stafford",
    "Staffordshire Moorlands",
    "Tamworth",
    "North Warwickshire",
    "Nuneaton and Bedworth",
    "Rugby",
    "Stratford-on-Avon",
    "Warwick",
    "Bromsgrove",
    "Malvern Hills",
    "Redditch",
    "Worcester",
    "Wychavon",
    "Wyre Forest",
    "Birmingham",
    "Coventry",
    "Dudley",
    "Sandwell",
    "Solihull",
    "Walsall",
    "Wolverhampton",
    "Peterborough",
    "Luton",
    "Southend-on-Sea",
    "Thurrock",
    "Bedford",
    "Central Bedfordshire",
    "Cambridge",
    "East Cambridgeshire",
    "Fenland",
    "Huntingdonshire",
    "South Cambridgeshire",
    "Basildon",
    "Braintree",
    "Brentwood",
    "Castle Point",
    "Chelmsford",
    "Colchester",
    "Epping Forest",
    "Harlow",
    "Maldon",
    "Rochford",
    "Tendring",
    "Uttlesford",
    "Broxbourne",
    "Dacorum",
    "Hertsmere",
    "North Hertfordshire",
    "Three Rivers",
    "Watford",
    "Breckland",
    "Broadland",
    "Great Yarmouth",
    "King's Lynn and West Norfolk",
    "North Norfolk",
    "Norwich",
    "South Norfolk",
    "Babergh",
    "Ipswich",
    "Mid Suffolk",
    "St Albans",
    "Welwyn Hatfield",
    "East Hertfordshire",
    "Stevenage",
    "East Suffolk",
    "West Suffolk",
    "City of London",
    "Barking and Dagenham",
    "Barnet",
    "Bexley",
    "Brent",
    "Bromley",
    "Camden",
    "Croydon",
    "Ealing",
    "Enfield",
    "Greenwich",
    "Hackney",
    "Hammersmith and Fulham",
    "Haringey",
    "Harrow",
    "Havering",
    "Hillingdon",
    "Hounslow",
    "Islington",
    "Kensington and Chelsea",
    "Kingston upon Thames",
    "Lambeth",
    "Lewisham",
    "Merton",
    "Newham",
    "Redbridge",
    "Richmond upon Thames",
    "Southwark",
    "Sutton",
    "Tower Hamlets",
    "Waltham Forest",
    "Wandsworth",
    "Westminster",
    "Medway",
    "Bracknell Forest",
    "West Berkshire",
    "Reading",
    "Slough",
    "Windsor and Maidenhead",
    "Wokingham",
    "Milton Keynes",
    "Brighton and Hove",
    "Portsmouth",
    "Southampton",
    "Isle of Wight",
    "Buckinghamshire",
    "Eastbourne",
    "Hastings",
    "Lewes",
    "Rother",
    "Wealden",
    "Basingstoke and Deane",
    "East Hampshire",
    "Eastleigh",
    "Fareham",
    "Gosport",
    "Hart",
    "Havant",
    "New Forest",
    "Rushmoor",
    "Test Valley",
    "Winchester",
    "Ashford",
    "Canterbury",
    "Dartford",
    "Dover",
    "Gravesham",
    "Maidstone",
    "Sevenoaks",
    "Folkestone and Hythe",
    "Swale",
    "Thanet",
    "Tonbridge and Malling",
    "Tunbridge Wells",
    "Cherwell",
    "Oxford",
    "South Oxfordshire",
    "Vale of White Horse",
    "West Oxfordshire",
    "Elmbridge",
    "Epsom and Ewell",
    "Guildford",
    "Mole Valley",
    "Reigate and Banstead",
    "Runnymede",
    "Spelthorne",
    "Surrey Heath",
    "Tandridge",
    "Waverley",
    "Woking",
    "Adur",
    "Arun",
    "Chichester",
    "Crawley",
    "Horsham",
    "Mid Sussex",
    "Worthing",
    "Bath and North East Somerset",
    "Bristol, City of",
    "North Somerset",
    "South Gloucestershire",
    "Plymouth",
    "Torbay",
    "Swindon",
    "Cornwall",
    "Isles of Scilly",
    "Wiltshire",
    "Bournemouth, Christchurch and Poole",
    "Dorset",
    "East Devon",
    "Exeter",
    "Mid Devon",
    "North Devon",
    "South Hams",
    "Teignbridge",
    "Torridge",
    "West Devon",
    "Cheltenham",
    "Cotswold",
    "Forest of Dean",
    "Gloucester",
    "Stroud",
    "Tewkesbury",
    "Mendip",
    "Sedgemoor",
    "South Somerset",
    "Somerset West and Taunton",
    "Isle of Anglesey",
    "Gwynedd",
    "Conwy",
    "Denbighshire",
    "Flintshire",
    "Wrexham",
    "Ceredigion",
    "Pembrokeshire",
    "Carmarthenshire",
    "Swansea",
    "Neath Port Talbot",
    "Bridgend",
    "Vale of Glamorgan",
    "Cardiff",
    "Rhondda Cynon Taf",
    "Caerphilly",
    "Blaenau Gwent",
    "Torfaen",
    "Monmouthshire",
    "Newport",
    "Powys",
    "Merthyr Tydfil",
    "Not sure yet"
  ];

  const joboptions = [
    "",
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
    "I did not find my occupation in the list",
  ];

  const bedroomOptions = ["", "1", "2", "3", "4+", "Not sure yet"];
  const propertyTypeOptions = ["", "Apartment", "Detached House", "Semi-detached House", "Terrace House", "Not sure yet"];


  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const topPosition = headerRef.current.getBoundingClientRect().top;
        const isVisible = topPosition < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="input" className="input-wrapper min-h-screen">
    <div className="input-header-wrapper" ref={headerRef}>
      <h2 className={`input-header-txt ${isVisible ? "slide-in" : ""}`}>
        Calculate your housing options and wealth below
      </h2>
    </div>
      <div className="flex justify-center pt-20 input-cols">
        {/* Column 1 */}
        <div className="input-cols-1">
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
              <option value=""></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        {/* Column 2 */}
        <div className="input-cols-2">
          <div className="mb-4">
              <label className="block text-black mb-2">
                What is the price of the home you wish to purchase?
              </label>
              <input
                id="housePrice"
                ref={ageInputRef}
                className="input input-bordered w-full"
                type="text"
                placeholder="£200,000"
                value={formattedValues.housePrice}
                onChange={handleInputChange}
              />
            </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              What is the gross annual income of yourself and your partner?
            </label>
            <input
              id="income"
              ref={ageInputRef}
              className="input input-bordered w-full"
              type="text"
              placeholder="£45,000"
              value={formattedValues.income}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              How much do you think you spend each month (excluding housing)?
            </label>
            <input
              id="monthspending"
              ref={ageInputRef}
              className="input input-bordered w-full"
              type="text"
              placeholder="£1,100"
              value={formattedValues.monthspending}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              How old are you?
            </label>
            <input
              id="input-9"
              ref={ageInputRef}
              className="input input-bordered w-full"
              type="number"
              min="18"
              max="80"
              placeholder="33"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              How much in savings do you have?
            </label>
            <input
              id="savings"
              ref={ageInputRef}
              className="input input-bordered w-full"
              type="text"
              placeholder="£10,000"
              value={formattedValues.savings}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              What is your current monthly rent or housing expenditure (mortgage)?
            </label>
            <input
              id="currentRent"
              ref={ageInputRef}
              className="input input-bordered w-full"
              type="text"
              placeholder="£800"
              value={formattedValues.currentRent}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 input-btn-wrapper">
      {errorMessage && <div className="text-error-message">{errorMessage}</div>}
        <button
          className="input-btn mb-10"
          onClick={handleInputs}
          disabled={loading} 
        >
           Submit
        </button>
     <div className="loading-container-wrapper">{loading ? <Loading /> : ""}</div>
      </div>
    </div>
  );
}

export default Input;