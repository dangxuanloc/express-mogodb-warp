import express from 'express';
import cors from 'cors';
import routes from './src/routes/index.js';
import connectDb from './config/db.js';

const app = express();

app.use(cors());

app.use(express.json())

app.use('/', routes);

// start server
app.listen(4001, () => {
    console.log('listening at port:4001');
});

