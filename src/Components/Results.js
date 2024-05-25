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
          display: false, // This line disables the legend
        },
        title: {
          display: true,
          text: 'Buying additional shares (staircasing)',
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
            text: 'Share (%)',
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
        ...(result.TO_housing > 0 ? [{
          label: 'Full Ownership',
          data: [...mortgagedata2.map(item => parseFloat(item))],
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          borderWidth: 1,
          fill: false,
        }] : []),
        ...(result.SO_housing > 0 ? [{
          label: 'Shared Ownership',
          data: [...mortgagedata.map(item => parseFloat(item))],
          borderColor: 'green',
          backgroundColor: 'rgba(0, 255, 0, 0.5)',
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
          text: 'Outstanding Loan Balance (OLB) Over Time For Full and Shared Ownership',
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
    return <Bar data={data} options={options} />;
  };
  
  const rendercompchart = () => {
    const data = {
      labels: [...ageattimedata],
      datasets: [
        ...(result.TO_housing > 0 ? [{
          label: 'Full Ownership',
          data: [...TO_wealthdata.map(item => parseFloat(item))],
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          borderWidth: 1,
          fill: false,
        }] : []),
        ...(result.SO_housing > 0 ? [{
          label: 'Shared Ownership',
          data: [...SO_wealthdata.map(item => parseFloat(item))],
          borderColor: 'green',
          backgroundColor: 'rgba(0, 255, 0, 0.5)',
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
          text: 'Liquid Wealth Comparison: Total Ownership vs Shared Ownership',
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
            text: 'Lifetime Wealth (£)',
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
      answer: `The lifetime calculator is based on an EPSRC-UCL research funded project. The underlying calculator is developed by academics at UCL and Durham University and is free of charge. It is not for commercial use and does not provide financial advice. ®`
    },
    {
      question: "What are the model assumptions?",
      answer: 
        <span className="tooltiptext" style={{ width: '1500px', textAlign: 'right' }}>
          • Interest rate on deposits: 3%<br />
          • Inflation: 3%<br />
          • Mortgage rate: 4%<br />
          • House price appreciation: 5%<br />
          • House maintenance cost: 1%<br />
          • Mortgage term: 30 years<br />
          • Transaction cost: 0%<br />
          • Loan to Value (LTV): You can borrow up to 95% of the home value (for full ownership)<br />
          • Loan to Value (LTV): You can borrow up to 95% of the value of the share that you're buying (for shared ownership)<br />
          • Loan ratio: Total mortgage debt cannot exceed more than 4.5 times your annual gross income<br />
          • Maximum income to expenditure ratio (max inc to exp): 40%<br />
          • For shared ownership, total housing expenses (mortgage, rent, service charge) cannot exceed 40% of your net annual income<br />
          • Rent appreciation: 3.5%<br />
          • Minimum initial share: 25%<br />
          • Initial rent percent: 2.75%<br />
          • Staircase administration fee: £1000<br />
          • Service charge: 1%<br />
          • Affordability constraint: 40% <br />
          • The model assumes you will retire at 67, and will not work after this point. 
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
          <img src={flowchart} alt="Damian Flowchart"  className="w-1/2 h-auto"/>
          </div>  
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
      <div className="text-center my-4">
        <h2 className="text-xl font-bold text-white">
          <p>You cannot afford full ownership or shared ownership with the current inputs and the assumptions of the model. However, under different assumptions and inputs you might be able to afford full ownership. 
                    You can lower the price of the home, or vary your income. (Find out more about the assumptions of the model 
                      <a href="#faqs" className="text-blue-500 hover:underline"> here</a>.).</p>
        </h2>
      </div>
    );
  }

  return (
    <div className="results">
      <h1 className="text-2xl justify-center text-white">Value of home: £{result.house_price? formatNumber(result.house_price.toFixed(0)) : 'N/A'}</h1>

      <div className="flex justify-center my-4 mb-20 text-white results-2cols">
     {/*   <div className="flex-grow px-6">
        <div className="flex justify-between space" style={{ display: 'flex' }}>
  <div className="flex justify-between space-x-4 results-1st-col-wrapper">*/}
            {result.TO_housing === 0 ? (
              <div className="results-1st-col">
                <h2 className="results-fullOwn font-bold">Full ownership</h2>
                <p>You cannot afford full ownership with the current inputs. You can lower the price of the home, or vary your income.</p>
              </div>
            ) : (
              <div className="results-1st-col">
                <h2 className="results-fullOwn font-bold">Full ownership</h2>

                  <p className="font-bold">Minimum Deposit: <span className="results-number">£{result.TO_deposit ? formatNumber(result.TO_deposit.toFixed(0)) : 'N/A'}</span></p>
                  <p className="italic"><a href="#faqs" className="text-blue-500 hover:underline">Find out more about the model assumptions</a></p>
                  <p className="mb-6 no-wrap">  You {result.TO_time < 1 ? 'have enough savings for the deposit now' 
                  : `will have enough savings for the deposit in ${result.TO_time ? formatNumber(result.TO_time.toFixed(0)) : "0"} years`}</p>
                  <p className="font-bold">100% Ownership:</p>
                  <p className="mb-6">Get on the property ladder by the age of <span className="results-number">{result.TO_age ? formatNumber(result.TO_age.toFixed(0)) : 'N/A'}</span></p>
                  <p className="font-bold">Monthly costs&nbsp;             
                    <span className="tooltip"> [?]
                    <span className="tooltiptext" style={{ width: '1500px' }}>
                    Includes the mortgage payment (assuming a repayment over 30 years).
                    </span>
                  </span>
                  </p>
                  <p className="mb-6"><span className="results-number">£{result.TO_mortgage >= 0 ? formatNumber(result.TO_mortgage.toFixed(0)) : '0'}</span></p>

                  <p className="font-bold">Lifetime wealth&nbsp;
                  <span className="tooltip"> [?]
                    <span className="tooltiptext" style={{ width: '1500px' }}>
                    Wealth estimates are inflation adjusted and reflect the current value of wealth. Home values are assumed to appreciate at an annual rate of 5%. Inflation is assumed to be 3% and the mortgage rate 4%.
                    </span>
                    </span>
                  </p>
                  <p className="">By retirement age, you would have approximately</p>
                  <p className=""><span className="results-number">£{result.TO_housing ? formatNumber(result.TO_housing.toFixed(0)) : '0'}</span> in housing wealth</p>
                  <p className=""><span className="results-number">£{result.TO_liquid ? formatNumber(result.TO_liquid.toFixed(0)) : '0'}</span> in savings</p>
                  <p className="mb-6 italic">
                    <a href="#comp" className="text-blue-500 hover:underline mb-3 inline-block">See here your lifetime wealth over time</a></p>
                  <p className="font-bold">Repayment structure&nbsp; 
                  <span className="tooltip"> [?]
                    <span className="tooltiptext" style={{ width: '1500px' }}>
                    Assuming you use all your savings to make prepayments.              
                    </span>
                  </span></p>
                  <p className="">Mortgage free {result.TO_finish < 1
                      ? ` now`
                      : ` by the age of  ${result.TO_finish ? formatNumber(result.TO_finish.toFixed(0)) : "0"} years`}</p>
                  <p className="italic"><a href="#loan" className="text-blue-500 hover:underline">See your outstanding loan balance over time</a></p>
                </div>
              )}
         {/* </div>

          <div className="flex justify-between space-x-4">*/}
            {result.SO_housing === 0 ? (
              <div className="results-2nd-col">
                <h2 className="results-sharedOwn font-bold">Shared Ownership</h2>
                <p>You cannot afford staircase to 100% through shared ownership with the current inputs. You can lower the price of the home, or vary your income.</p>
              </div>
            ) : (
              <div className="results-2nd-col">

                  <h2 className="results-sharedOwn font-bold">Shared Ownership</h2>
                  <p className="font-bold">Minimum Deposit: <span className="results-number">£{result.SO_deposit ? formatNumber(result.SO_deposit.toFixed(0)) : 'N/A'}</span></p>
                  <p className="italic"><a href="#faqs" className="text-blue-500 hover:underline">Find out more about the model assumptions</a></p>
                  <p className="mb-6">
                    {result.SO_share > 0.25
                      ? `You can afford to buy a share of 25% now`
                      : `You can afford shared ownership in ${result.SO_time ?formatNumber(result.SO_time.toFixed(0)) : "0"} years`}
                  </p>

                  
                  <p className="font-bold">100% Ownership:</p>
                  <p className="">Staircase to full ownership by the age of {result.SO_staircase_finish ? formatNumber(result.SO_staircase_finish.toFixed(0)) : 'N/A'}
                  <span className="tooltip">&nbsp;[?]
                  <span className="tooltiptext" style={{ width: '1500px' }}>
                    Assuming you use all your savings to buy additional shares (staircase).
                  </span>
                  </span>
                  </p>
                  <p className="italic mb-0"><a href="#staircasing" className="text-blue-500 hover:underline inline-block">See here how you can staircase over time</a></p>


                  <p className="font-bold" >Monthly costs&nbsp;           
                    <span className="tooltip"> [?]
                    <span className="tooltiptext" style={{ width: '1500px' }}>
                    Includes the mortgage payment (assuming a repayment over 30 years).
                    </span>
                  </span>
                  </p>
                  <p className="mb-6">£{result.SO_mortgage ? formatNumber(result.SO_mortgage.toFixed(0)) : 'N/A'}</p>
                  <p className="font-bold">Lifetime wealth&nbsp; 
                  <span className="tooltip"> [?]
                    <span className="tooltiptext" style={{ width: '1500px' }}>
                    Wealth estimates are inflation adjusted and reflect the current value of wealth. Home values are assumed to appreciate at an annual rate of 5%. Inflation is assumed to be 3% and the mortgage rate 4%.
                    </span>
                    </span>
                  </p>
                  <p className="">By retirement age, you would have approximately</p>
                  <p className=""><span className="results-number">£{result.SO_housing ? formatNumber(result.SO_housing.toFixed(0)) : '0'}</span> in housing wealth</p>
                  <p className=""><span className="results-number">£{result.SO_liquid ? formatNumber(result.SO_liquid.toFixed(0)) : '0'}</span> in savings</p>        

                  <p className="italic mb-6"> 
                    <a href="#comp" className="text-blue-500 hover:underline mb-3 inline-block">See here your lifetime wealth over time</a></p>            
                  <p className="font-bold">Repayment structure&nbsp;
                  <span className="tooltip"> [?]
                    <span className="tooltiptext" style={{ width: '1500px' }}>
                    Assuming you use all your savings to make prepayments.              
                    </span>
                  </span>
                  
                  </p>
                  <p className="">Mortgage free {result.TO_finish < 1
                      ? ` now`
                      : ` by the age of  ${result.TO_finish ? formatNumber(result.TO_finish.toFixed(0)) : "0"} years`} </p>

                  <p className="italic"><a href="#loan" className="text-blue-500 hover:underline">See your outstanding loan balance over time</a></p>
              </div>

            )}
          </div>
          </div>

  );
};



const renderScenariosExplained = () => {
  return (
    <div className="text-white scenarios-wrapper my-4">
        <h1 className="font-bold">Scenarios Explained</h1>
        <div className="scenarios-2cols-wrapper">
            <div className="scenarios-1stcol">
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
            <div className="scenarios-2ndcol">
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
        <h2 className="results-fullOwn">How is my tax calculated?</h2>
        <ul>
          <li><strong>Basic Rate (20%):</strong> Applied to income up to £37,700.</li>
          <li><strong>Higher Rate (40%):</strong> Applied to income from £37,701 to £125,140. Exclusive of any income under the higher threshold.</li>
          <li><strong>Additional Rate (45%):</strong> Applied to income above £125,140. Exclusive of any income under the additional rate threshold.</li>
        </ul>
    </div>
  );
};



return (
  <div id="results" className="bg-slate-800 py-20 text-white results-wrapper">
    <div className="results-container">
    {renderTwoColumnsText()}
    {renderScenariosExplained()}

    <div className="charts-container">
    <div className="charts-wrapper">
        {/* first charts */}
        <div className="charts">
          {result.SO_housing > 0 ? (
            <div id="staircasing" className="" style={{ height: '450px' }}>
              {renderstairchart()}
            </div>
          ) : (
            <p className="text-center text-white">
            </p>
          )}
        </div>
        {/* second chart */}
        <div className="charts">
          {result.TO_housing > 0 || result.SO_housing > 0 ? (
          <div id="comp" className="mb-2" style={{ height: '450px' }}>
            {rendercompchart()}
          </div>
            ) : (
              <p className="text-center text-white"> </p>
            )}
        </div>
        {/* third chart */}
        <div className="charts">
          {result.TO_housing > 0 || result.SO_housing > 0 ? (
          <div id="loan" className="mb-2" style={{ height: '450px' }}>
            {renderloanchart()}
          </div>
            ) : (
              <p className="text-center text-white"> </p>
            )}
        </div>
      </div>

      <div className="grapics-container-note">
      <p className="grapics-note">
        Please note that above calculations are based on a model designed by UCL and University of Durham academics and is only indicative and not financial advice. Here is the full list of&nbsp;
        <span className="tooltip text-blue-500 hover:underline"> assumptions used
          <span className="tooltiptext" style={{ width: '1500px' }}>
          • Interest rate on deposits: 3%<br />
          • Inflation: 3%<br />
          • Mortgage rate: 4%<br />
          • House price appreciation: 5%<br />
          • House maintenance cost: 1%<br />
          • Mortgage term: 30 years<br />
          • Transaction cost: 0%<br />
          • Loan to Value (LTV): You can borrow up to 95% of the home value (for full ownership)<br />
          • Loan to Value (LTV): You can borrow up to 95% of the value of the share that you're buying (for shared ownership)<br />
          • Loan ratio: Total mortgage debt cannot exceed more than 4.5 times your annual gross income<br />
          • Maximum income to expenditure ratio (max inc to exp): 40%<br />
          • For shared ownership, total housing expenses (mortgage, rent, service charge) cannot exceed 40% of your net annual income<br />
          • Rent appreciation: 3.5%<br />
          • Minimum initial share: 25%<br />
          • Initial rent percent: 2.75%<br />
          • Staircase administration fee: £1000<br />
          • Service charge: 1%<br />
          • Affordability constraint: 40% <br />
          • The model assumes you will retire at 67, and will not work after this point. 
          </span>
        </span>.
      </p>      
    </div>
    <div id="faqs" className="p-4 rounded-md shadow-md" style={{ backgroundColor: 'white' }}>
    <FAQSection />
    </div>
    </div>
  </div>
</div>
  );
}


Results.propTypes = {
  result: PropTypes.object,
};

export default Results;
