const mongoose = require("mongoose");
const Contact = require("../models/Contact");

// In-memory fallback when DB is not connected
const inMemoryStore = [];

exports.submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  console.log("[CONTACT] Incoming submission:", { name, email });

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email, and message are all required." });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  if (message.trim().length < 10) {
    return res.status(400).json({ error: "Message must be at least 10 characters." });
  }

  const dbReady = mongoose.connection.readyState === 1;

  if (dbReady) {
    try {
      const entry = await Contact.create({ name: name.trim(), email: email.trim().toLowerCase(), message: message.trim() });
      console.log("[CONTACT] Saved to MongoDB, id:", entry._id);
      return res.status(201).json({ success: true, message: "Thank you! We'll be in touch soon.", id: entry._id });
    } catch (err) {
      console.error("[CONTACT] DB save error:", err.message);
      return res.status(500).json({ error: "Failed to save your message. Please try again." });
    }
  }

  // Fallback: store in memory
  const entry = { id: Date.now(), name: name.trim(), email: email.trim().toLowerCase(), message: message.trim(), createdAt: new Date() };
  inMemoryStore.push(entry);
  console.log("[CONTACT] Saved to memory (no DB), id:", entry.id);
  return res.status(201).json({ success: true, message: "Thank you! We'll be in touch soon.", id: entry.id });
};

exports.getContacts = async (req, res) => {
  const dbReady = mongoose.connection.readyState === 1;

  if (dbReady) {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.json(contacts);
  }

  return res.json(inMemoryStore.slice().reverse());
};
