import React from "react";

function Loading() {
  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen border-x-[16px] border-white">
      <div className="text-center ">
        <h1 id="loading" className="text-9xl">
          Your results will be ready in a moment
        </h1>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    </div>
  );
}

export default Loading;
