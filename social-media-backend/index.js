const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const localhost = "localhost";
app.use(express.json());
require("dotenv").config();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true }, () => {
  console.log("Connection established Successfully");
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(port, localhost, (req, res) => {
  console.log(`SERVER RUNNING ON http://${localhost}:${port}`);
});
