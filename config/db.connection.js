const mongoose = require('mongoose');
require('dotenv').config();

MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI);

mongoose.connection
    .on('open', () => console.log('You are connected to mongoose'))
    .on('close', () => console.log('You are disconnected from mongoose'))
    .on('error', (err) => console.log(err))