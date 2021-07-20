const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000"
}

const requestEndpoint = ""; //  Endpoint Placeholder

app.get('/getData', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET'
  }
  const response = await fetch(requestEndpoint, fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse)
});

app.listen(PORT, () => {
  console.log(`example app is listening at http://localhost:${PORT}`)
});
