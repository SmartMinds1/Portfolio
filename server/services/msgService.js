// services/msgService.js
const msgModel = require("../models/msgModel");

class MsgService {
  // Add a new message
  static async sendMessage(username, email, message) {
    // Check if user exists
    let userResult = await msgModel.findUserByEmail(email);
    let userId;

    if (userResult.rows.length === 0) {
      const newUser = await msgModel.createUser(username, email);
      userId = newUser.rows[0].id;
    } else {
      userId = userResult.rows[0].id;
    }

    // Insert message
    const messageResult = await msgModel.createMessage(userId, message);
    return messageResult.rows[0]; // return data only
  }

  // Get all messages
  static async getAllMessages() {
    const result = await msgModel.getAllMessages();
    return result.rows;
  }

  // Delete a message
  static async deleteMessage(id) {
    const result = await msgModel.deleteMessageById(id);
    return result;
  }
}

module.exports = MsgService;
