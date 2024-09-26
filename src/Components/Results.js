import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib,faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import '../App.css';
 
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

const ToggleText = ({ className, regularText, toggleableText }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  if (isVisible) {
    document.addEventListener('mousedown', handleClickOutside);
  } else {
    document.removeEventListener('mousedown', handleClickOutside);
  }

  return (
    <div className="toggle-text-container">
      <p className={`regular-text ${className}`}>{regularText}</p>
      <span className="toggle-icon" onClick={toggleVisibility}>
        <sup><FontAwesomeIcon icon={faCircleQuestion} /></sup>
      </span>
      {isVisible && (
        <div className="toggleable-text" ref={tooltipRef}>
          <p>{toggleableText}</p>
        </div>
      )}
    </div>
  );
}

function Results({ result }) {
  if (!result) {
    return <p></p>
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

  const parseNumericList = (str) => {
    console.log('Type of str:', typeof str);  // Log the type of the input
    console.log('Value of str:', str);        // Log the actual value of the input
    
    if (typeof str !== 'string') {
      console.error('Expected a string but got:', typeof str);
      return [];
    }
  
    const trimmedStr = str.slice(1, -1);
    return trimmedStr.split(',').map(item => parseFloat(item.trim()));
  };
  
  // Log the type and value for mob_age_ranges
  const mob_age_ranges = result?.age_ranges ? JSON.parse(result.age_ranges) : [];
  console.log('Type of age_ranges:', typeof result?.age_ranges);
  console.log('Value of age_ranges:', result?.age_ranges);
  
  // Log the type and value for net_wealth_cd_by_age_range
  console.log('Type of net_wealth_cd_by_age_range:', typeof result?.net_wealth_cd_by_age_range);
  console.log('Value of net_wealth_cd_by_age_range:', result?.net_wealth_cd_by_age_range);
  const net_wealth_cd_list = parseNumericList(result.net_wealth_cd_by_age_range);
  
  // Log the type and value for net_wealth_ak_by_age_range
  console.log('Type of net_wealth_ak_by_age_range:', typeof result?.net_wealth_ak_by_age_range);
  console.log('Value of net_wealth_ak_by_age_range:', result?.net_wealth_ak_by_age_range);
  const net_wealth_ak_list = parseNumericList(result.net_wealth_ak_by_age_range);
  
  // Log the type and value for net_wealth_cc_by_age_range
  console.log('Type of net_wealth_cc_by_age_range:', typeof result?.net_wealth_cc_by_age_range);
  console.log('Value of net_wealth_cc_by_age_range:', result?.net_wealth_cc_by_age_range);
  const net_wealth_al_list = parseNumericList(result.net_wealth_cc_by_age_range);
  
  // Log the type and value for net_wealth_al_by_age_range
  console.log('Type of net_wealth_al_by_age_range:', typeof result?.net_wealth_al_by_age_range);
  console.log('Value of net_wealth_al_by_age_range:', result?.net_wealth_al_by_age_range);
  const net_wealth_cc_list = parseNumericList(result.net_wealth_al_by_age_range);
  
  // Log the type and value for net_wealth_aa_by_age_range
  console.log('Type of net_wealth_aa_by_age_range:', typeof result?.net_wealth_aa_by_age_range);
  console.log('Value of net_wealth_aa_by_age_range:', result?.net_wealth_aa_by_age_range);
  const net_wealth_aa_list = parseNumericList(result.net_wealth_aa_by_age_range);
  
  // Log the type and value for net_wealth_bt_by_age_range
  console.log('Type of net_wealth_bt_by_age_range:', typeof result?.net_wealth_bt_by_age_range);
  console.log('Value of net_wealth_bt_by_age_range:', result?.net_wealth_bt_by_age_range);
  const net_wealth_bt_list = parseNumericList(result.net_wealth_bt_by_age_range);
  
  
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
  
  const higherIncomePostcodes = [
    "City of London", "Barking and Dagenham", "Barnet", "Bexley", "Brent", "Bromley", "Camden", "Croydon", 
    "Ealing", "Enfield", "Greenwich", "Hackney", "Hammersmith and Fulham", "Haringey", "Harrow", "Havering", 
    "Hillingdon", "Hounslow", "Islington", "Kensington and Chelsea", "Kingston upon Thames", "Lambeth", "Lewisham", 
    "Merton", "Newham", "Redbridge", "Richmond upon Thames", "Southwark", "Sutton", "Tower Hamlets", "Waltham Forest", 
    "Wandsworth", "Westminster"
  ];
  
  // Determine the income threshold based on the postcode
  const isHigherIncomePostcode = higherIncomePostcodes.includes(result.postcode); // Make sure 'result.postcode' is correct
  const incomeThreshold = isHigherIncomePostcode ? 90000 : 80000;

  const renderstairchart= () => {
    if (age_stairgraph.length <= 1) {
      return null;
    }
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
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return `${(tooltipItem.raw.toFixed(2) * 100).toFixed(0)}%`;
            }
          }
        }
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
    return ( 
    <div>
    <Bar data={data} options={options} className="stairchart-diagram std-diagram" />
      <div>
        <p className="undergraph-text text-white">This graph shows the share of the house you would own. Shared ownership allows you to buy additional shares over time.</p>
      </div>
    </div>
    );
  };
  const renderloanchart = () => {
    const data = {
      labels: [...ageattimedata],
      datasets: [
        ...(result.TO_housing > 0 ? [{
          label: 'Full Ownership',
          data: [...mortgagedata2.map(item => parseFloat(item))],
          borderColor: '#68aac0',
          backgroundColor: '#68aac0',
          borderWidth: 1,
          fill: false,
        }] : []),
        ...(result.SO_housing > 0 && result.income < incomeThreshold  ? [{
          label: 'Shared Ownership',
          data: [...mortgagedata.map(item => parseFloat(item))],
          borderColor: '#2d67b3',
          backgroundColor: '#2d67b3',
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
            callback: function (value) {
              return value.toLocaleString();
            },
          },
        },
      },
    };
  
    return (
      <div>
        <Line data={data} options={options} className="lonechart-diagram std-diagram" />
        <div>
          <p className="undergraph-text text-white mb-6">
            This graph shows the mortgage on the home you are buying. Remortgaging allows you to own your home quicker.
          </p>
        </div>
      </div>
    );
  };
  
  const renderloanchartmob = () => {
    if (!Array.isArray(net_wealth_aa_list) || !Array.isArray(net_wealth_bt_list)) {
      console.error('net_wealth_aa_list or net_wealth_bt_list is not an array:', net_wealth_aa_list, net_wealth_bt_list);
      return null;
    }
  
    const isAllZeros = (arr) => arr.every(item => item === 0);
    const allAaZeros = isAllZeros(net_wealth_aa_list);
    const allBtZeros = isAllZeros(net_wealth_bt_list);
  
    if (allAaZeros && allBtZeros) {
      return null;
    }
  
    const data = {
      labels: mob_age_ranges,
      datasets: [
        ...(result.TO_housing > 0 && !allAaZeros ? [{
          label: 'FO',
          data: net_wealth_aa_list.map(item => parseFloat(item)),
          borderColor: '#68aac0',
          backgroundColor: '#68aac0',
          borderWidth: 1,
          fill: false,
        }] : []),
        ...(result.SO_housing > 0 && result.income < incomeThreshold  && !allBtZeros ? [{
          label: 'SO',
          data: net_wealth_bt_list.map(item => parseFloat(item)),
          borderColor: '#2d67b3',
          backgroundColor: '#2d67b3',
          borderWidth: 1,
          fill: false,
        }] : []),
      ]
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
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
            callback: function (value) {
              return value.toLocaleString();
            },
          },
        },
      },
    };
  
    const chartContainerStyle = {
      height: '50vh',
      width: '100%',
    };
  
    return (
      <div style={chartContainerStyle}>
        <Bar data={data} options={options} className="std-diagram" />
        <div>
          <p className="undergraph-text text-white mb-6">
            This graph shows the mortgage on the house you are buying. Remortgaging allows you to own your house quicker.
          </p>
        </div>
      </div>
    );
  };
  
  const rendercompchart = () => {
    const data = {
      labels: [...ageattimedata],
      datasets: [
        ...(result.TO_housing > 0 ? [{
          label: 'Full Ownership',
          data: [...TO_wealthdata.map(item => parseFloat(item))],
          borderColor: '#68aac0',
          backgroundColor: '#68aac0',
          borderWidth: 1,
          fill: false,
        }] : []),
        ...(result.SO_housing > 0 && result.income < incomeThreshold  ? [{
          label: 'Shared Ownership',
          data: [...SO_wealthdata.map(item => parseFloat(item))],
          borderColor: '#2d67b3',
          backgroundColor: '#2d67b3',
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
            callback: function (value) {
              return value.toLocaleString();
            },
          },
        },
      },
    };
  
    return (
      <div>
        <Line data={data} options={options} className="rendercompchart-diagram std-diagram" />
        <div>
          <p className="undergraph-text text-white mb-6">
            This graph shows your projected future bank saving (adjusted for inflation).
          </p>
        </div>
      </div>
    );
  };
  
  const rendercompchartmob = () => {
    if (!Array.isArray(net_wealth_ak_list) || !Array.isArray(net_wealth_cc_list)) {
      console.error('net_wealth_ak_list or net_wealth_cc_list is not an array:', net_wealth_ak_list, net_wealth_cc_list);
      return null;
    }
  
    const isAllZeros = (arr) => arr.every(item => item === 0);
  
    const hasFOData = result.TO_housing > 0 && !isAllZeros(net_wealth_ak_list);
    const hasSOData = result.SO_housing > 0 && result.income < incomeThreshold  && !isAllZeros(net_wealth_cc_list);
  
    if (!hasFOData && !hasSOData) {
      return null;
    }
  
    const data = {
      labels: mob_age_ranges,
      datasets: [
        ...(hasFOData ? [{
          label: 'FO',
          data: net_wealth_ak_list.map(item => parseFloat(item)),
          borderColor: '#8ba4ad',
          backgroundColor: '#8ba4ad',
          borderWidth: 1,
          fill: false,
        }] : []),
        ...(hasSOData ? [{
          label: 'SO',
          data: net_wealth_cc_list.map(item => parseFloat(item)),
          borderColor: '#478194',
          backgroundColor: '#478194',
          borderWidth: 1,
          fill: false,
        }] : []),
      ]
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: 'white',
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
            callback: function (value) {
              return value.toLocaleString();
            },
          },
        },
      },
    };
  
    const chartContainerStyle = {
      height: '50vh',
      width: '100%',
    };
  
    return (
      <div style={chartContainerStyle}>
        <Bar data={data} options={options} className="std-diagram" />
        <div>
          <p className="undergraph-text text-white mb-6">
            This graph shows your projected future bank saving (adjusted for inflation).
          </p>
        </div>
      </div>
    );
  };
  
  const rendercomphchart = () => {
    const data = {
      labels: [...ageattimedata],
      datasets: [
        ...(result.TO_housing > 0 ? [{
          label: 'Full Ownership',
          data: [...TO_housedata.map(item => parseFloat(item))],
          borderColor: '#68aac0',
          backgroundColor: '#68aac0',
          borderWidth: 1,
          fill: false,
        }] : []),
        ...(result.SO_housing > 0 && result.income < incomeThreshold  ? [{
          label: 'Shared Ownership',
          data: [...SO_housedata.map(item => parseFloat(item))],
          borderColor: '#2d67b3',
          backgroundColor: '#2d67b3',
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
          text: 'Housing Wealth',
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
            text: 'Housing Wealth (£)',
            color: 'white',
            font: {
              size: 18,
            },
          },
          ticks: {
            color: 'white',
            callback: function (value) {
              return value.toLocaleString();
            },
          },
        },
      },
    };
  
    return (
      <div>
        <Line data={data} options={options} className="std-diagram" />
        <div>
          <p className="undergraph-text text-white mb-6">
            This graph shows your projected housing wealth (net of mortgage debt and adjusted for inflation).
          </p>
        </div>
      </div>
    );
  };
  
  const rendercomphchartmob = () => {
    const data = {
      labels: [...mob_age_ranges],
      datasets: [
        ...(result.TO_housing > 0 ? [{
          label: 'FO',
          data: net_wealth_al_list.map(item => parseFloat(item)),
          borderColor: '#8ba4ad',
          backgroundColor: '#8ba4ad',
          borderWidth: 1,
          fill: false,
        }] : []),
        ...(result.SO_housing > 0 && result.income < incomeThreshold  ? [{
          label: 'SO',
          data: net_wealth_cd_list.map(item => parseFloat(item)),
          borderColor: '#478194',
          backgroundColor: '#478194',
          borderWidth: 1,
          fill: false,
        }] : []),
      ]
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: 'white',
          },
        },
        title: {
          display: true,
          text: 'Housing Wealth',
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
            text: 'Housing Wealth (£)',
            color: 'white',
            font: {
              size: 18,
            },
          },
          ticks: {
            color: 'white',
            callback: function (value) {
              return value.toLocaleString();
            },
          },
        },
      },
    };
  
    const chartContainerStyle = {
      height: '50vh',
      width: '100%',
    };
  
    return (
      <div style={chartContainerStyle}>
        <Bar data={data} options={options} className="std-diagram" />
        <div>
          <p className="undergraph-text text-white mb-6">
            This graph shows your projected housing wealth (net of mortgage debt and adjusted for inflation).
          </p>
        </div>
      </div>
    );
  };
  

