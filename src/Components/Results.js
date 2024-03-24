import React from 'react';
import PropTypes from 'prop-types';
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

// Registering necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

function Results({ results }) {
  if (!results) {
    // Loading state or placeholder content
    return <p>Loading data...</p>;
  }
  console.log('Results received:', results);

  // Extract and parse data if present, else default to fallback values
  const ageAtTimeData = results.age_at_time_data ? JSON.parse(results.age_at_time_data) : [];
  const staircasingData = results.staircasing_data ? JSON.parse(results.staircasing_data) : [];
  const mortgageData = results.mortgage_data ? JSON.parse(results.mortgage_data) : [];
  const TOWealthData = results.TO_wealth_data ? JSON.parse(results.TO_wealth_data) : [];
  const SOWealthData = results.SO_wealth_data ? JSON.parse(results.SO_wealth_data) : [];

  console.log(ageAtTimeData, staircasingData, mortgageData, TOWealthData, SOWealthData);

  return (
    <div className="bg-slate-800 py-20">
      <div className="text-white" id="results">
            <p className="text-xl mb-4">
            You can afford to buy your first home at the age of {results.TO_age ? results.TO_age.toFixed(0) : 'N/A'} years old. </p>
            <p className="text-xl mb-4">
            This means you can buy in {results.TO_time ? results.TO_time.toFixed(0) : 'N/A'} years. </p>
            <p className="text-xl mb-4">
            However, you can buy a Shared Ownership home at the age of {results.SO_start_age ? results.SO_start_age.toFixed(0) : 'N/A'} (this is assuming a minimum share of 25%).</p> 
            <p className="text-xl mb-4">
            This means, you can afford to buy Shared Ownership {results.SO_time ? results.SO_time.toFixed(0) : '0'} years from now. 
            </p>
            </div>

            <div className="text-white" id="results">
            <p className="text-xl mb-4">
            Shared ownership is a scheme designed to help individuals afford homeownership by purchasing an initial share of 25% to 75% of a home and paying reduced rent on the remainder. </p>
            <p className="text-xl mb-4">
            This option allows buyers with limited savings to get onto the property ladder by offering the flexibility to buy additional shares, through a process known as ‘staircasing,’ towards full ownership as their financial situation improves. </p>
            <p className="text-xl mb-4">
            It provides an accessible path to homeownership, accommodating various personal circumstances and market conditions, and is supported by the ability to secure mortgage loans similarly to outright purchases. </p>
            <p className="text-xl mb-4">
            Our calculator tools assess the benefits of shared ownership compared to traditional homeownership, aiding families in managing their lifetime wealth.</p>
            <p className="text-xl mb-4">
            If you decide to buy a Shared Ownership property you will be able to staircase to full ownership by the age of  {results.SO_staircase_finish ? results.SO_staircase_finish.toFixed(0) : 'N/A'}. </p>
            <p className="text-xl mb-4">
            Below is a graph of the staircasing shares year by year.</p>
            </div>
            <div>
            </div>
            <div className="text-white" id="results">
            <p className="text-xl mb-4">
            Given your deposit is 5% of your house value, you will need to get a mortgage of £{results.Mortgage_size ? results.Mortgage_size.toFixed(0) : 'N/A'}. </p>
            <p className="text-xl mb-4">
            Assuming an interest rate of 3%, a mortgage rate of 4% and a above staircasing behaviour, you will be able to repay your Shared Ownership mortgage by the age of {results.SO_mortgage_finish ? results.SO_mortgage_finish.toFixed(0) : 'N/A'}. </p>
            <p className="text-xl mb-4">
            Below is a graph on the outstanding loan balance.</p>
            </div>
            <div>
            </div>

            <div className="text-white" id="results">
            <p className="text-xl mb-4">
            However, if you decide not to buy a Shared Ownership property and wait until you are able to buy on the open market, you will only be able to repay your mortgage by the age of {results.TO_finish ? results.TO_finish.toFixed(0) : 'N/A'}. </p>
            <p className="text-xl mb-4">
            The benefit of Shared Ownership is that you will accrue more non-housing wealth (through savings) up until you retire (at the age of 67). </p>
            <p className="text-xl mb-4">
            The current value of your non-housing wealth will be £{results.SO_liquid ? results.SO_liquid.toFixed(0) : 'N/A'} if you were to buy the Shared Ownership property (and staircased in the suggested way). </p>
            <p className="text-xl mb-4">
            In comparison, the current value of your non-housing wealth if you were to wait until you could buy on the open market will be only £{results.TO_liquid ? results.TO_liquid.toFixed(0) : 'N/A'}. </p>
            <p className="text-xl mb-4">
            See the graph below for comparison of the current value of non-housing wealth between Shared Ownership and open market purchase over time. </p>
            </div>
            <div>
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
  results: PropTypes.object,
};

export default Results;
