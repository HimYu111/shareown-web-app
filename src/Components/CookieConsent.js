import React from 'react';
import Cookies from 'js-cookie';

function CookieConsent() {
  console.log(Boolean(Cookies.get('consent')))
  const [showCookieBanner, setShowCookieBanner] = React.useState(!Boolean(Cookies.get('consent')))

  const giveConsent = () => {
    Cookies.set('consent', 'true', { expires: 365 });
    setShowCookieBanner(false)
  };

  const rejectConsent = () => {
    Cookies.set('consent', 'false', { expires: 365 });
    setShowCookieBanner(false)
  }


  if (!showCookieBanner) {
    return null;
  }

  return (
    <div className='banner'><p><p>We use cookies to gather only your inputs and session ids in order to further our research. If you decline, you will still be able to access the calculator and all it's functionality.</p></p><button onClick={giveConsent}>Accept Cookies</button> <button onClick={rejectConsent}>Reject Cookies</button></div>
  );
}

export default CookieConsent;
