const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const pool = require("../db");

// Create event
router.post("/event", authMiddleware, async (req, res) => {
  const { event_type } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO events (organization_id, user_id, event_type)
       VALUES ($1, $2, $3) RETURNING *`,
      [req.user.orgId, req.user.userId, event_type]
    );

    res.json({
      message: "Event recorded",
      event: result.rows[0],
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to record event" });
  }
});

module.exports = router;