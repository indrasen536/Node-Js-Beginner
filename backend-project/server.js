//importing express to spin up a server
const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// app.get("/api/contacts", (req, res) => {
//   //res.send("Hi, this is a sample get call");
//   //res.json({ message: "Hi, this is a sample json response" });
//   res.status(200).json({ message: "Hi, this is a sample json response" });
// });
//We should move these routers to route files.

app.use("/api/contacts", require("./routes/apiRoutes"));

app.listen(port, () => {
  console.log(`Server is running is running on port ${port}`);
});
