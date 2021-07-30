const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const PORT = 5000;
const app = express();

const SUBDOMAIN = "full-stack-web-developer";
const APPID = 2;
const parameters = `?app=${APPID}&query=order by recordID asc`

app.use(cors());
// Define Behaviour for Express App
const corsOptions = {
  origin: "http://localhost:3000"
}

const requestEndpoint = `https://${SUBDOMAIN}.kintone.com/k/v1/records.json`; //  Endpoint Placeholder
/*
"X-Cybozu-API-Token: YOUR_TOKEN" "https://full-stack-web-developer.kintone.com/k/v1/record.json?app=2&id=1
*/

// Route for the Fetch Behaviour
app.get('/getData', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    // Defining Option attached to API Call
    method: 'GET',
    headers: {
      'X-Cybozu-API-Token':
        'pp1ilivl2tywqh9vap77PDsfTBPl8oTQyez65pAj'
    }
  }
  // Response behaviour
  const response = await fetch(requestEndpoint + parameters, fetchOptions);

  // Present Response in this way
  const jsonResponse = await response.json();
  res.json(jsonResponse)
});

app.listen(PORT, () => {
  console.log(`example app is listening at http://localhost:${PORT}`)
});
