import React, { useState } from 'react';
import axios from 'axios';

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
      {/* Your existing result rendering code */}

      {/* Email submission form */}
      <form onSubmit={handleEmailSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Results to Email'}
        </button>
      </form>
    </div>
  );
}

export default Results;
