import PropTypes from "prop-types";
import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import flowchart from "../Assets/flowchart.png";
 
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

function Results({ result }) {
  if (!result) {
    return <p></p>;
  }
  const ageattimedata = result?.age_at_time_data ? JSON.parse(result.age_at_time_data) : [];
  const staircasingdata = result?.staircasing_data ? JSON.parse(result.staircasing_data) : [];
  const mortgagedata = result?.mortgage_data ? JSON.parse(result.mortgage_data) : [];
  const TO_wealthdata = result?.TO_wealth_data ? JSON.parse(result.TO_wealth_data) : [];
  const SO_wealthdata = result?.SO_wealth_data ? JSON.parse(result.SO_wealth_data) : [];

  const renderstairchart = () => {
    const data = {
      labels: [...ageattimedata],
      datasets: [
        {
          label: 'Ownership Percentage (%)',
          data: [...staircasingdata],
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
          position: 'top',
          labels: {
            color: 'white',
          },
        },
        title: {
          display: true,
          text: 'Shared Ownership Progression via Staircasing',
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
            text: 'Ownership Percentage (%)',
            color: 'white',
            font: {
              size: 18,
            },
          },
          ticks: {
            color: 'white',
            // Multiply the tick labels by 100 for stairchart
            callback: function(value, index, values) {
              return value * 100;
            }
          },
        }
      }
    };
    return <Bar data={data} options={options} />;
  };
  
  const renderloanchart = () => {
    const data = {
      labels: [...ageattimedata],
      datasets: [
        {
          label: 'Outstanding Loan Balance',
          data: [...mortgagedata],
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
          position: 'top',
          labels: {
            color: 'white',
          },
        },
        title: {
          display: true,
          text: 'Outstanding Loan Balance Over Time For Shared Ownership',
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
            text: 'Outstanding Loan Balance (£)',
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
    return <Bar data={data} options={options} />;
  };
  
  const rendercompchart = () => {
    const data = {
      labels: [...ageattimedata],
      datasets: [
        {
          label: 'Total Ownership Wealth Data (£)',
          data: [...TO_wealthdata],
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          borderWidth: 1,
          fill: false,
        },
        {
          label: 'Shared Ownership Wealth Data (£)',
          data: [...SO_wealthdata],
          borderColor: 'green',
          backgroundColor: 'rgba(0, 255, 0, 0.5)',
          borderWidth: 1,
          fill: false,
        }
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
        text: 'Wealth Comparison: Total Ownership vs Shared Ownership',
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
          text: 'Wealth Data (£)',
          color: 'white',
          font: {
            size: 18,
          },
        },
        ticks: {
          color: 'white',
          // Multiply the tick labels by 100
          callback: function(value, index, values) {
            return value;
          }
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
      answer: `The lifetime calculator is based on an EPSRC-UCL research funded project. The underlying calculator is developed by academics at UCL and Durham University and is free of charge. It is not for commercial use and does not provide financial advice. ®`
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
        </>
      )
    }
  ];

  return (
    <div className="p-4 rounded-md shadow-md" style={{ backgroundColor: 'white' }}> {/* Set the background to white for better contrast */}
      <h2 className="text-2xl font-bold text-center mb-5" style={{ color: 'black' }}>FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="text-lg font-bold py-2"
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

  // React component with two columns of styled text
// React component with two columns of styled text
const renderTwoColumnsText = () => {
  // Case where neither ownership type is possible
  if (result.TO_housing === 0 && result.SO_housing === 0) {
    return (
      <div className="text-center my-8">
        <h2 className="text-xl font-bold text-white">
          You cannot buy full ownership or shared ownership with the current inputs.
        </h2>
      </div>
    );
  }

  return (
    <div id="results">
      <div className="flex justify-center my-8 mb-20 text-white">
        <div className="flex-grow px-6" style={{ maxWidth: '80%' }}>
        <div className="flex justify-between space" style={{ display: 'flex' }}>
        <div className="flex justify-between space-x-4">
            {result.TO_housing === 0 ? (
              <div className="text-left">
                <h2 className="text-2xl font-bold mb-4">Full ownership</h2>
                <p>You cannot buy full ownership with the current inputs.</p>
              </div>
            ) : (
              <div className="w-3/4 text-left">
                <h2 className="text-2xl font-bold mb-1">Full ownership</h2>
                  <p className="text-xl font-bold">Minimum Deposit</p>
                  <p className="text-2xl">£{result.TO_deposit ? result.TO_deposit.toFixed(0) : 'N/A'}</p>
                  <p className="text-xl italic mb-3"> 5% of home value.</p>
                  <p className="text-2xl">You can afford to begin your mortgage</p>
                  <p className="text-2xl mb-6">
                    {result.TO_time < 1
                      ? `Now`
                      : `in ${result.TO_time ? result.TO_time.toFixed(0) : "0"} years`}
                  </p>
                  <p className="text-xl font-bold">100% Ownership:</p>
                  <p className="text-2xl">Get on the property ladder by the age of</p>
                  <p className="text-2xl mb-3">{result.TO_age ? result.TO_age.toFixed(0) : 'N/A'} </p>
                  <p className="font-bold">Monthly costs            
                    <span className="tooltip"> [?]
                    <span className="tooltiptext" style={{ width: '1500px' }}>
                    Includes the mortgage payment (assuming a repayment over 30 years).
                    </span>
                  </span>
                  </p>
                  <p className="text-2xl italic mb-3">£{result.TO_mortgage ? result.TO_mortgage.toFixed(0) : 'N/A'}
                  </p>
                  <p className="text-xl font-bold mb-3">Lifetime wealth</p>
                  <p className="text-2xl">By retirement age, you would have approximately</p>
                  <p className="text-2xl">£{result.TO_housing ? result.TO_housing.toFixed(0) : 'N/A'} in housing wealth</p>
                  <p className="text-2xl mb-1">£{result.TO_liquid ? result.TO_liquid.toFixed(0) : 'N/A'} in savings</p>
                  <p className="mb-3"> Wealth estimates are inflation adjusted and reflect the current value of wealth. Home values are assumed to appreciate at an annual rate of 5%. Inflation is assumed to be 3% and the mortgage rate 4%.
                    <a href="#comp" className="text-blue-500 hover:underline mb-3 inline-block">See here your lifetime wealth over time</a></p>
                  <p className="text-xl font-bold">Repayment structure</p>
                  <p className="text-2xl">Mortgage free by the age of </p>
                  <p className="text-2xl mb-3">{result.TO_finish ? result.TO_finish.toFixed(0) : 'N/A'}</p>
                  <p>
                  <span className="tooltip"> [?]
                    <span className="tooltiptext" style={{ width: '1500px' }}>
                    Assuming you use all your savings to make prepayments.              
                    </span>
                  </span></p>
                  <a href="#loan" className="text-blue-500 hover:underline">See your standing loan balance over time</a>
                </div>
              )}
          </div>

          <div className="flex justify-between space-x-4">
            {result.SO_housing === 0 ? (
              <div className="text-left">
                <h2 className="text-2xl font-bold mb-4">Shared Ownership</h2>
                <p>You cannot staircase to 100% through shared ownership with the current inputs.</p>
              </div>
            ) : (
              <div className="w-3/4 text-left">
                <div className="">
                  <h2 className="text-2xl font-bold mb-4">Shared Ownership</h2>
                  <p className="text-xl font-bold">Minimum Deposit</p>
                  <p className="text-2xl">£{result.SO_deposit ? result.SO_deposit.toFixed(0) : 'N/A'}</p>
                  <p className="text-xl italic mb-1">5% of the minimum equity share (25% of home value)</p>
                  <p className="text-xl italic mb-12">
                    {result.SO_share > 0.25
                      ? `You can afford to buy a share of 25% now"`
                      : `You can afford shared ownership in ${result.SO_time ? result.SO_time.toFixed(0) : "0"} years`}
                  </p>
                  <p className="text-xl font-bold">Buy 100% Ownership by the age of:</p>
                  <p className="text-2xl"> {result.SO_staircase_finish ? result.SO_staircase_finish.toFixed(0) : 'N/A'}    
                    <span className="tooltip"> [?]
                    <span className="tooltiptext" style={{ width: '1500px' }}>
                    Assuming you use all your savings to buy additional shares (staircase).
                    </span>
                  </span>
                  </p>
                  <a href="#staircasing" className="text-blue-500 hover:underline mb-4 inline-block">See here how you can staircase over time</a>
                  <p className="font-bold">Monthly costs            
                    <span className="tooltip"> [?]
                    <span className="tooltiptext" style={{ width: '1500px' }}>
                    Includes the mortgage payment (assuming a repayment over 30 years).
                    </span>
                  </span>
                  </p>
                  <p className="text-2xl italic mb-3">£{result.SO_mortgage ? result.SO_mortgage.toFixed(0) : 'N/A'}</p>
                  <p className="text-xl font-bold mb-3">Lifetime wealth</p>
                  <p className="text-2xl">By retirement age, you would have approximately</p>
                  <p className="text-2xl">£{result.SO_housing ? result.SO_housing.toFixed(0) : 'N/A'} in housing wealth</p>
                  <p className="text-2xl mb-1">£{result.SO_liquid ? result.SO_liquid.toFixed(0) : 'N/A'} in savings</p>
                  <p className="mb-3"> Wealth estimates are inflation adjusted and reflect the current value of wealth. Home values are assumed to appreciate at an annual rate of 5%. Inflation is assumed to be 3% and the mortgage rate 4%.
                    <a href="#comp" className="text-blue-500 hover:underline mb-3 inline-block">See here your lifetime wealth over time</a></p>            
                  <p className="text-xl font-bold">Repayment structure</p>
                  <p className="text-2xl">Mortgage free by the age of </p>
                  <p className="text-2xl mb-3">{result.SO_mortgage_finish ? result.SO_mortgage_finish.toFixed(0) : 'N/A'}</p>
                  <p>
                  <p>
                  <span className="tooltip"> [?]
                    <span className="tooltiptext" style={{ width: '1500px' }}>
                    Assuming you use all your savings to make prepayments.              
                    </span>
                  </span></p>
                  <a href="#loan" className="text-blue-500 hover:underline">See your standing loan balance over time</a></p>
              </div>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const renderScenariosExplained = () => {
  return (
    <div className="text-white my-20">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mt-10">Scenarios Explained</h2>
        <div className="w-full max-w-4xl px-6">
          <div className="flex justify-between space-x-4">
            <div className="w-3/4 text-left">
              <h3 className="text-2xl font-bold mb-2">Full Ownership</h3>
              <p className="text-2xl mb-3">
                Full ownership means buying a home outright by making a deposit of at least 5% of property’s value and 
                financing the rest with a mortgage. The maximum mortgage you can secure is limited to 4.5 times your 
                total annual gross income.
              </p>
              <p className="text-2xl">
                The calculator will determine the earliest time you can afford to buy outright.
              </p>
            </div>
            <div className="w-3/4 text-left">
              <h3 className="text-2xl font-bold mb-2">Shared Ownership</h3>
              <p className="text-2xl mb-3">
                Shared ownership allows you to purchase between 25% and 75% of a home and pay a reduced rent for the 
                remaining portion. You can buy additional shares over time and “staircase” to full ownership.
              </p>
              <p className="text-2xl">
                The calculator will determine the earliest time you can get onto the property ladder and the fastest way 
                you can staircase to 100% ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


return (
  <div className="bg-slate-800 py-20 text-white">
    {renderTwoColumnsText()}
    {renderScenariosExplained()}
    <div className="text-l mb-4 mx-8">
      <p>
        Please note that above calculations are based on a model designed by UCL and University of Durham academics and is only indicative and not financial advice. Here is the full list of assumptions used:_
        <span className="tooltip"> assumptions
          <span className="tooltiptext" style={{ width: '1500px' }}>
          • Savings rate: 3%<br />
          • Inflation: 3%<br />
          • Mortgage rate: 4%<br />
          • House price appreciation: 5%<br />
          • House maintenance cost: 1%<br />
          • Mortgage term: 30 years<br />
          • Transaction cost: 0%<br />
          • Loan to Value (LTV): 95%<br />
          • Loan ratio: 4.5x<br />
          • Maximum income to expenditure ratio (max inc to exp): 40%<br />
          • Rent appreciation: 3.5%<br />
          • Minimum initial share: 25%<br />
          • Initial rent percent: 2.75%<br />
          • Staircase administration fee: $1000<br />
          • Service charge: 1%<br />
          • Affordability constraint: 40%
          </span>
        </span>
      </p>      
    </div>
    <div className="flex-grow px-8 mx-32">
        {/* First row of charts */}
        <div className="flex justify-center">
          <div id="staircasing" className="w-1/7 md:w-1/2 px-4" style={{ height: '450px' }}>
            {renderstairchart()}
          </div>
        </div>
        {/* First row of charts */}
        <div className="flex justify-center">
          <div id="comp" className="w-1/7 md:w-1/2 px-4" style={{ height: '450px' }}>
            {rendercompchart()}
          </div>
        </div>
        {/* third chart */}
        <div className="flex justify-center">
          <div id="loan" className="w-1/7 md:w-1/2 px-4" style={{ height: '450px' }}>
            {renderloanchart()}
          </div>
        </div>
      </div>
    <FAQSection />
    <div className="bg-white h-screen flex justify-center items-center">
    <img src={flowchart} alt="Damian Flowchart" />
    </div>  
    </div>
  );
}


Results.propTypes = {
  result: PropTypes.object,
};

export default Results;
