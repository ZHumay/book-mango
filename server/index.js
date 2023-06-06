const express = require('express');
const { countryRoutes } = require('./routes/countryRoutes');
const { writerRoutes } = require('./routes/writerRoutes');
const { bookRoutes } = require('./routes/bookRoutes');
const cors = require("cors");
const { db } = require('./config/db');
const app = express();
require('dotenv').config()

db.connect();

app.use(express.json())
// app.use(fileUpload());


app.use('/api/country', countryRoutes)

app.use('/api/writer', writerRoutes)
app.use('/api/book', bookRoutes)
app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3006');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     next();
//   });
app.listen(3003);