const renderTwoColumnsText = () => {
  if (result.TO_housing === 0 && result.SO_housing === 0) {
    return (
      <div className="results">
        <h1 className="text-2xl justify-center text-white">Price of home: £{result.house_price ? formatNumber(result.house_price.toFixed(0)) : 'N/A'}</h1>
        <div className="text-center my-4">
          <h2 className="text-xl font-bold text-white">
            <p className="text-xl font-bold text-white">
              You cannot afford Shared Ownership or full ownership with the current inputs and the
              <Link to="/FAQs" className="text-blue-500 hover:underline"> assumptions</Link> of the model.
            </p>
            <p>You can change some of the above inputs like the price of the home, the location, income, etc. to assess when you can afford Shared Ownership or/and full ownership.</p>
          </h2>
        </div>
      </div>
    );
  }
  return (
    <div className="results">
      <h1 className="text-2xl justify-center text-white">Price of home: £{result.house_price ? formatNumber(result.house_price.toFixed(0)) : 'N/A'}</h1>
      <div className="text-white results-2cols">
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
            <ToggleText
              className="font-bold" 
              regularText ="Monthly costs "
              toggleableText="Includes the mortgage payment. Assumes all savings are used to make repayments. For model assumptions check the FAQs."
            />
            <p className="mb-6"><div className="results-number">£{result.TO_mortgage >= 0 ? formatNumber(result.TO_mortgage.toFixed(0)) : '0'}</div></p>
            <ToggleText
              className="" 
              regularText ="You will be mortgage free by the age of "
              toggleableText="Assumes all savings are used to make repayments. For model assumptions check the FAQs."/>
              <div className="results-number">{result.TO_finish ? formatNumber(result.TO_finish.toFixed(0)) : 'Now'}</div>
          </div>
        )}
        {result.income >= incomeThreshold  ? (
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
            <ToggleText
              className="font-bold" 
              regularText ="Monthly costs "
              toggleableText="Includes the mortgage payment. Assumes all savings are used to make repayments. For model assumptions check the FAQs."
            />
            <p className="mb-6"><div className="results-number">£{result.SO_mortgage ? formatNumber(result.SO_mortgage.toFixed(0)) : 'N/A'}</div></p>
            <ToggleText
              className="" 
              regularText ="You will be mortgage free by the age of "
              toggleableText="Assumes all savings are used to make repayments. For model assumptions check the FAQs"
            />
            <div className="results-number">{result.SO_mortgage_finish ? formatNumber(result.SO_mortgage_finish.toFixed(0)) : 'Now'}</div> 
           {/* <p className="italic mb-0"><a href="#staircasing" className="text-blue-500 hover:underline inline-block">See here how you can staircase over time</a></p>*/} 
          </div>
        )}
      </div>
    </div>
  );
};

