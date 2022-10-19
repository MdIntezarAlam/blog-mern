import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Router from './routes/route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"))
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

URL = process.env.MONGODB_URL || `mongodb+srv://root:root@cluster0.kn9qet1.mongodb.net/test`

Connection(URL);
