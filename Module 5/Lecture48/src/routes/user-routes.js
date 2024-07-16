const express = require("express");
const UserController = require("../controllers/user-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

router.post("/login", UserController.loginUser);
router.post("/signup", UserController.addNewuser);
router.delete("/self", authMiddleware, UserController.deleteUser);

module.exports = router;
