const pool = require("../database/db");

// Simple query wrapper
const query = (text, params) => pool.query(text, params);

module.exports = { query };
