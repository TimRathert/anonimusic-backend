require('dotenv').config();
require('./config/db.connection');

const { PORT } = process.env || 4000;
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const postController = require('./controllers/postController.js');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/', postController);

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
