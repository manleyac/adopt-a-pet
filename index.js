//module imports
const express = require("express");

const port = process.env.PORT || 8000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//set routes
app.use("/api", apiRoutes);

//start web server
app.listen(port, () => console.log(`Server running on port: ${port}`));