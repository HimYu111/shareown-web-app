import PropTypes from "prop-types";
import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import flowchart from "../Assets/flowchart.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib,faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function formatNumber(num) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(num);
}

function Results({ result }) {
  if (!result) {
    return <p></p>;
  }
  const parseAndFormatData = (data) => {
    if (!data) return [];
    return JSON.parse(data).map(value => {
      if (typeof value === 'number') {
        return formatNumber(value);
      } else if (typeof value === 'object' && value !== null) {
        const formattedObject = {};
        for (const key in value) {
          formattedObject[key] = typeof value[key] === 'number' ? formatNumber(value[key]) : value[key];
        }
        return formattedObject;
      }
      return value;
    });
  };

  const ageattimedata = result?.age_at_time_data ? JSON.parse(result.age_at_time_data) : [];
  const staircasingdata = result?.staircasing_data ? JSON.parse(result.staircasing_data) : [];
  const mortgagedata = result?.mortgage_data ? JSON.parse(result.mortgage_data) : [];
  const mortgagedata2 = result?.mortgage_data2 ? JSON.parse(result.mortgage_data2) : [];
  const TO_wealthdata = result?.TO_wealth_data ? JSON.parse(result.TO_wealth_data) : [];
  const SO_wealthdata = result?.SO_wealth_data ? JSON.parse(result.SO_wealth_data) : [];
  const TO_housedata = result?.TO_house_data ? JSON.parse(result.TO_house_data) : [];
  const SO_housedata = result?.SO_house_data ? JSON.parse(result.SO_house_data) : [];
  
  const renderstairchart = () => {
    const data = {
      labels: [...ageattimedata],
      datasets: [
        {
          label: 'Share owned (%)',
          data: [...staircasingdata.map(item => parseFloat(item))],
          backgroundColor: 'white',
          borderColor: 'white',
          borderWidth: 1,
        }
      ]
    };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false, 
        },
        title: {
          display: true,
          text: 'Staircasing',
          color: 'white',
          font: {
            size: 24,
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Age',
            color: 'white',
            font: {
              size: 18,
            },
          },
          ticks: {
            color: 'white',
          },
        },
        y: {
          max: 1,
          title: {
            display: true,
            text: 'Share (%)',
            color: 'white',
            font: {
              size: 18,
            },
          },
          ticks: {
            color: 'white',
            callback: function(value, index, values) {
              return `${(value * 100).toFixed(0)}%`;  // Formatting values to two decimal places
            }
          }
        }
      }
    };
    return <Line data={data} options={options} />;
  };
  
  const renderloanchart = () => {
    const data = {
      labels: [...ageattimedata],
      datasets: [
        ...(result.TO_housing > 0 ? [{
          label: 'Full Ownership',
          data: [...mortgagedata2.map(item => parseFloat(item))],
        //  borderColor: 'red',
        //  backgroundColor: 'rgba(255, 0, 0, 0.5)',
          borderColor: '#8ba4ad',
          backgroundColor: '#8ba4ad',
          borderWidth: 1,
          fill: false,
        }] : []),
        ...(result.SO_housing > 0 ? [{
          label: 'Shared Ownership',
          data: [...mortgagedata.map(item => parseFloat(item))],
         // borderColor: 'green',
         // backgroundColor: 'rgba(0, 255, 0, 0.5)',
          borderColor: '#264d5a',
          backgroundColor: '#264d5a',
          borderWidth: 1,
          fill: false,
        }] : []),
      ]
    };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: 'white',
            font: {
              size: 18,
            },
          },
        },
        title: {
          display: true,
          text: 'Mortgage Debt',
          color: 'white',
          font: {
            size: 24,
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Age',
            color: 'white',
            font: {
              size: 18,
            },
          },
          ticks: {
            color: 'white',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Mortgage Debt (£)',
            color: 'white',
            font: {
              size: 18,
            },
          },
          ticks: {
            color: 'white',
          },
        }
      }
    };
    return <Line data={data} options={options} />;
  };
  
  const rendercompchart = () => {
    const data = {
      labels: [...ageattimedata],
      datasets: [
        ...(result.TO_housing > 0 ? [{
          label: 'Full Ownership',
          data: [...TO_wealthdata.map(item => parseFloat(item))],
        //  borderColor: 'red',
        //  backgroundColor: 'rgba(255, 0, 0, 0.5)',
        borderColor: '#8ba4ad',
        backgroundColor: '#8ba4ad',
          borderWidth: 1,
          fill: false,
        }] : []),
        ...(result.SO_housing > 0 ? [{
          label: 'Shared Ownership',
          data: [...SO_wealthdata.map(item => parseFloat(item))],
        //  borderColor: 'green',
        //  backgroundColor: 'rgba(0, 255, 0, 0.5)',
        borderColor: '#264d5a',
        backgroundColor: '#264d5a',
          borderWidth: 1,
          fill: false,
        }] : []),
      ]
    };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: 'white',
            font: {
              size: 18,
            },
          },
        },
        title: {
          display: true,
          text: 'Savings',
          color: 'white',
          font: {
            size: 24,
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Age',
            color: 'white',
            font: {
              size: 18,
            },
          },
          ticks: {
            color: 'white',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Savings (£)',
            color: 'white',
            font: {
              size: 18,
            },
          },
          ticks: {
            color: 'white',
          },
        }
      }
    };
    return <Line data={data} options={options} />;
  };

  const rendercomphchart = () => {
    const data = {
      labels: [...ageattimedata],
      datasets: [
        ...(result.TO_housing > 0 ? [{
          label: 'Full Ownership',
          data: [...TO_housedata.map(item => parseFloat(item))],
          borderColor: '#8ba4ad',
          backgroundColor: '#8ba4ad',
          borderWidth: 1,
          fill: false,
        }] : []),
        ...(result.SO_housing > 0 ? [{
          label: 'Shared Ownership',
          data: [...SO_housedata.map(item => parseFloat(item))],
          borderColor: '#264d5a',
        backgroundColor: '#264d5a',
          borderWidth: 1,
          fill: false,
        }] : []),
      ]
    };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: 'white',
          },
        },
        title: {
          display: true,
          text: 'Housing Wealth Comparison',
          color: 'white',
          font: {
            size: 24,
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Age',
            color: 'white',
            font: {
              size: 18,
            },
          },
          ticks: {
            color: 'white',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Housing Equity (£)',
            color: 'white',
            font: {
              size: 18,
            },
          },
          ticks: {
            color: 'white',
          },
        }
      }
    };
    return <Line data={data} options={options} />;
  };
  

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Shared Ownership",
      answer: `Shared ownership is a scheme designed to help individuals afford homeownership by purchasing an initial share of 25% to 75% of a home and paying reduced rent on the remainder.
      This option allows buyers with limited savings to get onto the property ladder by offering the flexibility to buy additional shares, through a process known as ‘staircasing,’ towards full ownership as their financial situation improves.
      It provides an accessible path to homeownership, accommodating various personal circumstances and market conditions, and is supported by the ability to secure mortgage loans similarly to outright purchases.`
    },
    {
      question: "What is staircasing?",
      answer: `Over time you can buy additional shares in your property in a process known as "staircasing." As you buy more shares you pay less rent. Attaining a 100% share will grant you full ownership of the property.`
    },
    {
      question: "Am I eligible?",
      answer: `Your annual household income must not exceed £80,000 (£90,000 in London), and you must not currently own a property.`
    },
    {
      question: "Is the calculator free to use?",
      answer: `The lifetime calculator is based on an EPSRC-UCL research funded project. The underlying calculator is developed by academics at UCL and Durham University and is free of charge. It is not for commercial use and do not provide financial advice. ®`
    },
    {
      question: "How is my tax calculated?",
      answer: 
        <span className="tooltiptext" style={{ width: '1500px', textAlign: 'right' }}>
          Allowance: Anything below £12,570 is not taxed. <br />
          Basic Rate (20%): Applied to income from £12,571 up to £50,270. <br />
          Higher Rate (40%): Applied to income from £50,271 to £125,140. Exclusive of any income under the higher threshold.<br />
          Additional Rate (45%): Applied to income above £125,140. Exclusive of any income under the additional rate threshold.<br />
          </span>
    },
    {
      question: "What are the model assumptions?",
      answer: 
        <span className="tooltiptext" style={{ width: '1500px', textAlign: 'right' }}>
          • Interest rate on deposits/savings: 3%. <br />
          • Inflation rate p.a.: 3%. <br />
          • Mortgage rate p.a.: 4%. <br />
          • House price appreciation p.a.: 5%. <br />
          • Market rent appreciation: 3.5%. <br />
          • Rent paid for Shared Ownership: For the first year it is 2.75% of the initial value of the home. After that it grows with the assumed inflation rate. <br />
          • Service charge/House maintenance cost p.a.: 1%. <br />
          • The model assumes a retirement age at 67. After that no wealth is accumulated. <br />
          • Loan to Value ratio for full ownership: 95% of the indicated price. <br />
          • Loan to Value ratio for Shared Ownership: 95% of the value of the maximum affordable share. <br />
          • Loan-to-income ratio: Total mortgage debt cannot exceed 4.5 times the indicated annual gross income. <br />
          • Affordability constraint: We account for the income affordability constraint associated with Shared Ownership following Homes England guidelines. <br /> 
          • Minimum initial share for Shared Ownership: 25%. <br />
          • Transaction costs: 0%.<br />
          • Staircasing fees for Shared Ownership: £1,000. <br />
          • No tax is applied below £12,570. <br />
          • The basic 20% tax rate is applied to income between £12,571 and £50,270. <br />
          • The higher 40% tax rate is applied to income between £50,271 and £125,140. <br />
          • The additional 45% tax rate is applied to income above £125,140. <br />
          </span>
    },
    {
      question: "How does the calculator work?",
      answer: (
        <>
          <p className="mb-4">
            <strong>Full ownership:</strong> The calculator looks ahead to see when you'll have enough money to buy a home. 
            It figures out when you've saved up for a deposit (at least 5% of the home's price) and can get a mortgage for 
            the rest. Once you own a home, the calculator assumes you'll use your savings to pay off your mortgage faster. 
            It also calculates when you might finish paying off your mortgage completely. After that, it estimates how much 
            money you'll have saved up in a savings account by the time you retire, which it assumes will be at age 67.
          </p>
          <p>
            <strong>Shared ownership:</strong> The calculator looks ahead to see when you'll be able to buy at least a 25% 
            share of the home. This happens when you've saved enough for a deposit (at least 5% of the share you buy), and 
            can get a mortgage for the rest. Once you're a shared owner, the calculator assumes you'll use your savings and 
            borrow to buy additional shares over time (this is called "staircasing"). It then calculates when you will 
            staircase to 100%. After that, the calculator helps you pay off your mortgage faster using all your savings. 
            It will also determine the age at which you will be mortgage-free. Finally, it estimates how much money you'll 
            have saved in a savings account by the time you retire, which it assumes will be at age 67.
          </p>
          <div className="bg-white flex justify-center items-center faq-img">
          <img src={flowchart} alt="Damian Flowchart"  className="w-auto h-auto"/>
          </div>  
        </>
      )
    }
  ];

  return (
    <div className="p-4 rounded-md " style={{ backgroundColor: 'white', width: '100%', maxWidth: '600px', margin: 'auto' }}>
      <h2 className="text-2xl font-bold text-center mb-5" style={{ color: 'black' }}>FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="text-lg  py-2 w-full text-left"
            style={{ color: 'black' }} // Set text color to black
            aria-expanded={openFAQ === index}
            aria-controls={`faq-answer-${index}`}
          >
            {faq.question}
          </button>
          <div
            id={`faq-answer-${index}`}
            className={`transition-height duration-500 ease-in-out ${
              openFAQ === index ? 'block' : 'hidden'
            }`}
          >
            <p className="mt-2" style={{ color: 'black' }}>{faq.answer}</p> {/* Set text color to black */}
          </div>
        </div>
      ))}
    </div>
  );
};


