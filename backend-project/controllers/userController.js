const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST/api/users/reigster
//@access public
const registerUser = asyncHandler((req, res) => {
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
