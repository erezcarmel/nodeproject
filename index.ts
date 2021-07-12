import express from 'express';
import { connect } from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

connect(process.env.MONGO_DB || '', { useNewUrlParser: true })
    .then(() => {
        return console.info(`Successfully connected to ${process.env.MONGO_DB}`);
    })
    .catch(error => {
        console.error('Error connecting to database: ', error);
        return process.exit(1);
    });