


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const UploadRoute = require("./routes/UploadRoute");

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));


const MONGO="mongodb+srv://jala:jala@cluster0.bysodeo.mongodb.net/?retryWrites=true&w=majority"

const connect = async () => {
    try {
      await mongoose.connect(MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };

app.use(UploadRoute);

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);




app.listen(5000, () => {
  connect();
  console.log(`Server started at port: 5000`);
});