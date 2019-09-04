const express = require("express");
const https = require("https");
const fs = require("fs");
const history = require("connect-history-api-fallback");
const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const auth = require("./authMiddleware");
const router = jsonServer.router("serverdata.json");

const enableHttps = true;

const ssloptions = {};

// if (enableHttps) {
//   ssloptions.cert = fs.readFileSync("./ssl/sportsstore.crt");
//   ssloptions.key = fs.readFileSync("./ssl/sportsstore.pem");
// }

const app = express();

app.use(bodyParser.json());
app.use(auth);
app.use("/api", router);
app.use(history());
app.use("/", express.static("./dist/SportsStore"));

app.listen(8080, () => {
  console.log("Server is running at port 8080");
})
