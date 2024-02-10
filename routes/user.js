const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

router.post("/", userController.createUser);
router.get('/',userController.getUsers)

exports.router = router;
