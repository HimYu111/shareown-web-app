import React from 'react';
import Cookies from 'js-cookie';

function CookieConsent() {
  console.log(Boolean(Cookies.get('consent')))
  const [showCookieBanner, setShowCookieBanner] = React.useState(!Boolean(Cookies.get('consent')))

  const giveConsent = () => {
    Cookies.set('consent', 'true', { expires: 1 });
    setShowCookieBanner(false)
  };
/*
  const rejectConsent = () => {
    Cookies.set('consent', 'false', { expires: 1 });
    setShowCookieBanner(false)
  }
*/

  if (!showCookieBanner) {
    return null;
  }

  return (
    <div className='banner-wrapper'>
    <div className='banner banner-text'><p><p>Please not that we use cookies to gather the session id and the numbers you input in order to further our research.</p></p><div className='banner-buttons-wrapper'><button className='banner-accept' onClick={giveConsent}>Accept Cookies</button></div></div>
    </div>
  );
}

export default CookieConsent;
