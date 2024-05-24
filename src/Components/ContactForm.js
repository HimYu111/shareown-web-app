import React, { useState } from 'react';
import axios from 'axios';

function ContactForm({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Assuming you have an endpoint to handle the form submission
      await axios.post('https://shareown-backend.onrender.com/send-mail', { name, email, message });
      alert('Message sent!');
    } catch (error) {
      alert('Failed to send message.');
      console.error('Sending message failed:', error);
    } finally {
      setIsSubmitting(false);
      onClose(); // Close the modal/form
    }
  };

  return (
    <div className="contact-form-backdrop">
      <div className="contact-form-container">
        <button onClick={onClose} className="contact-form-close">X</button>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          </label>
          <label>Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </label>
          <label>Message:
            <textarea value={message} onChange={e => setMessage(e.target.value)} required />
          </label>
          <button type="submit" disabled={isSubmitting || !name || !email || !message}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
