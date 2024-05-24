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
    <div className='banner'><p><p>We use cookies to gather data such as session ids to improve your experience. By clicking agree, you will help us make this website more valuable as an academic tool.</p></p><button onClick={giveConsent}>Accept Cookies</button> <button onClick={rejectConsent}>Reject Cookies</button></div>
  );
}

export default CookieConsent;
