require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
const pool = require("./db");

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("DB Error");
  }
});

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/api", dashboardRoutes);

const eventRoutes = require("./routes/eventRoutes");

app.use("/api", eventRoutes);

const analyticsRoutes = require("./routes/analyticsRoutes");

app.use("/api", analyticsRoutes);