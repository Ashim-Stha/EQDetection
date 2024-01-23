const express = require("express");
const homeController = require("../controller/homeController");
const router = express.Router();

router.get("/", homeController.home);
router.post("/", homeController.sendData);
router.post("/sendData", homeController.updateData);

module.exports = router;
