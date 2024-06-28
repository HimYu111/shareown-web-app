import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


function Results({ result }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post('https://shareown-backend.onrender.com/submit-results-email', {
        email,
        result, // This assumes 'result' contains the data you want to email
      });
      alert('Results sent to your email!');
    } catch (error) {
      console.error('Error sending results:', error);
      alert('Failed to send results.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
    <div className="bg-slate-800 py-20 text-white results-wrapper">
      <div className='email-container'>
      <div className='email-wrapper'>
        <div className="grapics-note">
          <p>Enter your email below to get your results sent to you.</p>
        </div>
        {/* Email Form Container */}
        <div className="email-form-container">
          <form onSubmit={handleEmailSubmit} className="email-form">
            <input
              className="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button text-neutral"
            >
              {isSubmitting ? "Sending..." : "Send Results to Email"}
            </button>
          </form>
        </div>
      </div>

        <span className="tooltip text-blue-500 hover:underline">
          <span className="tooltiptext" style={{ width: "1500px" }}>
            • Interest rate on deposits/savings: 3%. <br />
            • Inflation rate p.a.: 3%. <br />
            • Mortgage rate p.a.: 4%. <br />
            • House price appreciation p.a.: 5%. <br />
            • Market rent appreciation: 3.5%. <br />
            • Rent paid for Shared Ownership: For the first year it is 2.75%
            of the initial value of the home. After that it grows with the
            assumed inflation rate. <br />
            • Service charge/House maintenance cost p.a.: 1%. <br />
            • The model assumes a retirement age at 67. After that no wealth
            is accumulated. <br />
            • Loan to Value ratio for full ownership: 95% of the indicated
            price. <br />
            • Loan to Value ratio for Shared Ownership: 95% of the value of
            the maximum affordable share. <br />
            • Loan-to-income ratio: Total mortgage debt cannot exceed 4.5
            times the indicated annual gross income. <br />
            • Affordability constraint: We account for the income
            affordability constraint associated with Shared Ownership
            following Homes England guidelines. <br />
            • Minimum initial share for Shared Ownership: 25%. <br />
            • Transaction costs: 0%.<br />
            • Staircasing fees for Shared Ownership: £1,000. <br />
            • No tax is applied below £12,570. <br />
            • The basic 20% tax rate is applied to income between £12,571
            and £50,270. <br />
            • The higher 40% tax rate is applied to income between £50,271
            and £125,140. <br />
            • The additional 45% tax rate is applied to income above
            £125,140. <br />
          </span>
        </span>
        </div>
      </div>
      <div className="prefooter-wrapper">
          <p className="grapics-note">
          Please note that the calculations are based on a model designed by professors at University College London and Durham University and
          do not provide financial advice. The model uses a range of assumptions, which can be found
          <Link to="/FAQs" className="ml-1 font-bold">here</Link>. The outputs are indicative and highly dependent on the model
          assumptions.
        </p>
        </div>
      </div>

      
  );
}

export default Results;
