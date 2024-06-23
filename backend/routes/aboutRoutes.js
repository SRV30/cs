const express = require("express");
const { getAbout, updateAbout } = require("../controllers/aboutController");
const router = express.Router();

router.get("/get/about", getAbout);
router.put("/update/about", updateAbout);

module.exports = router;
