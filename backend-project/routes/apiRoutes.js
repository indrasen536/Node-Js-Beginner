const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hi, this is a sample json response" });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
});

router.route("/").post((req, res) => {
  res.status(200).json({ message: "Hi, this is a Create Contact" });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `delete Contact for ${req.params.id}` });
});

module.exports = router;
