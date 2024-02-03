const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

router
  .get("/", userController.getUsers)
  .post("/", userController.createUser)
  .get("/:id", userController.getUser)
  .put("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser)
  .patch("/:id", userController.replaceUser);

exports.router = router;
