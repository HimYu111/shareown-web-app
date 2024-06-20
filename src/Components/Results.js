import PropTypes from "prop-types";
import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
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

  const mob_age_ranges = result?.age_ranges ? JSON.parse(result.age_ranges) : [];
  const mob_TO_wealthdata = result?.net_wealth_ak_list ? JSON.parse(result.net_wealth_ak_list) : [];
  const mob_SO_wealthdata = result?.net_wealth_cd_list ? JSON.parse(result.net_wealth_cd_list) : [];
  const mob_TO_hwealthdata = result?.net_wealth_al_list ? JSON.parse(result.net_wealth_al_list) : [];
  const mob_SO_hwealthdata = result?.net_wealth_cc_list ? JSON.parse(result.net_wealth_cc_list) : [];
  const age_stairgraph = result?.age_stairgraph ? JSON.parse(result.age_stairgraph) : [];
  const share_stairgraph = result?.share_stairgraph ? JSON.parse(result.share_stairgraph) : [];
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
      labels: [...age_stairgraph],
      datasets: [
        {
          label: 'Share owned (%)',
          data: [...share_stairgraph.map(item => parseFloat(item))],
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
              return `${(value * 100).toFixed(0)}%`; 
            }
          }
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

  const rendercompchartmob = () => {
    const data = {
      labels: [...mob_age_ranges],
      datasets: [
        ...(result.TO_housing > 0 ? [{
          label: 'Full Ownership',
          data: [...mob_TO_wealthdata.map(item => parseFloat(item))],
        //  borderColor: 'red',
        //  backgroundColor: 'rgba(255, 0, 0, 0.5)',
        borderColor: '#8ba4ad',
        backgroundColor: '#8ba4ad',
          borderWidth: 1,
          fill: false,
        }] : []),
        ...(result.SO_housing > 0 ? [{
          label: 'Shared Ownership',
          data: [...mob_SO_wealthdata.map(item => parseFloat(item))],
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

  const rendercomphchartmob = () => {
    const data = {
      labels: [...mob_age_ranges],
      datasets: [
        ...(result.TO_housing > 0 ? [{
          label: 'Full Ownership',
          data: [...mob_TO_hwealthdata.map(item => parseFloat(item))],
          borderColor: '#8ba4ad',
          backgroundColor: '#8ba4ad',
          borderWidth: 1,
          fill: false,
        }] : []),
        ...(result.SO_housing > 0 ? [{
          label: 'Shared Ownership',
          data: [...mob_SO_hwealthdata.map(item => parseFloat(item))],
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
        <>
          <div className="staircasing-2cols-wrapper std-2cols-wrapper">
            <div className="staircasing-combinedcol std-1stcol">
              <div className="initial-share">
                <p className="font-bold">Initial Share</p>
                <p>You can afford to buy an initial share of</p>
                <p><span className="results-number">{result.SO_share ? formatNumber(result.SO_share.toFixed(0)) : '0'}%</span></p>
                <p>at the age of</p>
                <p><span className="results-number">{result.SO_start_age ? formatNumber(result.SO_start_age.toFixed(0)) : '0'}</span></p>
              </div>
            </div>
            <div className="lifetime-2ndcol std-2ndcol">
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
          </div>
          <div className="staircasing-chartcol std-2ndcol">
            <div id="staircasing">
              {renderstairchart()}
            </div>
          </div>
        </>
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
  </div>
</div>

  );
}


Results.propTypes = {
  result: PropTypes.object,
};

export default Results;