const renderTwoColumnsText = () => {
  if (result.TO_housing === 0 && result.SO_housing === 0) {
    return (
      <div className="text-center my-4">
        <h2 className="text-xl font-bold text-white">
          <p className="text-xl font-bold text-white">
            You cannot afford Shared Ownership or full ownership with the current inputs and the
            <a href="#faqs" className="text-blue-500 hover:underline"> assumptions</a> of the model.
          </p>
          <p>You can change some of the above inputs like the price of the home, the location, income, etc. to assess when you can afford Shared Ownership or/and full ownership.</p>
        </h2>
      </div>
    );
  }
  return (
    <div className="results">
      <h1 className="text-2xl justify-center text-white">Value of home: £{result.house_price ? formatNumber(result.house_price.toFixed(0)) : 'N/A'}</h1>

      <div className="flex justify-center text-white results-2cols">
        {result.TO_housing === 0 ? (
          <div className="results-1st-col std-1stcol">
            <h2 className="results-fullOwn font-bold">Full ownership</h2>
            <p className="text-xl font-bold text-white mb-6">You cannot afford full ownership with the current inputs.</p>
            <p>You can change above inputs, i.e. lower the price of the home, vary income, to see when you can afford full ownership.</p>
          </div>
        ) : (
          <div className="results-1st-col std-1stcol">
            <h2 className="results-fullOwn font-bold">Full ownership</h2>
            <p className="font-bold">Minimum Deposit <div className="results-number">£{result.TO_deposit ? formatNumber(result.TO_deposit.toFixed(0)) : 'N/A'}</div></p>
            <p className="no-wrap">
              You {result.TO_time < 1 ? (<>have enough savings for the deposit <div className="results-number">now</div></>) : 
              ( <>can afford to buy in <div className="results-number">{result.TO_time ? formatNumber(result.TO_time.toFixed(0)) : "0"} years</div></>)}
            </p>
           
            <p className="font-bold">Monthly costs            
              <span className="tooltip"><sup><FontAwesomeIcon icon={faCircleQuestion} /></sup>
                <span className="tooltiptext" style={{ width: '1500px' }}>
                Includes the mortgage payment. Assumes all savings are used to make repayments. For model assumptions check the FAQs.
                </span>
              </span>
            </p>
            <p className="mb-6"><div className="results-number">£{result.TO_mortgage >= 0 ? formatNumber(result.TO_mortgage.toFixed(0)) : '0'}</div></p>
            <p className="mb-6">You will be mortgage free by the age of
            <span className="tooltip"><sup><FontAwesomeIcon icon={faCircleQuestion} /></sup>
                <span className="tooltiptext" style={{ width: '1500px' }}>
                Assumes all savings are used to make repayments. For model assumptions check the FAQs.
                </span>
              </span>
               <div className="results-number">{result.TO_finish ? formatNumber(result.TO_finish.toFixed(0)) : 'N/A'}</div></p>
          </div>
        )}
        {result.income >= 90000 ? (
          <div className="results-2nd-col std-2ndcol">
            <h2 className="results-sharedOwn font-bold">Shared Ownership</h2>
            <p className="text-xl font-bold text-white">You do not qualify for Shared Ownership with your current income.</p>
          </div>
        ) : result.SO_housing === 0 ? (
          <div className="results-2nd-col std-2ndcol">
            <h2 className="results-sharedOwn font-bold">Shared Ownership</h2>
            <p className="text-xl font-bold text-white">You cannot afford to staircase to 100% through Shared Ownership with the current inputs.</p>
            <p>You can change above inputs, i.e. lower the price of the home, vary income, to see when you can afford full ownership.</p>
          </div>
        ) : (
          <div className="results-2nd-col std-2ndcol">
            <h2 className="results-sharedOwn font-bold">Shared Ownership</h2>
            <p className="font-bold">Minimum Deposit <div className="results-number">£{result.SO_deposit ? formatNumber(result.SO_deposit.toFixed(0)) : 'N/A'}</div></p>
            <p className="mb-6">
              {result.SO_share > 0.25
                ? (<>You can afford to buy in <div className="results-number">now</div></>)
                : (<>You can afford to buy in <div className="results-number">{result.SO_time ? formatNumber(result.SO_time.toFixed(0)) : "0"} years</div></>)}
            </p>
            <p className="font-bold">Monthly costs         
              <span className="tooltip"><sup><FontAwesomeIcon icon={faCircleQuestion} /></sup>
                <span className="tooltiptext" style={{ width: '1500px' }}>
                Includes the mortgage payment. Assumes all savings are used to make repayments. For model assumptions check the FAQs
                </span>
              </span>
            </p>
            <p className="mb-6"><div className="results-number">£{result.SO_mortgage ? formatNumber(result.SO_mortgage.toFixed(0)) : 'N/A'}</div></p>
            
            <p className="">You will be mortgage free by the age of
            <span className="tooltip"><sup><FontAwesomeIcon icon={faCircleQuestion} /></sup>
                <span className="tooltiptext" style={{ width: '1500px' }}>
                Assumes all savings are used to make repayments. For model assumptions check the FAQs.
                </span>
              </span>
            <div className="results-number">{result.SO_mortgage_finish ? formatNumber(result.SO_mortgage_finish.toFixed(0)) : 'N/A'}</div>            </p>
           {/* <p className="italic mb-0"><a href="#staircasing" className="text-blue-500 hover:underline inline-block">See here how you can staircase over time</a></p>*/} 
          </div>
        )}
      </div>
    </div>
  );
};

