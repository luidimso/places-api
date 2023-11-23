const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const placesRoutes = require("./routers/places");
const cors = require("cors");

dotenv.config({
    path: "./config/config.env"
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('images'));

app.use("/", placesRoutes);

app.listen(process.env.PORT, () => {
    console.log("Running on port "+process.env.PORT);
});