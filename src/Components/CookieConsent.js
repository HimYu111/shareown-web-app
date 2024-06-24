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
      {/*<div className='banner banner-text' style={{ height: '33vh' }}> */}
      <div className='banner banner-text' > 
        <p>Please note that we use cookies to gather the session id and the numbers you input in order to further our research.</p>
        <div className='banner-buttons-wrapper'>
          <button className='banner-accept' onClick={giveConsent}>Accept Cookies</button>
          <button className='banner-accept'><Link to="/CookiesDoc" >Find out more</Link></button> 
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;

