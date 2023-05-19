import React, { useEffect, useState } from "react";
import "./css/App.css";
import Checkout from "./Checkout";
import Status from "./components/Status";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const [publishableKey, setPublishableKey] = useState(null);
  const [config, setConfig] = useState(null);

  const fetchCall = async () => {
    let response = await fetch("/config");
    let data = await response.json();
    setPublishableKey(data.publishableKey);

    let configResponse = await fetch(
      `https://4gla4dnvbg.execute-api.ap-south-1.amazonaws.com/default/hyperConfig?publishableKey=${data.publishableKey}`
    );
    let { config } = await configResponse.json();
    config && setConfig(JSON.parse(config));
  };
  useEffect(() => {
    fetchCall();
  }, []);
  return (
    <>
      {publishableKey && (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Checkout
                  publishableKey={publishableKey}
                  appearance={
                    config &&
                    config.appearanceElement &&
                    config.appearanceElement.appearance
                  }
                  options={config && config.paymentElement}
                />
              }
            />
            <Route path="/status" element={<Status />} />
          </Routes>
        </>
      )}
    </>
  );
};
export default App;
