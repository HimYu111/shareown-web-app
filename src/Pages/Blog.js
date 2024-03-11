import React from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";


function Blog() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 h-screen flex justify-center items-start translate-y-20">
        <div className="text-white p-4">
          <h1 className="text-xl font-bold mb-4">The Maturing Shared Ownership Market: A Data-Led Analysis - Milcheva S., Damianov D., Williams P. </h1>
          <h2 className="text-lg font-bold mt-4 mb-2">Understanding Shared Ownership's Journey (2012-2022)</h2>
          <p>
            For many, the dream of home ownership is a challenging goal. Shared Ownership (SO) schemes have emerged as a beacon of hope, offering an alternative path to owning a home. A recent study delving deep into the SO market from 2012 to 2022 offers illuminating insights into how this scheme has evolved and its impact on the housing market.
          </p>
          <h2 className="text-lg font-bold mt-4 mb-2">A Surge in Shared Ownership</h2>
          <p>
            The last decade has seen a significant increase in SO homes, contributing notably to the new housing stock, particularly in regions like London and the South East. Interestingly, the share of grant-funded SO homes has varied substantially over the years.
          </p>
          <h2 className="text-lg font-bold mt-4 mb-2">Financial Dynamics of Shared Ownership</h2>
          <p>
            One of the most striking findings is the financial portrait of SO buyers. With mortgages roughly half the size of conventional ones, SO buyers generally have lower incomes, typically around £30,000-47,000. This demographic is often priced out of the open market in the same locations, making SO a vital gateway to home ownership.
          </p>
          <h2 className="text-lg font-bold mt-4 mb-2">The Reality of Staircasing</h2>
          <p>
            Staircasing, the process of increasing one's share in an SO property, is often perceived as a straightforward path to full ownership. However, the study reveals that full (100%) staircasing is relatively rare and not always a reliable indicator of affordability. Partial staircasing is even less common, suggesting potential challenges in increasing ownership stakes.
          </p>
          <h2 className="text-lg font-bold mt-4 mb-2">The Rising Cost of Shared Ownership</h2>
          <p>
            Reflecting the broader housing market, the value of staircased shares has surged by 60% over seven years, implying that SO is becoming less affordable. This rise impacts the feasibility of staircasing for many, potentially limiting the growth in equity for SO residents.
          </p>
          <h2 className="text-lg font-bold mt-4 mb-2">Mortgage Market Insights</h2>
          <p>
            The SO mortgage market is small and concentrated, with a handful of lenders dominating the space. These lenders don't significantly differentiate SO mortgages from conventional ones, other than in the loan-to-value ratios.
          </p>
          <h2 className="text-lg font-bold mt-4 mb-2">Rent Arrears and Repossessions: A Closer Look</h2>
          <p>
            The study also sheds light on rent arrears and repossessions in SO properties. Rent arrears, often of a technical nature, have doubled since the onset of the Covid-19 pandemic. However, repossessions remain a rare occurrence, demonstrating that they are a last resort.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
