const express = require("express");
const pf = require("@petfinder/petfinder-js");

const router = express.Router();

const API_KEY = process.env.API_KEY;
const SECRET = process.env.SECRET;

router.get("/", (req, res) => {
  res.send("API Running!");
});

router.get("/:animal/:location", (req, res) => {
  const animal = req.params.animal;
  const location = req.params.location;

  client = new pf.Client({ apiKey: API_KEY, secret: SECRET });
  client.animal
    .search({ type: animal, location: location })
    .then((result) => res.send(result.data))
    .catch((error) => console.error(error));
});

module.exports = router;
