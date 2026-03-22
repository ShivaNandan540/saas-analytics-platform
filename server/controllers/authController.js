const pool = require("../db");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const { name, email, password, organizationName } = req.body;

  try {
    // 1. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 2. Create organization
    const orgResult = await pool.query(
      "INSERT INTO organizations (name) VALUES ($1) RETURNING *",
      [organizationName]
    );

    const organization = orgResult.rows[0];

    // 3. Create user
    const userResult = await pool.query(
      `INSERT INTO users (name, email, password, role, organization_id)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, email, hashedPassword, "admin", organization.id]
    );

    const user = userResult.rows[0];

    res.status(201).json({
      message: "User and organization created",
      user,
      organization,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Signup failed" });
  }
};

const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check user
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ error: "User not found" });
    }

    const user = result.rows[0];

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // 3. Create token
    const token = jwt.sign(
  { userId: user.id, orgId: user.organization_id },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);

    res.json({
      message: "Login successful",
      token,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
};