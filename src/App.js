import React, { useEffect, useState } from "react";
import "./css/App.css";
import Checkout from "./Checkout";
import Status from "./components/Status";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const [publishableKey, setPublishableKey] = useState(null);
  const [config, setConfig] = useState(null);
  const [key, setKey] = useState(false);
  let returnUrl = `${window.location.origin}/status`;

  const fetchCall = async () => {
    let response = await fetch("/config");
    let data = await response.json();
    setPublishableKey(data.publishableKey);

    let configResponse = await fetch(
      `https://4gla4dnvbg.execute-api.ap-south-1.amazonaws.com/default/hyperConfig?publishableKey=${data.publishableKey}`
    );
    let { config } = await configResponse.json();
    config && setConfig(JSON.parse(config));
    await setKey(true);
  };
  useEffect(() => {
    fetchCall();
  }, []);
  return (
    <>
      {publishableKey && key && (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Checkout
                  publishableKey={publishableKey}
                  return_url={returnUrl}
                  appearance={
                    config &&
                    config.appearanceElement &&
                    config.appearanceElement.appearance
                  }
                  options={
                    config && {
                      ...config.paymentElement,
                      wallets: {
                        walletReturnUrl: returnUrl,
                        //Mandatory parameter for Wallet Flows such as Googlepay, Paypal and Applepay
                      },
                    }
                  }
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
