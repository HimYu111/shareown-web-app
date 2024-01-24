import React from "react";
import PropTypes from "prop-types";

function Results({ result }) {
  // Check if result is an object and has the required properties
  const hasResults =
    result &&
    typeof result === "object" &&
    "affordability_status" in result &&
    "accumulated_wealth_at_67" in result;
  const hasError = result && typeof result === "object" && "error" in result;

  return (
    <div className="bg-slate-800 py-20 ">
      <div className="text-white text-4xl  " id="results">
        {hasResults ? (
          <div>
            <p>Buying a home on the open market is currently {result.affordability_status} with your current assets</p>
            <p>
              Accumulated wealth at retirement is estimated to be £
              {result.accumulated_wealth_at_67.toFixed(0)}
            </p>
          </div>
        ) : hasError ? (
          <p>Error: {result.error}</p>
        ) : (
          <p>No results to display</p>
        )}
      </div>
    </div>
  );
}

Results.propTypes = {
  result: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object, // result can be a string or an object
  ]),
};

export default Results;
