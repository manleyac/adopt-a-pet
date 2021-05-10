//module imports
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 8000;

//import route handlers
const apiRoutes = require("./server/routes/api.js");

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static("client/build"));

//set routes
app.use("/api", apiRoutes);

//server static build files
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

//start web server
app.listen(port, () => console.log(`Server running on port: ${port}`));
