import React from 'react';
import Cookies from 'js-cookie';

function CookieConsent() {
  const giveConsent = () => {
    Cookies.set('consent', 'true', { expires: 365 });
  };

  return (
    <div className="cookie-banner">
      <p>We use cookies to gather data such as session ids to improve your experience. By clicking agree, you will help us make this website more valuable as an academic tool.</p>
      <button onClick={giveConsent}>Accept Cookies</button>
    </div>
  );
}

export default CookieConsent;
