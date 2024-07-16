const express = require("express");
const authMiddleware = require("../middlewares/auth-middleware");
const taskController = require("../controllers/task-controller");
const router = express.Router();

router.get("/self", authMiddleware, taskController.getTasksForUser);
router.post("/add", authMiddleware, taskController.addNewTask);

module.exports = router;
