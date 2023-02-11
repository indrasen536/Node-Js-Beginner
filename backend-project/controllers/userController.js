const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const bcrypt = require("bcrypt");

//@desc Register a user
//@route POST/api/users/reigster
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const userAvaiable = await User.findOne({ email });
  if (userAvaiable) {
    res.status(400);
    throw new Error("User already available");
  }

  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashedPassword:", hashedPassword);
  const user = await User.create({
    username: username,
    email: email,
    password: hashedPassword,
  });

  console.log("User Created", `${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error({ message: "invalid request" });
  }
  res.json({ message: "Register the user" });
});

//@desc login a user
//@route POST/api/users/login
//@access public
const loginUser = asyncHandler((req, res) => {
  res.json({ message: "login user" });
});

//@desc Current user
//@route Get/api/users/current
//@access private
const currentUser = asyncHandler((req, res) => {
  res.json({ message: "current user" });
});

module.exports = { registerUser, loginUser, currentUser };
