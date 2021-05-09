const express = require("express");
const pf = require("@petfinder/petfinder-js");

const router = express.Router();

const API_KEY = process.env.API_KEY;
const SECRET = process.env.SECRET;

router.get("/", (req, res) => {
   res.send("API Running!");
 });

 module.exports = router;