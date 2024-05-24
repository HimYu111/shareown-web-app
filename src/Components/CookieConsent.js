import React from 'react';
import Cookies from 'js-cookie';

function CookieConsent() {
  const giveConsent = () => {
    Cookies.set('consent', 'true', { expires: 365 });
  };

  return (
    <div className="cookie-banner">
      <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
      <button onClick={giveConsent}>Accept Cookies</button>
    </div>
  );
}

export default CookieConsent;
