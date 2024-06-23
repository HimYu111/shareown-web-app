import React from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import { Link } from "react-router-dom";

function CookiesDoc() {
  return (
    <div>
      <Navbar />
      <div className="h-full flex justify-center items-start translate-y-100 more-secion-wrapper">
        <div className="blog-wrapper" style={{ paddingLeft: '30px' }}>
        <h1 className="text-xl font-bold text-white">Cookies Policy</h1>
          <p>
            ShareOwn.info uses cookies. In order to deliver a personalised, responsive service and to improve the site, we remember and store information about how you use it. This is done using files called cookies which are saved on your computer. These cookies are completely safe and secure and will never contain any sensitive information. They are used only by ShareOwn.info.
          </p>
          <p>
            The cookies we use are strictly necessary to:
          </p>
          <ul>
            <li>provide the service</li>
            <li>prevent fraud</li>
            <li>protect network security</li>
            <li>enable tracking of inputs (to further our academic research to understand market demand better)</li>
          </ul>
          <p>
            Cookies are also used to help you to move around our website and use its features, such as accessing secure areas of the website. Without these cookies, services you have asked for cannot be provided.
          </p>
          <p>
            When you use the ShareOwn.info website, the following 3 categories of cookies may be set on your device.
          </p>
          
          <h2 className="text-xl font-bold text-white">1. Functional Cookies</h2>
          <p>
            These cookies allow websites and applications to remember choices you make (such as your user name) and provide enhanced, more personal features. The information these cookies collect is usually anonymised which means we can't identify you personally. They do not gather any information about you that could be used for selling advertising or remembering where you've been on the internet, but do help with serving advertising.
          </p>
          
          <h2 className="text-xl font-bold text-white">2. Analytics Cookies</h2>
          <p>
            ShareOwn.info uses web analytics services to prevent fraud and help us understand how people use our website.
          </p>
          <p>
            These web analytics services may be designed and operated by other companies on our behalf. They do this using small invisible images known as "web beacons" or "tracking pixels" that may be included in our web pages. These web beacons are anonymous and do not contain or collect any information that identifies you.
          </p>
          <p>
            The web analytics services may also use cookies and similar technologies to make the information collected by the web beacons more useful. When you are viewing our website, a cookie is transferred to your browser by the web server and is stored on your computer. It can only be read by the server that gave it to you.
          </p>
          <p>
            Cookies allow web analytics services to recognise your browser or device and, for example, identify whether you have visited our website before, what you have previously viewed or clicked on, and how you found us. The information is anonymous and only used for statistical purposes. It allows us to track information, such as how many individual users we have and how often they visit our websites. It also helps us to analyse patterns of user activity and to develop a better user experience.
          </p>
          <p>
            Cookies may be set by our third party service providers which remember that you have visited a website in order to provide you with targeted adverts which are more relevant to you and your interests. This is often called online behavioural advertising (OBA) (also known as 'behavioural targeting' or 'interest based advertising') and is done by grouping together shared interests based upon previous web browsing activity. Advertising may then be displayed to you when you visit our website which matches these interests. Your previous web browsing activity can also be used to infer things about you, such as your demographics (age, gender etc.). This information may also be used to make the advertising on our website more relevant to you.
          </p>
          <p>
            Personalised retargeting is another form of OBA that enables our advertiser partners to show you adverts based on your online browsing away from our website. This allows companies to advertise to people who previously visited their website. These cookies may be set by third-party advertising networks, such as Google. A list of our main advertising network partners is set out below.
          </p>
          <p>
            Although these cookies can track your visits around the web they don't know who you are. Even if you log in to our MyHome pages, the OBA data is still not linked to your profile.
          </p>
          
          <h2 className="text-xl font-bold text-white">Managing Analytics Cookies</h2>
          <p>
            It is possible to opt out of having your anonymised browsing activity within websites recorded by analytics cookies. ShareOwn.info uses Google Analytics and you can opt out of their cookies by clicking on <a href="http://tools.google.com/dlpage/gaoptout">http://tools.google.com/dlpage/gaoptout</a>.
          </p>
          <p>
          To find more information about how Google Analytics uses information from this website you can do so by visiting <a href="https://www.google.com/policies/technologies/partner-sites/" target="_blank" rel="noopener noreferrer" style={{ color: 'lightblue' }}>https://www.google.com/policies/technologies/partner-sites/</a>.
          </p>
          <div className="menu-link" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <Link to="/" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Go to the ShareOwn Calculator</Link>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CookiesDoc;
