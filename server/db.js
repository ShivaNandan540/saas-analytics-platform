const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "saas_db",
  password: "Shivu@2006", // change if different
  port: 5432,
});

module.exports = pool;