import PropTypes from "prop-types";
import { Bar, Line } from 'react-chartjs-2';
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
  if (!result) {
    return <p>Loading data...</p>;
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
          label: 'Outstanding Loan Balance (£)',
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
            text: 'Outstanding Loan Balance',
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
          },
        }
      }
    };
    return <Line data={data} options={options} />;
  };
  

  // React component with two columns of styled text
const renderTwoColumnsText = () => {
  return (
    <div className="flex justify-center my-8 text-white">
      <div className="flex-grow px-6" style={{ maxWidth: '80%' }}>
        <div className="flex justify-between space-x-4">
          <div className="w-1/2 text-left">
            {/* Column 1 */}
            <h2 className="text-2xl font-bold mb-4">Full ownership</h2>
            <p className="font-bold mb-2">Deposit</p>
            <p className="text-lg italic mb-2">£{result.TO_deposit ? result.TO_deposit.toFixed(0) : 'N/A'}</p>
            <p>5% of home value.</p>
            <p className="italic mb-2">You can afford the deposit in {result.TO_time ? result.TO_time.toFixed(0) : 'N/A'} years</p>
            {/*<p className="font-bold mb-2">Monthly costs</p>
             <p className="text-xl italic mb-2">£1,500</p>
            <p>Mortgage payment (assuming repayment for 30 years)</p>*/}
            <p className="font-bold mb-2">Lifetime wealth</p>
            <p className="font-bold mb-2">By retirement age, you would have</p>
            <p className="text-xl font-bold">£{result.TO_housing ? result.TO_housing.toFixed(0) : 'N/A'} in housing wealth</p>
            <p className="text-xl font-bold mb-2">£{result.TO_liquid ? result.TO_liquid.toFixed(0) : 'N/A'} in savings</p>
            <p className="mb-2">If you wait to buy on the open market and do not use shared ownership you will accrue this savings over your life time, which is what they will be worth it in current money. Current wealth estimate (inflation adjusted) given assumed house price appreciation of 5% and current mortgage rate of 4%. <a href="#comp" className="text-blue-500 hover:underline mb-4 inline-block">See here your lifetime wealth over time</a></p>
            <p className="font-bold mb-2">Repayment structure</p>
            <p>Mortgage free by the age of {result.TO_finish ? result.TO_finish.toFixed(0) : 'N/A'}</p>
            <p>Assuming you use all your savings to make prepayments.</p>
          </div>
          <div className="w-1/2 text-left">




            {/* Column 2 */}
            <h2 className="text-2xl font-bold mb-4">Shared Ownership</h2>
            <p className="font-bold mb-2">Deposit</p>
            <p className="text-lg italic mb-2">£{result.SO_deposit ? result.SO_deposit.toFixed(0) : 'N/A'}</p>
            <p>5% of the minimum equity share (25% x home value) </p>
            <p className="font-bold mb-2"> You can afford the deposit in {result.SO_time ? result.SO_time.toFixed(0) : 'N/A'} years</p>
            <p className="font-bold mb-2">100% Ownership</p>
            <p className="text-xl mb-2">Staircase to 100% ownership by the age of {result.SO_staircase_finish ? result.SO_staircase_finish.toFixed(0) : 'N/A'}</p>
            <p className="text-rg mb-2">(assuming you use all your savings to staircase)</p>
            <a href="#staircasing" className="text-blue-500 hover:underline mb-4 inline-block">See here how you can staircase over time</a>
            {/*<p className="font-bold">Monthly costs</p>
            <p className="italic">£1,200</p>
            <p>Includes mortgage payment (assuming repayment for 30 years), rent and service charge, and no staircasing.</p>*/}
            <p className="font-bold mb-2">Lifetime wealth</p>
            <p>By retirement age, you would have</p>
            <p className="text-xl font-bold">£{result.SO_housing ? result.SO_housing.toFixed(0) : 'N/A'} in housing wealth</p>
            <p className="text-xl font-bold mb-2">£{result.SO_liquid ? result.SO_liquid.toFixed(0) : 'N/A'} in savings</p>
            <p className="mb-2">If you wait to buy on the open market and do not use shared ownership you will accrue this savings over your life time, which is what they will be worth it in current money. Current wealth estimate (inflation adjusted) given assumed house price appreciation of 5% and current mortgage rate of 4%. <a href="#comp" className="text-blue-500 hover:underline">See here your lifetime wealth over time</a></p>
            <p className="font-bold">Repayment structure</p>
            <p>Mortgage free by the age of {result.SO_mortgage_finish ? result.SO_mortgage_finish.toFixed(0) : 'N/A'}</p>
            <p>Assuming you use all your savings to make prepayments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


return (
  <div className="bg-slate-800 py-20 text-white">
    {renderTwoColumnsText()}
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
        <div className="flex justify-center gap-4" style={{ height: '400px' }}>
          <div id="staircasing" className="w-2/3 md:w-full px-4">
            {renderstairchart()}
          </div>
          <div id="loan" className="w-2/3 md:w-full px-4" style={{ height: '400px' }}>
            {renderloanchart()}
          </div>
        </div>
        {/* Second row for the third chart */}
        <div className="flex justify-center">
          <div id="comp" className="w-1/7 md:w-1/2 px-4" style={{ height: '400px' }}>
            {rendercompchart()}
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
