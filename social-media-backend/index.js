const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
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
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully");
  } catch (error) {
    console.log(error);
  }
});

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true }, () => {
  console.log("Connection established Successfully");
});
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(port, localhost, (req, res) => {
  console.log(`SERVER RUNNING ON http://${localhost}:${port}`);
});
