const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

app.use("/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});