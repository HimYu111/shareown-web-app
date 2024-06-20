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
      answer: `The lifetime calculator is based on an EPSRC-UCL research funded project. The underlying calculator is developed by academics at UCL and Durham University and is free of charge. It is not for commercial use and do not provide financial advice. ®`
    },
    {
      question: "How is my tax calculated?",
      answer: 
        <span className="tooltiptext" style={{ width: '1500px', textAlign: 'right' }}>
          Allowance: Anything below £12,570 is not taxed. <br />
          Basic Rate (20%): Applied to income from £12,571 up to £50,270. <br />
          Higher Rate (40%): Applied to income from £50,271 to £125,140. Exclusive of any income under the higher threshold.<br />
          Additional Rate (45%): Applied to income above £125,140. Exclusive of any income under the additional rate threshold.<br />
          </span>
    },
    {
      question: "What are the model assumptions?",
      answer: 
        <span className="tooltiptext" style={{ width: '1500px', textAlign: 'right' }}>
          • Interest rate on deposits/savings: 3%. <br />
          • Inflation rate p.a.: 3%. <br />
          • Mortgage rate p.a.: 4%. <br />
          • House price appreciation p.a.: 5%. <br />
          • Market rent appreciation: 3.5%. <br />
          • Rent paid for Shared Ownership: For the first year it is 2.75% of the initial value of the home. After that it grows with the assumed inflation rate. <br />
          • Service charge/House maintenance cost p.a.: 1%. <br />
          • The model assumes a retirement age at 67. After that no wealth is accumulated. <br />
          • Loan to Value ratio for full ownership: 95% of the indicated price. <br />
          • Loan to Value ratio for Shared Ownership: 95% of the value of the maximum affordable share. <br />
          • Loan-to-income ratio: Total mortgage debt cannot exceed 4.5 times the indicated annual gross income. <br />
          • Affordability constraint: We account for the income affordability constraint associated with Shared Ownership following Homes England guidelines. <br /> 
          • Minimum initial share for Shared Ownership: 25%. <br />
          • Transaction costs: 0%.<br />
          • Staircasing fees for Shared Ownership: £1,000. <br />
          • No tax is applied below £12,570. <br />
          • The basic 20% tax rate is applied to income between £12,571 and £50,270. <br />
          • The higher 40% tax rate is applied to income between £50,271 and £125,140. <br />
          • The additional 45% tax rate is applied to income above £125,140. <br />
          </span>
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
            <strong>Shared ownership:</strong> The calculator looks ahead to see when you'll be able to buy at least a 25% 
            share of the home. This happens when you've saved enough for a deposit (at least 5% of the share you buy), and 
            can get a mortgage for the rest. Once you're a shared owner, the calculator assumes you'll use your savings and 
            borrow to buy additional shares over time (this is called "staircasing"). It then calculates when you will 
            staircase to 100%. After that, the calculator helps you pay off your mortgage faster using all your savings. 
            It will also determine the age at which you will be mortgage-free. Finally, it estimates how much money you'll 
            have saved in a savings account by the time you retire, which it assumes will be at age 67.
          </p>
          <div className="bg-white flex justify-center items-center faq-img">
          <img src={flowchart} alt="Damian Flowchart"  className="w-auto h-auto"/>
          </div>  
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
    <div>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">FAQs</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="cursor-pointer bg-gray-200 rounded-md p-4"
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