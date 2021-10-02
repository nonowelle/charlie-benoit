const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const axios = require("axios");
const bodyParser = require("body-parser");
// const { construct } = require("core-js/fn/reflect");

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8081");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
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

// Display the files in public folder
// app.use(express.static("public"));

// app.use((_req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http//:localhost:8081");
//   next();
// });

//Get the data from the DB

app.get("/confirmations", (_req, res) => {
  let config = {
    method: "get",
    url: "https://confirmations-1a40.restdb.io/rest/invites",
    headers: {
      "x-apikey": api_key,
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
      console.log(error.message);
    });
});

// app.post("/confirmations", async (req, res) => {
//   const lastName = req.body.name;
//   const firstName = req.body.firstName;
//   const email = req.body.email;

//   //POST REQUEST TO COVEO API
//   const params = new URLSearchParams();
//   params.append("email", email);
//   params.append("firstname", firstName);
//   params.append("lastname", lastName);
//   let requestOptions = {
//     method: "POST",
//     headers: {
//       "x-apikey": api_key,
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: params,
//     redirect: "follow",
//   };

//   fetch("https://isfrontendtest.coveo.com/rest/registration", requestOptions)
//     .then((response) => response.json())
//     .then((result) => {
//       const message = result;
//       console.log(message);

//       if (message._createdby) {
//         res.send(message);
//       } else {
//         res.send(message);
//       }
//     })
//     .catch((error) => console.log("error", error));
// });

// Make the app listen to a port
app.listen(port, () => {
  console.log(`listening at ${port}`);
});
