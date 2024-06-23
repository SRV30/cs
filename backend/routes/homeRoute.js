const express = require("express");
const router = express.Router();
const {
  getHomePageContent,
  updateHomePageContent,
} = require("../controllers/homePageContent");

router.get("/get/logo", getHomePageContent);

router.post("/update/logo", updateHomePageContent);

module.exports = router;
