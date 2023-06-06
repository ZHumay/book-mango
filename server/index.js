const express = require('express');
const { bookRoutes } = require('./routes/bookRoutes');
const { writerRoutes } = require('./routes/writerRoutes');
const { countryRoutes } = require('./routes/countryRoutes');
const { default: mongoose } = require("mongoose");
const { db } = require('./config/db');

const cors = require('cors')
require('dotenv').config()

db.connect();

const app = express();

app.use(express.json())

app.use(cors());
app.use('/api/books', bookRoutes)

app.use('/api/writers', writerRoutes)

app.use('/api/countries', countryRoutes)

app.listen(3004,() =>console.log("Server connected"));


