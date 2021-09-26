const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const axios = require("axios");
const bodyParser = require("body-parser");

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Setting up the .env file
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const api_key = process.env.API_KEY;

// Display the files in public folder
// app.use(express.static("public"));

//Get the data from the DB

app.get("/api", async (req, res) => {
  let config = {
    id: req.params.id,
    method: "get",
    url: "https://confirmations-1a40.restdb.io/rest/invites",
    headers: {
      "x-apikey": api_key,
      "Content-Type": "application/json",
    },
  };

  await axios(config)
    .then(async function(response) {
      console.log(response.data);
      data = response.data;
      res.send(data);
    })
    .catch(function(error) {
      console.log(error);
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
