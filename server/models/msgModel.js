// models/msgModel.js
const { query } = require("../utils/pgHelper");

// Check if user exists by email
async function findUserByEmail(email) {
  return query("SELECT id FROM biznutritia_users WHERE email = $1", [email]);
}

// Insert a new user
async function createUser(username, email) {
  return query(
    "INSERT INTO biznutritia_users (username, email) VALUES ($1, $2) RETURNING id",
    [username, email]
  );
}

// Insert a new message linked to user_id
async function createMessage(userId, message) {
  return query(
    "INSERT INTO biznutritia_messages (user_id, message) VALUES ($1, $2) RETURNING *",
    [userId, message]
  );
}

// Get all messages
async function getAllMessages() {
  return query(
    "SELECT id, username, email, message, created_at FROM smartygrand_messages ORDER BY id DESC"
  );
}

// Delete a message by ID
async function deleteMessageById(id) {
  return query("DELETE FROM smartygrand_messages WHERE id = $1 RETURNING *", [
    id,
  ]);
}

module.exports = {
  findUserByEmail,
  createUser,
  createMessage,
  getAllMessages,
  deleteMessageById,
};
