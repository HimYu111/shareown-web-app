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
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmailForm;
