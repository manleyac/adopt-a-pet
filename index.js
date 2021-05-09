//module imports
const express = require("express");

const port = process.env.PORT || 8000;

const app = express();


//start web server
app.listen(port, () => console.log(`Server running on port: ${port}`));