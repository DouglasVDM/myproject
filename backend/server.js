const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const PORT = 5000;
const app = express();

app.use(cors());
// Define Behaviour for Express App
const corsOptions = {
  origin: "http://localhost:3000"
}

const requestEndpoint = ""; //  Endpoint Placeholder

// Route for the Fetch Behaviour
app.get('/getData', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    // Defining Option attached to API Call
    method: 'GET'
  }
  // Response behaviour
  const response = await fetch(requestEndpoint, fetchOptions);

  // Present Response in this way
  const jsonResponse = await response.json();
  res.json(jsonResponse)
});

app.listen(PORT, () => {
  console.log(`example app is listening at http://localhost:${PORT}`)
});
