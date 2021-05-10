//module imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8000;

//import route handlers
const apiRoutes = require("./server/routes/api.js");

const app = express();

//middleware
app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//set routes
app.use("/api", apiRoutes);

//start web server
app.listen(port, () => console.log(`Server running on port: ${port}`));
