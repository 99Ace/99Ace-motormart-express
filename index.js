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
  // ==========================================================
  // 1C. CONNECT TO MONGODB
  // ==========================================================
  await MongoUtil.connect(process.env.MONGO_URI, process.env.DBNAME);
  let db = MongoUtil.getDB();
  let COLLECTION = db.collection(process.env.COLLECTION);

  app.get("/", async (req, res) => {
    let data = await COLLECTION.find().toArray();
    res.send(data);
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
