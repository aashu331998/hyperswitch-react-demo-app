const fs = require("fs");

//modify server.js import
fs.readFile("./server.js", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let replacedNodePckge = data.replace(
    '"stripe"',
    '"@juspay-tech/hyperswitch-node"'
  );

  fs.writeFile("./server.js", replacedNodePckge, function (err) {
    if (err) return console.log(err);
    console.log("Replaced Stripe node to HyswitchNode");
  });
});

//modify Checkout.js import
fs.readFile("./src/Checkout.js", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let replacedNodePckge = data
    .replace('"@stripe/react-stripe-js"', '"@juspay-tech/react-hyper-js"')
    .replace('"@stripe/stripe-js"', '"@juspay-tech/hyper-js"');

  fs.writeFile("./src/Checkout.js", replacedNodePckge, function (err) {
    if (err) return console.log(err);
    console.log("Replaced node Packages in the App.jsx");
  });
});

//modify CheckoutForm.js import
fs.readFile("./src/CheckoutForm.js", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let replacedNodePckge = data.replace(
    '"@stripe/react-stripe-js"',
    '"@juspay-tech/react-hyper-js"'
  );

  fs.writeFile("./src/CheckoutForm.js", replacedNodePckge, function (err) {
    if (err) return console.log(err);
    console.log("Replaced Node packages in Checkoutform.jsx");
  });
});
