import React from "react";

function Loading() {
  return (
    <div className="loading-container">
      <h1 className="loading-text">
        Your results will be ready in a moment
      </h1>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
}

export default Loading;

