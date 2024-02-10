const fs = require("fs");
const model = require("../model/user");
const mongoose = require("mongoose");
const User = model.User;

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const saveUser = await user.save();
    console.log(saveUser);
    res.status(201).json(saveUser);
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: error });
  }
};
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
// exports.getUser = (req, res) => {
//   const id = +req.params.id;
//   const user = users.find((p) => p.id === id);
//   res.json(user);
// };
// exports.updateUser = (req, res) => {
//   const id = +req.params.id;
//   const userIndex = users.findIndex((p) => p.id === id);
//   users.splice(userIndex, 1, { ...req.body, id: id });
//   res.status(201).json();
// };
// exports.replaceUser = (req, res) => {
//   const id = +req.params.id;
//   const userIndex = users.findIndex((p) => p.id === id);
//   const user = users[userIndex];
//   users.splice(userIndex, 1, { ...user, ...req.body });
//   res.status(201).json();
// };
// exports.deleteUser = (req, res) => {
//   const id = +req.params.id;
//   const userIndex = users.findIndex((p) => p.id === id);
//   const user = users[userIndex];
//   users.splice(userIndex, 1);
//   res.status(201).json(user);
// };
