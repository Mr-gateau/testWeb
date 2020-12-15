const express = require("express");
const app = express();
const port = 3000;

const router = express.Router();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();

  app.options("*", (req, res) => {
    // allowed XHR methods
    res.header(
      "Access-Control-Allow-Methods",
      "GET, PATCH, PUT, POST, DELETE, OPTIONS"
    );
    res.send();
  });
});
/*
const source = require("./Routes/sources");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/getSource", source);*/

app.listen(port, (res, req) => {
  console.log("We are here => " + port);
});
