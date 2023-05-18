const express = require("express");
const app = express();
const { resolve } = require("path");

// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });
app.use(express.static("./public"));
app.get("/", (req, res) => {
  const path = resolve("./public" + "/index.html");
  res.sendFile(path);
});

// replace the test api key with your hyperswitch api key
const hyper = require("@juspay-tech/hyperswitch-node")(
  "snd_9d552d20e1f0411e8c9c45193cdc0677"
);

app.post("/create-payment", async (req, res) => {
  try {
    const paymentIntent = await hyper.paymentIntents.create({
      currency: "USD",
      amount: 369999,
      authentication_type: "no_three_ds",
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    return res.status(400).send({
      error: {
        message: err.message,
      },
    });
  }
});

app.listen(5252, () =>
  console.log(`Node server listening at http://localhost:5252`)
);
