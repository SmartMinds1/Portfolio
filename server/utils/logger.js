// Centralized logger using Winston
const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: process.env.LOG_LEVEL || "info", // Default logging level
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // Time formatting
    format.errors({ stack: true }), // Include stack trace for errors
    format.colorize(), // Colorize logs by level (info, error, etc.)
    format.printf(
      ({ timestamp, level, message, stack }) =>
        stack
          ? `${timestamp} [${level}]: ${message}\n${stack}` // Log stack for errors
          : `${timestamp} [${level}]: ${message}` // Log normal messages
    )
  ),
  transports: [
    new transports.Console({
      handleExceptions: true, // Log uncaught exceptions
    }),
  ],
  exitOnError: false, // Prevent logger from crashing the app
});

// Handle graceful shutdown
process.on("SIGINT", () => {
  logger.info("🔌 Logger shutting down gracefully.");
  process.exit(0);
});

module.exports = logger;
