import React from "react";
import PropTypes from "prop-types";

function Results({ result }) {
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
    "age_at_time_data" in result;

  const hasError = result && typeof result === "object" && "error" in result;

  return (
    <div className="bg-slate-800 py-20">
      <div className="text-white" id="results">
        {hasResults ? (
          <>
            <p className="text-3xl mb-4">Results:</p>
            <table className="table-auto w-full">
              <tbody>
                <tr>
                  <td>You can afford to buy by the age of: </td>
                  <td>{result.TO_age}</td>
                </tr>
                <tr>
                  <td>You can afford to buy at the age of: </td>
                  <td>{result.TO_time}</td>
                </tr>
                <tr>
                  <td>You will be able to repay your mortgage by the age of </td>
                  <td>{result.TO_finish}</td>
                </tr>
                <tr>
                  <td>By retirement age (67), your liquid wealth would be: </td>
                  <td>{result.TO_liquid}</td>
                </tr>
                <tr>
                  <td>By retirement age (67), your housing wealth would be: </td>
                  <td>{result.TO_housing}</td>
                </tr>
                <tr>
                  <td>You can afford to buy into shared ownership by the age of: </td>
                  <td>{result.SO_start_age}</td>
                </tr>
                <tr>
                  <td>You can afford to buy your first share in a shared ownership property at the age of: </td>
                  <td>{result.SO_time}</td>
                </tr>
                <tr>
                  <td>You will be able to staircase to full ownership by the age of: </td>
                  <td>{result.SO_staircase_finish}</td>
                </tr>
                <tr>
                  <td>You will be able to repay your mortgage by the age of: </td>
                  <td>{result.SO_mortgage_finish}</td>
                </tr>
                <tr>
                  <td>By retirement age (67), your liquid wealth would be: </td>
                  <td>{result.SO_liquid}</td>
                </tr>
                <tr>
                  <td>By retirement age (67), your housing wealth would be: </td>
                  <td>{result.SO_housing}</td>
                </tr>
              </tbody>
            </table>
          </>
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
  result: PropTypes.object,
};

export default Results;
