require('dotenv').config();
require('./config/db.connection');

const { PORT } = process.env.PORT || 4000;
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

