const express = require("express");
const MongoUtil = require("./MongoUtil.js");
const ObjectId = require("mongodb").ObjectId;
const cors = require("cors");

// Set up dotenv
require("dotenv").config();

// ==========================================================
// 1A. SETUP EXPRESS application
// ==========================================================
let app = express();
app.use(express.json());
app.use(cors());

// ==========================================================
// 1B. SETUP STATIC FOLDER
// ==========================================================
app.use(express.static("public")); // set up static file for images, css

async function main() {
  app.get("/", (req, res) => {
    res.send("Hello World");
  });
}

main();

// ==========================================================
// LISTEN
// ==========================================================
// app.listen( process.env.PORT, function() {
app.listen(process.env.PORT || 3001, function () {
  console.log("...We Are Serving...");
});
