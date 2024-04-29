import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios with `npm install axios`

function EmailForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submit action
    try {
      const response = await axios.post('https://www.shareown.info/api/submit-email', { email });
      console.log('Email saved:', response.data);
      // Handle success (e.g., showing a success message)
    } catch (error) {
      console.error('Error saving email:', error);
      // Handle error (e.g., showing an error message)
    }
  };

  return (
    <div className='email-form-container'>
      <form onSubmit={handleSubmit} className='email-form'>
        <p className="prompt-text">Share your email to receive this report</p>
        <input
          type="email"
          value={email}
          className='email-input'
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button className='submit-button text-neutral' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmailForm;
