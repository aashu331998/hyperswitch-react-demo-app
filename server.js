const express = require("express");
const app = express();
const { resolve } = require("path");

// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });
app.use(express.static(process.env.STATIC_DIR));
app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

const stripe = require("stripe")(process.env.SECRET_KEY);

app.get("/config", (req, res) => {
  try {
    res.send({
      publishableKey: process.env.PUBLISHABLE_KEY,
    });
  } catch (err) {
    return res.status(400).send({
      error: {
        message: err.message,
      },
    });
  }
});
app.post("/create-payment", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "USD",
      amount: 369999,
      confirm: false,
      capture_method: "automatic",
      authentication_type: "no_three_ds",
      customer_id: "StripeCustomer",
      description: "Hello this is description",
      shipping: {
        address: {
          line1: "1467",
          line2: "Harrison Street",
          line3: "Harrison Street",
          city: "San Fransico",
          state: "California",
          zip: "94122",
          country: "US",
          first_name: "joseph",
          last_name: "Doe",
        },
        phone: {
          number: "8056594427",
          country_code: "+91",
        },
      },
      billing: {
        address: {
          line1: "1467",
          line2: "Harrison Street",
          line3: "Harrison Street",
          city: "San Fransico",
          state: "California",
          zip: "94122",
          country: "US",
          first_name: "joseph",
          last_name: "Doe",
        },
        phone: {
          number: "8056594427",
          country_code: "+91",
        },
      },
      metadata: {
        order_details: {
          product_name: "Apple iphone 15",
          quantity: 1,
        },
      },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "USD",
        amount: 369999,
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
  }
});

app.listen(5252, () =>
  console.log(`Node server listening at http://localhost:5252`)
);
