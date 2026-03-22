const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const pool = require("../db");

// Get analytics
router.get("/analytics", authMiddleware, async (req, res) => {
  try {
    // Total events
    const total = await pool.query(
      "SELECT COUNT(*) FROM events WHERE organization_id = $1",
      [req.user.orgId]
    );

    // Events by type
    const byType = await pool.query(
      `SELECT event_type, COUNT(*) 
       FROM events 
       WHERE organization_id = $1 
       GROUP BY event_type`,
      [req.user.orgId]
    );

    res.json({
      total_events: total.rows[0].count,
      events_by_type: byType.rows,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Analytics failed" });
  }
});

module.exports = router;