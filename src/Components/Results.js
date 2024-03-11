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

  const age_at_time_data = result.age_at_time_data ? JSON.parse(result.age_at_time_data) : [];
  const staircasing_data = result.staircasing_data ? JSON.parse(result.staircasing_data) : [];
  const mortgage_data = result.mortgage_data ? JSON.parse(result.mortgage_data) : [];
  const TO_wealth_data = result.TO_wealth_data ? JSON.parse(result.TO_wealth_data) : [];
  const SO_wealth_data = result.SO_wealth_data ? JSON.parse(result.SO_wealth_data) : [];


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
        <p className="text-xl mb-4">Your first paragraph here.</p>
        <p className="text-xl mb-4">Your second paragraph here.</p>
        <Bar data={staircasingDataset} />
        <p className="text-xl mb-4">Your third paragraph here.</p>
        <Bar data={mortgageDataset} />
        <p className="text-xl mb-4">Your fourth paragraph here.</p>
        <Line data={wealthDataset} />
      </div>
    </div>
  );
}

Results.propTypes = {
  result: PropTypes.object,
};

export default Results;