const renderstaircasing = () => {
  if (result.TO_housing === 0 && result.SO_housing === 0) {
    return <div className="text-center my-4"></div>;
  }
  return (
    <div className="text-white staircasing-wrapper std-wrapper">
      <h1 className="font-bold">Shared Ownership Staircasing</h1>
      {result.income >= 90000 ? (
        <div className="results-2nd-col std-2ndcol">
          <h2 className="results-sharedOwn font-bold">Shared Ownership</h2>
          <p className="text-xl font-bold text-white">
            You do not qualify for Shared Ownership with your current income.
          </p>
        </div>
      ) : result.SO_housing === 0 ? (
        <div className="results-2nd-col std-2ndcol">
          <h2 className="results-sharedOwn font-bold">Shared Ownership</h2>
          <p className="text-xl font-bold text-white">
            You cannot afford to staircase to 100% through Shared Ownership with the current inputs.
          </p>
          <p>You can change above inputs, i.e., lower the price of the home, vary income, to see when you can afford full ownership.</p>
        </div>
      ) : (
        <div className="staircasing-2cols-wrapper std-2cols-wrapper">
          <div className="staircasing-combinedcol std-1stcol">
            <div className="initial-share">
              <p className="font-bold">Initial Share</p>
              <p>You can afford to buy an initial share of</p>
              <p><span className="results-number">{result.SO_share ? formatNumber(result.SO_share.toFixed(0)) : '0'}%</span></p>
              <p>at the age of</p>
              <p><span className="results-number">{result.SO_start_age ? formatNumber(result.SO_start_age.toFixed(0)) : '0'}</span></p>
            </div>
            <div className="full-ownership">
              <p className="font-bold">100% Ownership  
                <span className="tooltip"><sup><FontAwesomeIcon icon={faCircleQuestion} /></sup>
                  <span className="tooltiptext" style={{ width: '1500px' }}>
                    Assumes all savings are used to buy additional shares using a mortgage. For model assumptions check the FAQs.
                  </span>
                </span>
              </p>
              <p>Staircase to 100% by the age of</p>
              <p><span className="results-number">{result.SO_staircase_finish ? formatNumber(result.SO_staircase_finish.toFixed(0)) : '0'}</span></p>
            </div>
          </div>
          <div className="staircasing-chartcol std-2ndcol">
            <div id="staircasing">
              {renderstairchart()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



const renderlifetimeWealth = () => {
  if (result.TO_housing === 0 && result.SO_housing === 0) {
    return (
      <div className="text-center my-4">
      </div>
    );
  }
  return (
    <div className="text-white lifetime-wrapper std-wrapper">
        <div><h1 className="font-bold">Lifetime Wealth
              <span className="tooltip"><sup><FontAwesomeIcon icon={faCircleQuestion} /></sup>
                <span className="tooltiptext" style={{ width: '1500px' }}>
                Shows the current value of future savings and future changes to house prices, i.e. housing wealth up until retirement.
                </span>
              </span>
        </h1></div>

        <div className="lifetime-2cols-wrapper std-2cols-wrapper">
            <div className="lifetime-1stcol std-1stcol">
              <h2 className="results-fullOwn">Full Ownership</h2>
              <p className="font-bold">Savings
              <span className="tooltip"><sup><FontAwesomeIcon icon={faCircleQuestion} /></sup>
                <span className="tooltiptext" style={{ width: '1500px' }}>

                Current value of future savings accumulated up until retirement age. For model assumptions check the FAQs.
                </span>
              </span>
            </p>
            <p className=""><div className="results-number">£{result.TO_liquid ? formatNumber(result.TO_liquid.toFixed(0)) : '0'}</div> </p>

              <p className="font-bold">Housing wealth 
              <span className="tooltip"><sup><FontAwesomeIcon icon={faCircleQuestion} /></sup>
                <span className="tooltiptext" style={{ width: '1500px' }}>
                Current value of future housing wealth accumulated up until retirement age. For model assumptions check the FAQs.
                </span>
              </span>
            </p>
            <p className=""><div className="results-number">£{result.TO_housing ? formatNumber(result.TO_housing.toFixed(0)) : '0'}</div></p>

            </div>
            <div className="lifetime-2ndcol std-2ndcol">
              <h2 className="results-sharedOwn">Shared Ownership</h2>
              <p className="font-bold">Savings
              <span className="tooltip"><sup><FontAwesomeIcon icon={faCircleQuestion} /></sup>
                <span className="tooltiptext" style={{ width: '1500px' }}>

                Current value of future savings accumulated up until retirement age. For model assumptions check the FAQs.
                </span>
              </span>
            </p>
            <p className=""><div className="results-number">£{result.SO_liquid ? formatNumber(result.SO_liquid.toFixed(0)) : '0'}</div> </p>

              <p className="font-bold">Housing wealth 
              <span className="tooltip"><sup><FontAwesomeIcon icon={faCircleQuestion} /></sup>
                <span className="tooltiptext" style={{ width: '1500px' }}>
                Current value of future housing wealth accumulated up until retirement age. For model assumptions check the FAQs.
                </span>
              </span>
            </p>
            <p className=""><div className="results-number">£{result.SO_housing ? formatNumber(result.SO_housing.toFixed(0)) : '0'}</div></p>
            </div>
        </div>
        {(result.TO_housing > 0 || result.SO_housing > 0) && (
            <div className="charts">
              <div id="comp" className="mb-2" style={{ height: '450px' }}>
                {rendercompchart()}
              </div>
            </div>
          )}
        {(result.TO_housing > 0 || result.SO_housing > 0) && (
            <div className="charts">
              <div id="comp" className="mb-2" style={{ height: '450px' }}>
                {rendercomphchart()}
              </div>
            </div>
          )}
    </div>
  );
}


const rendermortgageRep = () => {
  if (result.TO_housing === 0 && result.SO_housing === 0) {
    return (
      <div className="text-center my-4">
      </div>
    );
  }
  return (
    <div className="text-white mortgage-wrapper std-wrapper">
        <div><h1 className="font-bold">Mortgage Repayment</h1></div>
        <div className="mortgage-2cols-wrapper std-2cols-wrapper">
            <div className="mortgage-1stcol std-1stcol">
              <h2 className="results-fullOwn">Full Ownership</h2>
              <p className="font-bold">You will be mortgage free {result.TO_finish < 1 ? '' : 'by the age of'}
              <span className="tooltip"><sup><FontAwesomeIcon icon={faCircleQuestion} /></sup>
                <span className="tooltiptext" style={{ width: '1500px' }}>
                  Assuming you use all your savings to make prepayments.              
                </span>
              </span>
            
             {result.TO_finish < 1 ? (<><div className="results-number">now</div></>)  : 
            (<><div className="results-number">{result.TO_finish ? formatNumber(result.TO_finish.toFixed(0)) : "0"} </div></>) }
            </p>
          {/* <p className="italic"><a href="#loan" className="text-blue-500 hover:underline">See your outstanding loan balance over time</a></p> */}  

            </div>
            <div className="mortgage-2ndcol std-2ndcol">
              <h2 className="results-sharedOwn">Shared Ownership</h2>
              <p className="font-bold">You will be mortgage free {result.SO_mortgage_finish < 1 ? '' : 'by the age of'}
              <span className="tooltip"><sup><FontAwesomeIcon icon={faCircleQuestion} /></sup>
                <span className="tooltiptext" style={{ width: '1500px' }}>
                  Assuming all savings are used to make repayments. For further model assumptions check the FAQs.              
                </span>
              </span>
            
             {result.SO_mortgage_finish < 1 ? (<><div className="results-number">now</div></>)  : 
            (<><div className="results-number">{result.SO_mortgage_finish ? formatNumber(result.SO_mortgage_finish.toFixed(0)) : "0"} </div></>) }
            </p>
            </div>
        </div>
          {(result.TO_housing > 0 || result.SO_housing > 0) && (
            <div className="charts">
              <div id="loan" className="mb-2" style={{ height: '450px' }}>
                {renderloanchart()}
              </div>
            </div>
          )}

    </div>
  );
}


const renderScenariosExplained = () => {
  return (
    <div className="text-white scenarios-wrapper std-wrapper">
        <h1 className="font-bold">Scenarios Explained</h1>
        <div className="scenarios-2cols-wrapper std-2cols-wrapper">
            <div className="scenarios-1stcol std-1stcol">
              <h2 className="results-fullOwn">Full Ownership</h2>
              <p>
                Full ownership means buying a home outright by making a deposit of at least 5% of the property’s value and 
                financing the rest with a mortgage. The maximum mortgage you can secure is limited to 4.5 times your 
                total annual gross income.
              </p>
              <p>
                The calculator will determine the earliest time you can afford to buy outright.
              </p>
            </div>
            <div className="scenarios-2ndcol std-2ndcol">
              <h2 className="results-sharedOwn">Shared Ownership</h2>
              <p>
                Shared ownership allows you to purchase between 25% and 75% of a home and pay a reduced rent for the 
                remaining portion. You can buy additional shares over time and “staircase” to full ownership.
              </p>
              <p>
                The calculator will determine the earliest time you can get onto the property ladder and the fastest way 
                you can staircase to 100% ownership.
              </p>
            </div>
        </div>
    </div>
  );
};



return (
<div className="main-results-container">
  <div id="results" className="bg-slate-800 py-20 text-white results-wrapper">
    <div className="results-container">
      {renderTwoColumnsText()}
      {renderstaircasing()}
      {renderlifetimeWealth()}
      {rendermortgageRep()}
      {renderScenariosExplained()}

{/*
      <div className="charts-container">
        <div className="charts-wrapper">

          {result.SO_housing > 0 && (
            <div className="charts">
              <div id="staircasing" style={{ height: '450px' }}>
                {renderstairchart()}
              </div>
            </div>
          )}


          {(result.TO_housing > 0 || result.SO_housing > 0) && (
            <div className="charts">
              <div id="comp" className="mb-2" style={{ height: '450px' }}>
                {rendercompchart()}
              </div>
            </div>
          )}


          {(result.TO_housing > 0 || result.SO_housing > 0) && (
            <div className="charts">
              <div id="loan" className="mb-2" style={{ height: '450px' }}>
                {renderloanchart()}
              </div>
            </div>
          )}
        </div>
      </div>
*/}
      <div className="grapics-container-note">
      <p className="grapics-note">
      Please note that the calculations are based on a model designed by professors at University College London and Durham University and do not provide financial advice. The model uses a range of assumptions, which can be found&nbsp;  
      <a href="#faqs" className="text-blue-500 hover:underline inline-block"> here</a>. 
      <p className="italic">
        The outputs are indicative and highly dependent on the model assumptions.<br />
      </p>
      <span className="tooltip text-blue-500 hover:underline"> 
          <span className="tooltiptext" style={{ width: '1500px' }}>
          • Interest rate on deposits/savings: 3%. <br />
          • Inflation rate p.a.: 3%. <br />
          • Mortgage rate p.a.: 4%. <br />
          • House price appreciation p.a.: 5%. <br />
          • Market rent appreciation: 3.5%. <br />
          • Rent paid for Shared Ownership: For the first year it is 2.75% of the initial value of the home. After that it grows with the assumed inflation rate. <br />
          • Service charge/House maintenance cost p.a.: 1%. <br />
          • The model assumes a retirement age at 67. After that no wealth is accumulated. <br />
          • Loan to Value ratio for full ownership: 95% of the indicated price. <br />
          • Loan to Value ratio for Shared Ownership: 95% of the value of the maximum affordable share. <br />
          • Loan-to-income ratio: Total mortgage debt cannot exceed 4.5 times the indicated annual gross income. <br />
          • Affordability constraint: We account for the income affordability constraint associated with Shared Ownership following Homes England guidelines. <br /> 
          • Minimum initial share for Shared Ownership: 25%. <br />
          • Transaction costs: 0%.<br />
          • Staircasing fees for Shared Ownership: £1,000. <br />
          • No tax is applied below £12,570. <br />
          • The basic 20% tax rate is applied to income between £12,571 and £50,270. <br />
          • The higher 40% tax rate is applied to income between £50,271 and £125,140. <br />
          • The additional 45% tax rate is applied to income above £125,140. <br />
          </span>
        </span>
      </p>      
    </div>

    </div>
    
  </div>
   <div id="faqs" className="p-4 rounded-md shadow-md" style={{ backgroundColor: 'white' }}>
  <FAQSection />
  </div>
</div>

  );
}


Results.propTypes = {
  result: PropTypes.object,
};

export default Results;