const renderstaircasing = () => {
  if (result.TO_housing === 0 && result.SO_housing === 0) {
    return <div className="text-center my-4"></div>
  }
  return (
    <div className="text-white staircasing-wrapper std-wrapper">
      <h1 className="font-bold">Shared Ownership Staircasing</h1>
      {result.income >= incomeThreshold  ? (
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
                <p><span className="results-number mb-3">{result.SO_share ? formatNumber(result.SO_share.toFixed(0)) : '0'}%</span></p>
                <p>at the age of</p>
                <p><span className="results-number mb-3">{result.SO_start_age ? formatNumber(result.SO_start_age.toFixed(0)) : '0'}</span></p>
              </div>
            </div>
            <div className="lifetime-2ndcol std-2ndcol">
              <div className="full-ownership">
                <ToggleText
                  className="font-bold" 
                  regularText ="100% Ownership"
                  toggleableText="Assumes all savings are used to buy additional shares using a mortgage. For model assumptions check the FAQs."
                />
                <p>Staircase to 100% by the age of</p>
                <p><span className="results-number mb-3">{result.SO_staircase_finish ? formatNumber(result.SO_staircase_finish.toFixed(0)) : '0'}</span></p>
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
  const isMobileScreen = () => {
    return window.innerWidth < 500;
  };
  if (result.TO_housing === 0 && result.SO_housing === 0) {
    return (
      <div className="text-center my-4">
      </div>
    );
  }
  return (
    <div className="text-white lifetime-wrapper std-wrapper">
      <div>
        <h1 className="font-bold">Lifetime Wealth
          <ToggleText
            className="font-bold" 
            regularText =" "
            toggleableText="Shows the current value of future savings and future changes to house prices, i.e. housing wealth up until retirement."
          />
        </h1>
      </div>
      {result.TO_housing === 0 ? (
        <div className="lifetime-2cols-wrapper std-2cols-wrapper">
          <div className="lifetime-1stcol std-1stcol">
            <h2 className="results-fullOwn">Full Ownership</h2>
            <ToggleText
              className="font-bold" 
              regularText ="Savings "
              toggleableText="Current value of future savings accumulated up until retirement age. For model assumptions check the FAQs."
            />
            <p className=""><div className="results-number">£{result.TO_liquid ? formatNumber(result.TO_liquid.toFixed(0)) : '0'}</div> </p>
            <ToggleText
              className="font-bold" 
              regularText ="Housing wealth "
              toggleableText="Current value of future housing wealth accumulated up until retirement age. For model assumptions check the FAQs."
            />
            <p>You cannot afford full ownership. You can change above inputs, i.e., lower the price of the home, vary income, to see when you can afford full ownership.</p>
          </div>
          <div className="lifetime-2ndcol std-2ndcol">
            <h2 className="results-sharedOwn">Shared Ownership</h2>
            <ToggleText
              className="font-bold" 
              regularText ="Savings "
              toggleableText="Current value of future savings accumulated up until retirement age. For model assumptions check the FAQs."
            />
            <p className=""><div className="results-number">£{result.SO_liquid ? formatNumber(result.SO_liquid.toFixed(0)) : '0'}</div> </p>
            <ToggleText
              className="font-bold" 
              regularText ="Housing wealth "
              toggleableText="Current value of future housing wealth accumulated up until retirement age. For model assumptions check the FAQs."
            />
            <p className=""><div className="results-number">£{result.SO_housing ? formatNumber(result.SO_housing.toFixed(0)) : '0'}</div></p>
          </div>
        </div>
      ) : result.income >= incomeThreshold  ? (
        <div className="lifetime-2cols-wrapper std-2cols-wrapper">
          <div className="lifetime-1stcol std-1stcol">
            <h2 className="results-fullOwn">Full Ownership</h2>
            <ToggleText
              className="font-bold" 
              regularText ="Savings "
              toggleableText="Current value of future savings accumulated up until retirement age. For model assumptions check the FAQs."
            />
            <p className=""><div className="results-number">£{result.TO_liquid ? formatNumber(result.TO_liquid.toFixed(0)) : '0'}</div> </p>
            <ToggleText
              className="font-bold" 
              regularText ="Housing wealth "
              toggleableText="Current value of future housing wealth accumulated up until retirement age. For model assumptions check the FAQs."
            />
            <p className=""><div className="results-number">£{result.TO_housing ? formatNumber(result.TO_housing.toFixed(0)) : '0'}</div></p>
          </div>
          <div className="lifetime-2ndcol std-2ndcol">
            <h2 className="results-sharedOwn">Shared Ownership</h2>
            <p className="text-xl font-bold text-white">
              You do not qualify for Shared Ownership with your current income.
            </p>
          </div>
        </div>
      ) : result.SO_housing === 0 ? (
        <div className="lifetime-2cols-wrapper std-2cols-wrapper">
          <div className="lifetime-1stcol std-1stcol">
            <h2 className="results-fullOwn">Full Ownership</h2>
            <ToggleText
              className="font-bold" 
              regularText ="Savings "
              toggleableText="Current value of future savings accumulated up until retirement age. For model assumptions check the FAQs."
            />
            <p className=""><div className="results-number">£{result.TO_liquid ? formatNumber(result.TO_liquid.toFixed(0)) : '0'}</div> </p>
            <ToggleText
              className="font-bold" 
              regularText ="Housing wealth "
              toggleableText="Current value of future housing wealth accumulated up until retirement age. For model assumptions check the FAQs."
            />
            <p className=""><div className="results-number">£{result.TO_housing ? formatNumber(result.TO_housing.toFixed(0)) : '0'}</div></p>
          </div>
          <div className="lifetime-2ndcol std-2ndcol">
            <h2 className="results-sharedOwn">Shared Ownership</h2>
            <p className="text-xl font-bold text-white">
              You cannot afford to staircase to 100% through Shared Ownership with the current inputs.
            </p>
          </div>
        </div>
      ) : (
        <div className="lifetime-2cols-wrapper std-2cols-wrapper">
          <div className="lifetime-1stcol std-1stcol">
            <h2 className="results-fullOwn">Full Ownership</h2>
            <ToggleText
              className="font-bold" 
              regularText ="Savings "
              toggleableText="Current value of future savings accumulated up until retirement age. For model assumptions check the FAQs."
            />
            <p className=""><div className="results-number">£{result.TO_liquid ? formatNumber(result.TO_liquid.toFixed(0)) : '0'}</div> </p>
            <ToggleText
              className="font-bold" 
              regularText ="Housing wealth "
              toggleableText="Current value of future housing wealth accumulated up until retirement age. For model assumptions check the FAQs."
            />
            <p className=""><div className="results-number">£{result.TO_housing ? formatNumber(result.TO_housing.toFixed(0)) : '0'}</div></p>
          </div>
          <div className="lifetime-2ndcol std-2ndcol">
            <h2 className="results-sharedOwn">Shared Ownership</h2>
            <ToggleText
              className="font-bold" 
              regularText ="Savings "
              toggleableText="Current value of future savings accumulated up until retirement age. For model assumptions check the FAQs."
            />
            <p className=""><div className="results-number">£{result.SO_liquid ? formatNumber(result.SO_liquid.toFixed(0)) : '0'}</div> </p>
            <ToggleText
              className="font-bold" 
              regularText ="Housing wealth "
              toggleableText="Current value of future housing wealth accumulated up until retirement age. For model assumptions check the FAQs."
            />
            <p className=""><div className="results-number">£{result.SO_housing ? formatNumber(result.SO_housing.toFixed(0)) : '0'}</div></p>
          </div>
        </div>
      )}
      {(result.TO_housing > 0 || result.SO_housing > 0) && (
        <div className="charts">
          <div id="comp" className="mb-2"  >  
          {isMobileScreen() ? (
              <div>{rendercompchartmob()}</div>
            ) : (
              <div>{rendercompchart()}</div>
            )}
          </div>
        </div>
      )}
      {(result.TO_housing > 0 || result.SO_housing > 0) && (
        <div className="charts">
          <div id="comp" className="mb-2"  >
          {isMobileScreen() ? (
              <div>{rendercomphchartmob()}</div>
            ) : (
              <div>{rendercomphchart()}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const rendermortgageRep = () => {
  const isMobileScreen = () => {
    return window.innerWidth < 500;
  };
  if (result.TO_housing === 0 && result.SO_housing === 0) {
    return (
      <div className="text-center my-4"></div>
    );
  }
  return (
    <div className="text-white lifetime-wrapper std-wrapper">
      {result.TO_housing === 0 ? (
        <div className="mortgage-2cols-wrapper std-2cols-wrapper">
          <div className="mortgage-1stcol std-1stcol">
            <h2 className="results-fullOwn">Full Ownership</h2>
            <p>You cannot afford full ownership. You can change above inputs, i.e., lower the price of the home, vary income, to see when you can afford full ownership.</p>
          </div>
          <div className="mortgage-2ndcol std-2ndcol">
            <h2 className="results-sharedOwn">Shared Ownership</h2>
            <p className="font-bold">You will be mortgage free {result.SO_mortgage_finish < 1 ? '' : 'by the age of'}
              <ToggleText
                className="font-bold" 
                regularText =" "
                toggleableText="Assuming all savings are used to make repayments. For further model assumptions check the FAQs."
              />
              {result.SO_mortgage_finish < 1 ? (<div className="results-number mb-3">now</div>) : 
              (<div className="results-number mb-3">{result.SO_mortgage_finish ? formatNumber(result.SO_mortgage_finish.toFixed(0)) : "0"}</div>)}
            </p>
          </div>
        </div>
      ) : result.income >= incomeThreshold  ? (
        <div className="mortgage-2cols-wrapper std-2cols-wrapper">
          <div className="mortgage-1stcol std-1stcol">
            <h2 className="results-fullOwn">Full Ownership</h2>
            <p className="font-bold">You will be mortgage free {result.TO_finish < 1 ? '' : 'by the age of'}
              <ToggleText
                className="font-bold" 
                regularText =" "
                toggleableText="Assuming you use all your savings to make prepayments."
              />
              {result.TO_finish < 1 ? (<div className="results-number">now</div>) : 
              (<div className="results-number mb-3">{result.TO_finish ? formatNumber(result.TO_finish.toFixed(0)) : "0"}</div>)}
            </p>
          </div>
          <div className="mortgage-2ndcol std-2ndcol">
            <h2 className="results-sharedOwn">Shared Ownership</h2>
            <p className="text-xl font-bold text-white">
              You do not qualify for Shared Ownership with your current income.
            </p>
          </div>
        </div>
      ) : result.SO_housing === 0 ? (
        <div className="mortgage-2cols-wrapper std-2cols-wrapper">
          <div className="mortgage-1stcol std-1stcol">
            <h2 className="results-fullOwn">Full Ownership</h2>
            <p className="font-bold">You will be mortgage free {result.TO_finish < 1 ? '' : 'by the age of'}
              <ToggleText
                className="font-bold" 
                regularText =" "
                toggleableText="Assuming you use all your savings to make prepayments."
              />
              {result.TO_finish < 1 ? (<div className="results-number">now</div>) : 
              (<div className="results-number mb-3">{result.TO_finish ? formatNumber(result.TO_finish.toFixed(0)) : "0"}</div>)}
            </p>
          </div>
          <div className="mortgage-2ndcol std-2ndcol">
            <h2 className="results-sharedOwn">Shared Ownership</h2>
            <p className="text-xl font-bold text-white">
              You cannot afford to staircase to 100% through Shared Ownership with the current inputs.
            </p>
          </div>
        </div>
      ) : (
        <div className="text-white mortgage-wrapper std-wrapper">
          <div><h1 className="font-bold">Mortgage Repayment</h1></div>
          <div className="mortgage-2cols-wrapper std-2cols-wrapper">
            <div className="mortgage-1stcol std-1stcol">
              <h2 className="results-fullOwn">Full Ownership</h2>
              <p className="font-bold mb-3">You will be mortgage free {result.TO_finish < 1 ? '' : 'by the age of'}
                <ToggleText
                  className="font-bold" 
                  regularText =" "
                  toggleableText="Assuming you use all your savings to make prepayments."
                />
                {result.TO_finish < 1 ? (<div className="results-number">now</div>) : 
                (<div className="results-number mb-3">{result.TO_finish ? formatNumber(result.TO_finish.toFixed(0)) : "0"}</div>)}
              </p>
            </div>
            <div className="mortgage-2ndcol std-2ndcol">
              <h2 className="results-sharedOwn">Shared Ownership</h2>
              <p className="font-bold mb-3">You will be mortgage free {result.SO_mortgage_finish < 1 ? '' : 'by the age of'}
                <ToggleText
                  className="font-bold" 
                  regularText =" "
                  toggleableText="Assuming all savings are used to make repayments. For further model assumptions check the FAQs."
                />
                {result.SO_mortgage_finish < 1 ? (<div className="results-number">now</div>) : 
                (<div className="results-number mb-3">{result.SO_mortgage_finish ? formatNumber(result.SO_mortgage_finish.toFixed(0)) : "0"}</div>)}
              </p>
            </div>
          </div>
        </div>
      )}
      {(result.TO_housing > 0 || result.SO_housing > 0) && (
        <div className="charts">
          <div id="loan" className="mb-2"  >
            {isMobileScreen() ? (
              <div>{renderloanchartmob()}</div>
            ) : (
              <div>{renderloanchart()}</div>
            )}
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
                The calculator will determine the earliest time you can buy on the open market.
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


console.log("TO_age", result.TO_age);
console.log("TO_time", result.TO_time);
console.log("TO_finish", result.TO_finish);
console.log("TO_liquid", result.TO_liquid);
console.log("TO_housing", result.TO_housing,);
console.log("TO_deposit", result.TO_deposit);
console.log("TO_mortgage", result.TO_mortgage);
console.log("SO_start_age", result.SO_start_age,);
console.log("SO_time", result.SO_time);
console.log("SO_staircase_finish", result.SO_staircase_finish);
console.log("SO_mortgage_finish", result.SO_mortgage_finish);
console.log("SO_liquid", result.SO_liquid);
console.log("SO_housing", result.SO_housing);
console.log("SO_deposit", result.SO_deposit);
console.log("SO_mortgage", result.SO_mortgage);
console.log("SO_share", result.SO_share);
console.log("Postcode", result.postcode);



return (
<div className="main-results-container">
  <div id="results" className="bg-slate-800 py-20 text-white results-wrapper">
    <div className="results-container">
      {renderTwoColumnsText()}
      {renderstaircasing()}
      {renderlifetimeWealth()}
      {rendermortgageRep()}
      {renderScenariosExplained()}
    </div>
  </div>
</div>

  );
}


Results.propTypes = {
  result: PropTypes.object,
};

export default Results;