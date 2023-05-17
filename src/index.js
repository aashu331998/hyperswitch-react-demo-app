import React from "react";
import ReactDOM from "react-dom";
import "./css/App.css";
import { BrowserRouter } from "react-router-dom";
import Checkout from "./Checkout";
import Completion from "./components/Completion";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Checkout />} />
        <Route path="/completion" element={<Completion />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
