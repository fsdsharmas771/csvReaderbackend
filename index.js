// Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const routesV1 = require("./routes/csvReaderRoutes");

// Initial Config
const app = express();
app.use(cors());
let corsOptions = {
    origin: 'http://localhost:8080'
};
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/v1/csv", routesV1);

// Server
app.listen(port, () => console.log(`Listening on port ${port}`));
