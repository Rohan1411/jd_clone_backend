const express = require("express");
const { userRegistration } = require("../controlers/UserControler");
const { getAllTalukas } = require("../controlers/SettingsControllers");
const router = express.Router();

router.post("/api/user-registration", userRegistration);

router.get("/api/admin/all-talukas",getAllTalukas)

module.exports = router;