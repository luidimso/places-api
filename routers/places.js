const express = require("express");
const router = express.Router();
const { getPlaces } = require("../controllers/placeController");

router.route("/places").get(getPlaces);

module.exports = router;