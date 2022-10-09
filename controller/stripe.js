import dotenv from 'dotenv';
dotenv.config();

import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
});


const stripeController = async (req, res) => {
    const { purchase, total_amount, shipping_fee } = req.body;

    const calculateOrderAmount = () => {
        return total_amount + shipping_fee;
    }
    const paymentIntents = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'INR'
    })
    res.json({ clientSecret: paymentIntents })
}

export default stripeController;