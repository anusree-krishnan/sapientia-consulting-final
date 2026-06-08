require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// ── Routes ──────────────────────────────────────────────────────────────────
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Sapientia API is running" });
});

app.use("/contact", contactRoutes);

// ── 404 handler ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ── Global error handler ────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("[ERROR]", err.message);
  res.status(500).json({ error: "Internal server error" });
});

// ── Database + Server start ─────────────────────────────────────────────────
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/sapientia";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("[DB] Connected to MongoDB:", MONGO_URI);
    app.listen(PORT, () => {
      console.log(`[SERVER] Sapientia API running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.warn("[DB] MongoDB connection failed — starting without database.");
    console.warn("[DB]", err.message);
    // Start server anyway so frontend health check still works
    app.listen(PORT, () => {
      console.log(`[SERVER] Sapientia API running on http://localhost:${PORT} (no DB)`);
    });
  });
