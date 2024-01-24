import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Input from "./Components/Input";
import Results from "./Components/Results";
import Question from "./Components/Question";
import Results2 from "./Components/Results2";
import Footer from "./Components/Footer";
import Scroll from "./Components/Scroll";

function App() {
  const [result, setResult] = useState();
  const [hasChosenNo, setHasChosenNo] = useState(false);

  return (
    <div className="App">
      <Scroll />
      <Navbar />
      <div className="border-x-[16px] border-white max-sm:border-0">
        <Intro />
        <Input setResult={setResult} />
        <Results result={result} />
        <Question
          hasChosenNo={hasChosenNo}
          setHasChosenNo={setHasChosenNo}
          setResult={setResult}
        />
        <Results2 hasChosenNo={hasChosenNo} result={result} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
