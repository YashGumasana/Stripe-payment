import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';

import express from 'express';
const app = express();

//routers
import router from './router/stripe.js';

// error handler
import notFound from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

//routes
app.use(express.json());
app.use(express.static('./public'));


app.use('/stripe', router);

app.use(notFound);
app.use(errorHandlerMiddleware);



const port = 80;

const start = async () => {
    try {
        app.listen(port, () => console.log(`Server is listening on ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();