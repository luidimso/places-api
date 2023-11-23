const express = require("express");
const router = express.Router();
const { getPlaces, updateUserPlaces } = require("../controllers/placeController");

router.route("/places").get(getPlaces);
router.route("/user-places").put(updateUserPlaces);

module.exports = router;