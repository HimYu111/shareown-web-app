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
    age: "",
    savings: "",
    currentRent: "",
    loan_repayment: "",
  });
  const [formattedValues, setFormattedValues] = useState({
    housePrice: "",
    income: "",
    monthspending: "",
    savings: "",
    currentRent: "",
    loan_repayment: "",
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
      inputValues.age,
      inputValues.savings,
      inputValues.loan_repayment,
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
            headOfHouseholdAge: parseFloat(inputValues.age),
            savings: parseFloat(inputValues.savings),
            currentRent: parseFloat(inputValues.currentRent),
            loan_repayment: parseFloat(inputValues.loan_repayment),
        };

        console.log("Sending data to server:", postData);
        Object.keys(postData).forEach(key => {
            console.log(`${key}: ${postData[key]} (Type: ${typeof postData[key]})`);
        });

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
    // Function to prevent default behavior
    const handleWheel = (e) => e.preventDefault();

    const ageInput = ageInputRef.current;

    if (ageInput) {
      ageInput.addEventListener('wheel', handleWheel, { passive: true });
    }

    return () => {
      if (ageInput) {
        ageInput.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  useEffect(() => {
  const ageInput = ageRef.current;

  const handleWheel = (e) => {
    e.preventDefault();
  };

  if (ageInput) {
    ageInput.addEventListener('wheel', handleWheel, { passive: false });
  }

  return () => {
    if (ageInput) {
      ageInput.removeEventListener('wheel', handleWheel);
    }
  };
}, []);

const ageRef = useRef(null);
  useEffect(() => {
    const ageInput = ageRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
    };

    if (ageInput) {
      ageInput.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (ageInput) {
        ageInput.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);



  const options = ["", "Adur", "Amber Valley", "Arun", "Ashfield", "Ashford", "Babergh", "Barking and Dagenham", "Barnet", "Barnsley", 
    "Barrow-in-Furness", "Basildon", "Basingstoke and Deane", "Bassetlaw", "Bath and North East Somerset", "Bedford", "Birmingham", 
    "Blackburn with Darwen", "Blackpool", "Blaby", "Blaenau Gwent", "Bolton", "Boston", "Bournemouth, Christchurch and Poole", "Bracknell Forest", "Bradford", 
    "Braintree", "Breckland", "Brent", "Brentwood", "Bridgend", "Brighton and Hove", "Bristol, City of", "Broadland", "Bromley", "Bromsgrove", "Broxbourne", "Broxtowe", 
    "Buckinghamshire", "Burnley", "Bury", "Calderdale", "Cambridge", "Camden", "Cannock Chase", "Canterbury", "Carlisle", "Carmarthenshire", "Castle Point", "Central Bedfordshire", 
    "Ceredigion", "Charnwood", "Chelmsford", "Cheltenham", "Cherwell", "Cheshire East", "Cheshire West and Chester", "Chesterfield", "Chichester", "Chorley", "City of London", 
    "Colchester", "Conwy", "Copeland", "Corby", "Cotswold", "County Durham", "Coventry", "Craven", "Crawley", "Croydon", "Dacorum", "Darlington", "Dartford", "Derby", 
    "Derbyshire Dales", "Doncaster", "Dorset", "Dover", "Dudley", "East Cambridgeshire", "East Devon", "East Hampshire", "East Hertfordshire", 
    "East Lindsey", "East Northamptonshire", "East Riding of Yorkshire", "East Staffordshire", "East Suffolk", "Eastbourne", "Eastleigh", "Eden", "Elmbridge", "Enfield", "Epping Forest", 
    "Epsom and Ewell", "Erewash", "Exeter", "Fareham", "Fenland", "Folkestone and Hythe", "Forest of Dean", "Fylde", "Gateshead", "Gedling", "Gloucester", "Gosport", "Gravesham", 
    "Great Yarmouth", "Greenwich", "Guildford", "Gwynedd", "Hackney", "Halton", "Hambleton", "Hammersmith and Fulham", "Harborough", "Haringey", "Harlow", "Harrogate", "Harrow", 
    "Hart", "Hartlepool", "Hastings", "Havant", "Havering", "Herefordshire, County of", "Hertsmere", "High Peak", "Hillingdon", "Hinckley and Bosworth", "Horsham", "Hounslow", "Huntingdonshire", 
    "Hyndburn", "Ipswich", "Isle of Anglesey", "Isle of Wight", "Islington", "Kensington and Chelsea", "Kent", "Kettering", "Kingston upon Hull, City of", "Kingston upon Thames", "Kirklees", 
    "Knowsley", "Lambeth", "Lancaster", "Leeds", "Leicester", "Lewes", "Lewisham", "Lichfield", "Lincoln", "Liverpool", "London", "Luton", "Maldon", "Malvern Hills", "Manchester", "Mansfield", 
    "Medway", "Melton", "Mendip", "Merton", "Mid Devon", "Mid Suffolk", "Middlesbrough", "Milton Keynes", "Mole Valley", "Monmouthshire", "Newcastle upon Tyne", "Newcastle-under-Lyme", 
    "Newham", "Newport", "North Devon", "North East Derbyshire", "North East Lincolnshire", "North Hertfordshire", "North Kesteven", "North Lincolnshire", "North Norfolk", "North Somerset", 
    "North Tyneside", "North Warwickshire", "North West Leicestershire", "Northampton", "Northumberland", "Norwich", "Nottingham", "Nuneaton and Bedworth", "Oadby and Wigston", "Oldham", 
    "Oxford", "Pendle", "Peterborough", "Plymouth", "Portsmouth", "Preston", "Reading", "Redbridge", "Redcar and Cleveland", "Redditch", "Reigate and Banstead", "Richmond upon Thames", 
    "Richmondshire", "Ribble Valley", "Rochdale", "Rochford", "Rossendale", "Rother", "Rotherham", "Rugby", "Runnymede", "Rushcliffe", "Rushmoor", "Rutland", "Ryedale", "Salford", 
    "Sandwell", "Scarborough", "Scunthorpe", "Sefton", "Selby", "Sevenoaks", "Sheffield", "Shepway", "Sherwood", "Shropshire", "Slough", "Solihull", "South Cambridgeshire", "South Derbyshire", 
    "South Gloucestershire", "South Hams", "South Holland", "South Kesteven", "South Lakeland", "South Norfolk", "South Oxfordshire", "South Ribble", "South Somerset", "South Staffordshire", 
    "South Tyneside", "Southampton", "Southend-on-Sea", "Southwark", "Spelthorne", "St Albans", "St Helens", "Stafford", "Staffordshire Moorlands", "Stevenage", "Stockport", "Stockton-on-Tees", 
    "Stoke-on-Trent", "Stratford-on-Avon", "Sunderland", "Surrey Heath", "Sutton", "Swale", "Swansea", "Swindon", "Tameside", "Tamworth", "Tandridge", "Taunton Deane", "Teignbridge", 
    "Telford and Wrekin", "Tendring", "Test Valley", "Tewkesbury", "Thanet", "Three Rivers", "Thurrock", "Tonbridge and Malling", "Torbay", "Torfaen", "Torridge", "Tower Hamlets", "Trafford", 
    "Tunbridge Wells", "Uttlesford", "Vale of Glamorgan", "Vale of White Horse", "Wakefield", "Walsall", "Waltham Forest", "Wandsworth", "Warrington", "Warwick", "Watford", "Waverley", 
    "Wealden", "Welwyn Hatfield", "West Berkshire", "West Devon", "West Dorset", "West Lancashire", "West Lindsey", "West Oxfordshire", "West Somerset", "West Suffolk", "Westminster", 
    "Weymouth and Portland", "Wigan", "Wiltshire", "Winchester", "Wirral", "Woking", "Wokingham", "Wolverhampton", "Worcester", "Worthing", "Wrexham", "Wychavon", "Wyre", "Wyre Forest", "York",
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
  const propertyTypeOptions = ["", "Detached", "Semi-Detached", "Terraced", "Apartment", "Undecided"];


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
      <div className="pt-20 input-cols">
        {/* Column 1 */}
        <div className="input-cols-1">
          <div className="mb-4">
            <label className="block text-black mb-2">
              What local authority does your household want to live in?
            </label>
            <select className="input input-bordered w-full" id="input-1">
                {options.map((postcode, index) => (
                  <option key={index} value={postcode}>{postcode}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              What type of property does your household want to live in?
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
          <div className="mb-4">
            <label className="block text-black mb-2">
              Please indicate how much does your household pay per month in loans (student/car). If there are none, put 0.</label>
            <input
              id="loan_repayment"
              ref={ageInputRef}
              className="input input-bordered w-full"
              type="text"
              placeholder="£0"
              value={formattedValues.loan_repayment}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* Column 2 */}
        <div className="input-cols-2">
          <div className="mb-4">
              <label className="block text-black mb-2">
              What is the price of the home your household wishes to purchase?</label>
              <input
                id="housePrice"
                ref={ageInputRef}
                className="input input-bordered w-full"
                type="text"
                placeholder="£250,000"
                value={formattedValues.housePrice}
                onChange={handleInputChange}
              />
            </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              What is the gross annual income of your household?
            </label>
            <input
              id="income"
              ref={ageInputRef}
              className="input input-bordered w-full"
              type="text"
              placeholder="£40,000"
              value={formattedValues.income}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              How much does your household spend each month excluding housing and loans?
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
              id="age"
              ref={ageRef}
              className="input input-bordered w-full"
              type="text"
              min="18"
              max="80"
              placeholder="33"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2">
              How much in savings does your household have?
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
              What is your household’s current monthly housing expenditure (rent/mortgage)?
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