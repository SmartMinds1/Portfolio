//Let's first validate user inputs before reaching the main route logic.

const { body } = require("express-validator");

exports.usernameValidation = body("username")
  .notEmpty()
  .withMessage("Username is required.")
  .isLength({ min: 3 })
  .withMessage("Username must be at least 3 characters long.");

exports.emailValidation = body("email")
  .notEmpty()
  .withMessage("Email is required.")
  .isEmail()
  .withMessage("Invalid email address.");
