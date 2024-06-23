const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.get("/get/service", serviceController.getServices);

router.post("/create/service", serviceController.createService);

module.exports = router;
