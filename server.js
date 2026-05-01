const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const axios = require("axios");
const bodyParser = require("body-parser");
const serveStatic = require("serve-static");
const path = require("path");

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", serveStatic(path.join(__dirname + "/dist")));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const api_key = process.env.API_KEY;

app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
