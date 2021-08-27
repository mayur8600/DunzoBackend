const express = require('express');

const router = express.Router();

const Razorpay = require("razorpay");

const shortid = require('shortid');


/////////////////Razor Pay start/////////////////////////////////////////

const razorpay = new Razorpay({
    key_id: "rzp_test_bLaITbmnFqKOer",
    key_secret: "E5abK90xKYbZ5U50GBV3x7uo",
});

router.post("/:amount", async (req, res) => {
    const payment_capture = 1;
    const amount = req.params.amount;
    const currency = "INR";

    const options = {
        amount: amount * 100,
        currency,
        receipt: shortid.generate(),
        payment_capture,
    };

    try {
        const response = await razorpay.orders.create(options);
        console.log(response);
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount,
        });
    } catch (error) {
        console.log(error);
    }
});

/////////////////Razor Pay End///////////////////////////////////////////

module.exports = router;