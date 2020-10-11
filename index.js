// index.js

const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/bops', require('./routes/api/bops'));

const port = process.env.PORT || '5000';

app.listen(port, () =>
  console.log(`Listening to requests on http://localhost:${port}`)
);
