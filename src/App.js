import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Input from "./Components/Input";
import Results from "./Components/Results";
import Email from "./Components/Email";
import Footer from "./Components/Footer";
import Scroll from "./Components/Scroll";

function App() {
  const [result, setResult] = useState();
  console.log(result)
  const [hasChosenNo, setHasChosenNo] = useState(false);

  return (
    <div className="App">
      <Scroll />
      <Navbar />
      <div className="main">
        <Intro />
        <Input setResult={setResult} />
        <Results result={result} />
        <Email />
      </div>
      <Footer />
    </div>
  );
}

export default App;
