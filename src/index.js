/* eslint no-unused-vars: "off" */
/* eslint-disable react/no-deprecated */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import App from "./App.js";
import Blog from "./Pages/Blog.js";
import Vid from "./Pages/Vid.js"
import TCs from "./Pages/TCs.js"
import FAQs from "./Pages/FAQs.js"
import CookiesDoc from "./Pages/CookiesDoc.js"
import reportWebVitals from "./reportWebVitals";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          {" "}
        </Route>
        <Route path="/blog" element={<Blog />}>
          {" "}
        </Route>
        <Route path="/vid" element={<Vid />}>
          {" "}
        </Route>
        <Route path="/TCs" element={<TCs />}>
        {" "}
        </Route>
        <Route path="/FAQs" element={<FAQs />}>
        {" "}
        </Route>
        <Route path="/CookiesDoc" element={<CookiesDoc />}>
        {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
