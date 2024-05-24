import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Input from "./Components/Input";
import Results from "./Components/Results";
import Email from "./Components/Email";
import Footer from "./Components/Footer";
import Scroll from "./Components/Scroll";
import CookieConsent from "./Components/CookieConsent"; // Make sure the path is correct based on your project structure

function App() {
  const [result, setResult] = useState();

  return (
    <div className="App">
      <Scroll />
      <Navbar />
      <div className="border-x-[16px] border-white max-sm:border-0">
      <CookieConsent />

        <Intro />
        <Input setResult={setResult} /> {/* Pass consent status to Input */}
        <Results result={result} />
        <Email />
      </div>
      <Footer />
    </div>
  );
}

export default App;
