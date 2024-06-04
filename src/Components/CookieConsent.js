import React from 'react';
import Cookies from 'js-cookie';

function CookieConsent() {
  console.log(Boolean(Cookies.get('consent')))
  const [showCookieBanner, setShowCookieBanner] = React.useState(!Boolean(Cookies.get('consent')))

  const giveConsent = () => {
    Cookies.set('consent', 'true', { expires: 1 });
    setShowCookieBanner(false)
  };

  const rejectConsent = () => {
    Cookies.set('consent', 'false', { expires: 1 });
    setShowCookieBanner(false)
  }


  if (!showCookieBanner) {
    return null;
  }

  return (
    <div className='banner-wrapper'>
    <div className='banner banner-text'><p><p>We use cookies to gather only your inputs and session ids in order to further our research. If you decline, you will still be able to access the calculator and all it's functionality.</p></p><div className='banner-buttons-wrapper'><button className='banner-accept' onClick={giveConsent}>Accept Cookies</button> <button className='banner-reject' onClick={rejectConsent}>Reject Cookies</button></div></div>
    </div>
  );
}

export default CookieConsent;
