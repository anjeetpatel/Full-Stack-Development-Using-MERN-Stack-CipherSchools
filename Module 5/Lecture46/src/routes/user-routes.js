const express = require("express");
const UserController = require("../controllers/user-controller");
const router = express.Router();

router.post("/login", UserController.loginUser);
router.post("/signup", UserController.addNewuser);

module.exports = router;
