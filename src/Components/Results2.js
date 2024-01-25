import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function Results2({ hasChosenNo, result }) {
  if (!result) {
    return <p>Loading data...</p>; // Display loading or placeholder content
  }

  const ageAtTime = result.age_at_time ? JSON.parse(result.age_at_time) : [];
  const accumulatedWealth = result.accumulated_wealth ? JSON.parse(result.accumulated_wealth) : [];
  const sharedOwnershipShare = result.shared_ownership_share ? JSON.parse(result.shared_ownership_share) : [];


  const hasResults2 = result &&
    typeof result === "object" &&
    "accumulated_wealth_at_67" in result &&
    "x" in result &&
    "house_price" in result &&
    "age_at_SO" in result &&
    "age_at_time" in result &&
    "accumulated_wealth" in result &&
    "transformed_wealth" in result &&
    "initial_share" in result &&
    "age_at_25_percent_SO" in result &&
    "shared_ownership_share" in result;
  const hasError = result && typeof result === "object" && "error" in result;

  console.log("Transformed Wealth:", result.transformed_wealth);

  const renderAccumulatedWealthChart = () => {
    const data = {
      labels: [...ageAtTime].reverse(),  // Reverse the order of the ages
      datasets: [
        {
          label: 'Accumulated Wealth at Age',
          data: [...accumulatedWealth].reverse(),  // Reverse the order of the data
          fill: false,
          borderColor: 'skyblue',
          tension: 0.1
        }
      ]
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: `Current house price: £${result.house_price.toFixed(0)} in Q1 2024`
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Age of head of household'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Accumulated wealth at age'
          }
        }
      }
    };

    return <Bar data={data} options={options} />;
  };

  const renderSharedOwnershipShareChart = () => {
    const data = {
      labels: [...ageAtTime].reverse(),  // Reverse the order of the ages
      datasets: [
        {
          label: 'Ownership Percentage (%)',
          data: [...sharedOwnershipShare].reverse(),  // Reverse the order of the data
          backgroundColor: 'blue',
          borderColor: 'blue',
          borderWidth: 1,
        }
      ]
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Shared Ownership Progression via Staircasing'
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Age'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Ownership Percentage (%)'
          }
        }
      }
    };

    return <Bar data={data} options={options} />;
  };

  return (
    <div id="results2" className="bg-gray-200">
      <div className="text-black text-3xl flex items-center justify-center h-full" id="results">
        {hasResults2 ? (
          <div>
            <p>
              Assuming a house price of £
              {result.house_price ? result.house_price.toFixed(0) : 'N/A'} as of {new Date().getFullYear()} - 
            </p>
            <br />
            <div>
              <p>
                If you carry on saving {result.x ? result.x : 'N/A'}% of your post tax income, you would be able to buy your first 25% of a shared ownership property at {result.age_at_25_percent_SO ? result.age_at_25_percent_SO.toFixed() : 'N/A'} and 100% of your shared ownership property when you are{" "}
                {result.age_at_SO ? result.age_at_SO.toFixed() : 'N/A'}.
              </p>
            </div>
            <br />
            <div>
              <p>
                At retirement, your accumulated wealth would be: £{result.accumulated_wealth_at_67 ? result.accumulated_wealth_at_67.toFixed(0) : 'N/A'} at 67 years of age.
              </p>
            </div>
            <br />
            <div>
              <p>
                Accounting for inflation, that is approximately £{result.transformed_wealth ? result.transformed_wealth.toFixed() : 'N/A'} currently. See graphs for wealth breakdown quarter by quarter.
              </p>
            </div>
            <br />
            {renderAccumulatedWealthChart()}
            <br />
            {renderSharedOwnershipShareChart()}
            <br />
            <p>Staircasing in shared ownership is the process of gradually increasing the ownership share of a property over time by purchasing additional percentages, thereby reducing the amount of rent paid on the remaining share.</p>
          </div>
        ) : hasError ? (
          <p>Error: {result.error}</p>
        ) : hasChosenNo ? (
          <p>You have chosen not to explore shared ownership</p>
        ) : (
          <p>No results to display</p>
        )}
      </div>
    </div>
  );
  
}

Results2.propTypes = {
  hasChosenNo: PropTypes.bool.isRequired,
  result: PropTypes.object
};

export default Results2;


