import express from 'express';
const router = express.Router();

import stripeController from "../controller/stripe.js";

router.post('/', stripeController);

export default router;