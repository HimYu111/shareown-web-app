import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import flowchart from "../Assets/flowchart.png";
import React, { useState } from 'react';


const FAQSection = () => {

  const faqs = [
    {
      question: "What is Shared Ownership",
      answer: `Shared ownership is a scheme designed to help individuals afford homeownership by purchasing an initial share of 25% to 75% of a home and paying reduced rent on the remainder.
      This option allows buyers with limited savings to get onto the property ladder by offering the flexibility to buy additional shares, through a process known as ‘staircasing,’ towards full ownership as their financial situation improves.
      It provides an accessible path to homeownership, accommodating various personal circumstances and market conditions, and is supported by the ability to secure mortgage loans similarly to outright purchases.`
    },
    {
      question: "What is staircasing?",
      answer: `Over time you can buy additional shares in your property in a process known as "staircasing." As you buy more shares you pay less rent. Attaining a 100% share will grant you full ownership of the property.`
    },
    {
      question: "Am I eligible?",
      answer: `Your annual household income must not exceed £80,000 (£90,000 in London), and you must not currently own a property.`
    },
    {
      question: "Is the calculator free to use?",
      answer: `The lifetime calculator is based on an EPSRC-UCL research funded project. The underlying calculator is developed by academics at UCL and Durham University and is free of charge. It is not for commercial use and does not provide financial advice. ®`
    },
    {
      question: "How is my tax calculated?",
      answer: (
        <div  style={{ width: '100%', textAlign: 'left' }}>
          <p>Allowance: Anything below £12,570 is not taxed.</p>
          <p>Basic Rate (20%): Applied to income from £12,571 up to £50,270.</p>
          <p>Higher Rate (40%): Applied to income from £50,271 to £125,140. Exclusive of any income under the higher threshold.</p>
          <p>Additional Rate (45%): Applied to income above £125,140. Exclusive of any income under the additional rate threshold.</p>
        </div>
      )
    },
    {
      question: "What are the model assumptions?",
      answer: (
        <div  style={{ width: '100%', textAlign: 'left' }}>
          <p>• Interest rate on deposits/savings: 3%.</p>
          <p>• Rent paid for Shared Ownership: For the first year it is 2.75% of the initial value of the home. After that it grows with the assumed inflation rate.</p>
          <p>• Service charge/House maintenance cost p.a.: 1%.</p>
          <p>• The model assumes a retirement age at 67. After that no wealth is accumulated.</p>
          <p>• Affordability constraint: We account for the income affordability constraint associated with Shared Ownership following Homes England guidelines.</p>
          <p>• Minimum initial share for Shared Ownership: 25%.</p>
          <p>• Staircasing fees for Shared Ownership: £1,000.</p>
        </div>
      )
    },
    {
      question: "How does the calculator work?",
      answer: (
        <>
          <p className="mb-4">
            <strong>Full ownership:</strong> The calculator looks ahead to see when you'll have enough money to buy a home. 
            It figures out when you've saved up for a deposit (at least 5% of the home's price) and can get a mortgage for 
            the rest. Once you own a home, the calculator assumes you'll use your savings to pay off your mortgage faster. 
            It also calculates when you might finish paying off your mortgage completely. After that, it estimates how much 
            money you'll have saved up in a savings account by the time you retire, which it assumes will be at age 67.
          </p>
          <p>
            <strong>Shared ownership:</strong> The calculator assesses affordability based on which the maximum share a household can buy is calculated. A minimum deposit of 5% of the share price is assumed. 
            Also, the household should satisfy at the same time the mortgage constraints for the calculated share to be able to buy.
            Once a shared owner, the calculator assumes the household uses all savings and matches it with additional borrowing at the 
            95% loan-to-value ratio to buy the maximum additional shares that satisfy the affordability and mortgage constraints. 
            It also calculates when the household will staircase to 100%. Finally, it estimates how much money you'll have saved in a savings account by 
            the time the household retires, which it assumes will be at age 67.
          </p>
        </>
      )
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(() => {
    const initialOpenState = {};
    faqs.forEach((_, index) => {
      initialOpenState[index] = true;
    });
    return initialOpenState;
  });



  return (
    <div className="faq-globalwrapper">
      <div className="container mx-auto faq-wrapper">
        <h1 className="faq-header">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="cursor-pointer faq-single-wrapper rounded-md p-4"
              onClick={() => setOpenFAQ({ ...openFAQ, [index]: !openFAQ[index] })}
            >
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              {openFAQ[index] && <p className="mt-2">{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


function FAQs() {
  return (
    <div>
      <Navbar />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default FAQs;