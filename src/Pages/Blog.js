import React from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";


function Blog() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 h-full flex justify-center items-start translate-y-100">
        <div className="text-white p-4 w-2/3" style={{ width: "60%" }}> 
          <h1 className="text-2xl font-bold mb-4">More Information </h1>
            <p className="text-base mb-7 italic" style={{ paddingLeft: '30px' }}>The lifetime calculator is based on an EPSRC-UCL research funded project. The underlying calculator is developed by academics at UCL and Durham University and is free of charge. It is not for commercial use and does not provide financial advice. ®</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}>
              If you want to find out more about shared ownership, you can read the report by main author, UCL’s professor Stanimira Miicheva, and main contact person for this website. The key findings of the report are summarised below.
              <br /> {/* New line */}
              <a href="https://discovery.ucl.ac.uk/id/eprint/10183951/1/so_market_ucl.pdf" 
                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                target="_blank" 
                rel="noopener noreferrer"> 
                Find the report here
              </a>
            </p>
          <h1 className="text-2xl font-bold mb-4">The Maturing Shared Ownership Market: A Data-Led Analysis - Milcheva S., Damianov D., Williams P. </h1>
          <h2 className="text-xl font-bold mt-4 mb-2">Executive Summary</h2>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • This study synthesizes current public and private data sources to provide an overview of the Shared Ownership (SO) market from 2012 to 2022.</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • We obtained proprietary granular data in various dimensions, including detailed administrative data from seven major registered providers (RPs) representing 10-13% of the total SO stock. We also analyzed SO loan level data and key mortgage indicators.</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • The research focuses on indicators such as the SO mortgage market, rent arrears, repossessions, and staircasing, alongside general SO market dynamics.</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • Since the Affordable Homes Programme (AHP) 2016-21, SO starts per year have been rapidly increasing, averaging about 18,000-23,000. This contributes between 6-11% to the total supply of new housing stock depending on the region, with the highest supply in London and the South East.</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • The proportion of grant-funded SO homes out of total SO homes has substantially shifted over time, ranging from 67% in 2014-15 to between 25% and 43% for 2015-22.</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • The average share in a SO property being purchased is around 40% and is worth about £110,000, with a mortgage amount of £90,000. The average rent payable by a SO owner ranges between £300 and £400 per month.</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • SO mortgages are half the size of those of a conventional mortgage. SO buyers typically have about half the income of open-market buyers and are, in general, not able to afford a property on the open market in the same location. This makes SO the main gateway to home ownership for households on incomes between £30,000-47,000, who otherwise would not have been able to access the mortgage market.</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • Initially, when no staircasing is assumed, monthly housing costs of SO are lower than home ownership with a mortgage or renting on the open market, subject to certain assumptions outlined in the report.</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • In terms of staircasing, public data is available only for staircasing ratios to 100% which however often captures back-to-back sales. The 100% staircasing ratio is therefore not a good enough indication of affordability of the share. We provide unique insights into partial staircasing ratios, which are substantially lower (less than 1%) as compared to 100% staircasing (ca. 2%).</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • Over the last 7 years, the value of the staircased share has increased by 60% reflecting higher house prices, which carries the implications that SO is becoming less affordable.</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • Our findings suggest that while buying a more expensive SO property or locating in a more expensive area is associated with less affordability and a smaller staircasing share, SO residents respond positively to rising house prices.</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • The mortgage market for SO loans is small and concentrated among a limited number of lenders. Lenders to SO homes are covered by the Mortgage Protection Clause (MPC) in the SO lease reducing their exposure to credit risk and shifting costs of repossession to the RPs.</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • Overall, we do not find that lenders differentiate SO mortgages from conventional mortgages beyond the loan-to-value (LTV) ratio. LTV ratios for SO loans are around 80-90% of the value of the share purchased, which is 5-13 percentage points higher than for conventional mortgages.</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • Struggling SO owners first stop paying rent before they go in mortgage default. The lender will normally agree to set up a capitalisation arrangement with the RP to cover rent arrears until the SO owner is able to resume making rental payments.</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • Between 2013 and 2018, the share of monthly rent arrears out of total rent roll has been fairly steady at ca. 2%. With the onset of the Covid-19 pandemic, we have seen the share doubling.</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • Rent arrears are often of a technical nature with median monthly values around £100-150. The share of SO tenants in monthly rent arrears higher than £400 can be as high as an average of 11% increasing in the last two years following the Covid pandemic.</p>
            <p className="text-base mb-7" style={{ paddingLeft: '30px' }}> • Repossessions happen in less than 1% of total stock between 2009 and 2019 and clearly remain a last resort resolution.</p>
            <p className="text-base mb-7">For more information get in touch with Stani at s.milcheva@ucl.ac.uk.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
