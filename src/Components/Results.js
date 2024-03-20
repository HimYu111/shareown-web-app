import React, { useEffect } from "react"; // Keep this as you're using useEffect
import PropTypes from "prop-types"; // Import once
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

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
  useEffect(() => {
    if (result && typeof result === "object") {
      console.log("Results log:", {
        TO_age: result.TO_age,
        TO_time: result.TO_time,
        TO_finish: result.TO_finish,
        TO_liquid: result.TO_liquid,
        TO_housing: result.TO_housing,
        SO_start_age: result.SO_start_age,
        SO_time: result.SO_time,
        SO_staircase_finish: result.SO_staircase_finish,
        SO_mortgage_finish: result.SO_mortgage_finish,
        SO_liquid: result.SO_liquid,
        SO_housing: result.SO_housing,

        age_at_time_data: result.age_at_time_data,
        staircasing_data: result.staircasing_data,
        mortgage_data: result.mortgage_data,
        TO_wealth_data: result.TO_wealth_data,
        SO_wealth_data: result.SO_wealth_data 
      });
    }
  }, [result]);

  //const age_at_time_data = result.age_at_time_data ? JSON.parse(result.age_at_time_data) : [];
  //const staircasing_data = result.staircasing_data ? JSON.parse(result.staircasing_data) : [];
  //const mortgage_data = result.mortgage_data ? JSON.parse(result.mortgage_data) : [];
  //const TO_wealth_data = result.TO_wealth_data ? JSON.parse(result.TO_wealth_data) : [];
  //const SO_wealth_data = result.SO_wealth_data ? JSON.parse(result.SO_wealth_data) : [];


  const hasResults =
    result &&
    typeof result === "object" &&
    "TO_age" in result &&
    "TO_time" in result &&
    "TO_finish" in result &&
    "TO_liquid" in result &&
    "TO_housing" in result &&
    "SO_start_age" in result &&
    "SO_time" in result &&
    "SO_staircase_finish" in result &&
    "SO_mortgage_finish" in result &&
    "SO_liquid" in result &&
    "SO_housing" in result &&
    "age_at_time_data" in result &&
    "staircasing_data" in result &&
    "mortgage_data" in result &&
    "TO_wealth_data" in result &&
    "SO_wealth_data" in result 
    ;

  const hasError = result && typeof result === "object" && "error" in result;

  const ageLabels = result.age_at_time_data.map(data => `Age ${data.age}`);
  
  const staircasingDataset = {
    labels: ageLabels,
    datasets: [{
      label: 'Staircasing Data',
      data: result.staircasing_data,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    }],
  };

  const mortgageDataset = {
    labels: ageLabels,
    datasets: [{
      label: 'Mortgage Data',
      data: result.mortgage_data,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }],
  };

  const wealthDataset = {
    labels: ageLabels,
    datasets: [
      {
        label: 'TO Wealth Data',
        data: TO_wealth_data.map(data => data.value), // Ensuring `.value` is correctly accessed
        borderColor: 'rgba(255, 206, 86, 0.5)',
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        fill: false,
      },
      {
        label: 'SO Wealth Data',
        data: SO_wealth_data.map(data => data.value), // Ensuring `.value` is correctly accessed
        borderColor: 'rgba(75, 192, 192, 0.5)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        fill: false,
      }
    ],
  };

  return (
    <div className="bg-slate-800 py-20">
      <div className="text-white" id="results">
        <p className="text-xl mb-4">
        You can afford to buy your first home at the age of {result.TO_age ? result.TO_age.toFixed(0) : 'N/A'} years old. </p>
        <p className="text-xl mb-4">
        This means you can buy in {result.TO_time ? result.TO_time.toFixed(0) : 'N/A'} years. </p>
        <p className="text-xl mb-4">
        However, you can buy a Shared Ownership home at the age of {result.SO_age ? result.SO_age.toFixed(0) : 'N/A'} (this is assuming a minimum share of 25%).</p> 
        <p className="text-xl mb-4">
        This means, you can afford to buy Shared Ownership {result.SO_time ? result.SO_time.toFixed(0) : 'N/A'} years from now. 
        </p>
        </div>

        <div className="text-white" id="results">
        <p className="text-xl mb-4">
        Shared ownership is a scheme designed to help individuals afford homeownership by purchasing an initial share of 25% to 75% of a home and paying reduced rent on the remainder. </p>
        <p className="text-xl mb-4">
        This option allows buyers with limited savings to get onto the property ladder by offering the flexibility to buy additional shares, </p>
        <p className="text-xl mb-4">
        through a process known as ‘staircasing,’ towards full ownership as their financial situation improves. </p>
        <p className="text-xl mb-4">
        It provides an accessible path to homeownership, accommodating various personal circumstances and market conditions, and is supported by the ability to secure mortgage loans similarly to outright purchases. </p>
        <p className="text-xl mb-4">
        Our calculator tools assess the benefits of shared ownership compared to traditional homeownership, aiding families in managing their lifetime wealth.</p>
        <p className="text-xl mb-4">
        If you decide to buy a Shared Ownership property you will be able to staircase to full ownership by the age of  {result.SO_staircase_finish ? result.SO_staircase_finish.toFixed(0) : 'N/A'}. </p>
        <p className="text-xl mb-4">
        Below is a graph of the staircasing shares year by year.</p>
        </div>
        
        <Bar data={staircasingDataset} />

        <div className="text-white" id="results">
        <p className="text-xl mb-4">
        Given your deposit is 5% of your house value, you will need to get a mortgage of XYZ. </p>
        <p className="text-xl mb-4">
        Assuming an interest rate of 3%, a mortgage rate of 4% and a above staircasing behaviour, you will be able to repay your Shared Ownership mortgage by the age of {result.SO_mortgage_finish ? result.SO_mortgage_finish.toFixed(0) : 'N/A'}. </p>
        <p className="text-xl mb-4">
        Below is a graph on the outstanding loan balance.</p>
        </div>
        <Bar data={mortgageDataset} />
        
        <div className="text-white" id="results">
        <p className="text-xl mb-4">
        However, if you decide not to buy a Shared Ownership property and wait until you are able to buy on the open market, you will only be able to repay your mortgage by the age of {result.TO_finish ? result.TO_finish.toFixed(0) : 'N/A'}. </p>
        <p className="text-xl mb-4">
        The benefit of Shared Ownership is that you will accrue more non-housing wealth (through savings) up until you retire (at the age of 67). </p>
        <p className="text-xl mb-4">
        The current value of your non-housing wealth will be {result.SO_liquid ? result.SO_liquid.toFixed(0) : 'N/A'} if you were to buy the Shared Ownership property (and staircased in the suggested way). </p>
        <p className="text-xl mb-4">
        In comparison, the current value of your non-housing wealth if you were to wait until you could buy on the open market will be only {result.TO_liquid ? result.TO_liquid.toFixed(0) : 'N/A'}. </p>
        <p className="text-xl mb-4">
        See the graph below for comparison of the current value of non-housing wealth between Shared Ownership and open market purchase over time. </p>
        <Line data={wealthDataset} />
        </div>

      <div>
      <p className="text-xl mb-4">
        Please note that above calculations are based on a model designed by UCL and University of Durham academics and contains a number of 
        <span className="tooltip"> assumptions
          <span className="tooltiptext">
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
        and is only indicative but is not financial advice.
      </p>
    </div>
    </div>
    );
  }

Results.propTypes = {
  result: PropTypes.object,
};

export default Results;