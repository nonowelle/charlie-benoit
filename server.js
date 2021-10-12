const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const axios = require("axios");
const bodyParser = require("body-parser");
const serveStatic = require("serve-static");
const path = require("path");
const history = require("connect-history-api-fallback");

// const { construct } = require("core-js/fn/reflect");

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", serveStatic(path.join(__dirname + "/dist")));

// app.use(
//   history({
//     disableDotRule: true,
//     verbose: true,
//   })
// );

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,content-type, Accept"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

//Setting up the .env file
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const api_key = process.env.API_KEY;

app.get("/api/confirmations", (_req, res) => {
  let config = {
    method: "GET",
    url: "https://confirmations-1a40.restdb.io/rest/invites",
    headers: {
      "x-apikey": api_key,
      "cache-control": "no-cache",
      "Content-Type": "application/json",
    },
  };

  axios(config)
    .then((response) => {
      console.log("IN THE RESPONSE");

      res.send(response.data);

      res.send(JSON.stringify(response.data));
    })
    .catch(function(error) {
      // console.log(error.message);
      console.log(error);
    });
});

app.post("/confirmations", (req, res) => {
  console.log(req.body);
  const answer = {
    lastName: req.body.last,
    firstName: req.body.first,
    email: req.body.email,
    phone: req.body.phone,
    answer: req.body.response,
  };
  console.log(answer);
  var request = require("request");

  var options = {
    method: "POST",
    url: "https://confirmations-1a40.restdb.io/rest/invites",
    headers: {
      "cache-control": "no-cache",
      "x-apikey": api_key,
      "content-type": "application/json",
    },
    body: {
      lastName: req.body.last,
      firstName: req.body.first,
      email: req.body.email,
      phone: req.body.phone,
      answer: req.body.response,
    },
    json: true,
  };

  request(options, function(error, response, body) {
    if (error) {
      throw new Error(error);
    } else {
      console.log(response.body);
      res.send(JSON.stringify(response.body));
    }
  });
});

app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

// Make the app listen to a port
app.listen(port, () => {
  console.log(`listening at ${port}`);
});
