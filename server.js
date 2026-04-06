const express = require("express");
const connectDB = require("./src/config/db");

const userRoutes = require("./src/routes/userRoutes");

const app = express();

connectDB();

app.use(express.json());

// routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});