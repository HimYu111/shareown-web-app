import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

function CookieConsent() {
  console.log(Boolean(Cookies.get('consent')));
  const [showCookieBanner, setShowCookieBanner] = React.useState(!Boolean(Cookies.get('consent')));

  const giveConsent = () => {
    Cookies.set('consent', 'true', { expires: 1 });
    setShowCookieBanner(false);
  };

  if (!showCookieBanner) {
    return null;
  }

  return (
    <div className='banner-wrapper'>
      <div className='banner banner-text' style={{ height: '33vh' }}>
        <p>Please note that we use cookies to gather the session id and the numbers you input in order to further our research.</p>
        <div className='banner-buttons-wrapper'>
          <button className='banner-accept' onClick={giveConsent}>Accept Cookies</button>
          <Link to="/CookiesDoc" className="banner-accept" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center', lineHeight: 'normal' }}>Find out more</Link>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;

