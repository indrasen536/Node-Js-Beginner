//importing express to spin up a server
const express = require("express");
const { connectDb } = require("./config/dbConnect");
const { errorHandler } = require("./customMiddleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

// app.get("/api/contacts", (req, res) => {
//   //res.send("Hi, this is a sample get call");
//   //res.json({ message: "Hi, this is a sample json response" });
//   res.status(200).json({ message: "Hi, this is a sample json response" });
// });
//We should move these routers to route files.

app.use(express.json());
//express.json() is an inbuilt middleware that will convert in the incoming data stream to json format
app.use("/api/contacts", require("./routes/apiRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
//app.use is a middleware which will route the requests to the respective routes
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running is running on port ${port}`);
});
