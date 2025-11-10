// Main entry point
require("dotenv").config();
const express = require("express");
const pool = require("./database/db");
const logger = require("./utils/logger");
const errorHandler = require("./middlewares/errorHandler");
const commonMiddleware = require("./middlewares/common");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

/* ------------------------------
   1. SECURITY & MIDDLEWARE SETUP
--------------------------------*/
app.set("trust proxy", 1); // Required for HTTPS redirect behind proxies
commonMiddleware(app); // Your custom common middleware

// Redirect HTTP to HTTPS in production (but not localhost)
if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (
      req.headers["x-forwarded-proto"] !== "https" &&
      req.hostname !== "localhost"
    ) {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
  });
}

/* ------------------------------
   2. ROUTES
--------------------------------*/
app.use("/api/messages", require("./routes/messageRoutes"));

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "API is running" });
});

/* ------------------------------
   3. SERVING THE FRONT-END
--------------------------------*/
// Serve the React build folder
const clientBuildPath = path.join(__dirname, "../paulk-portfolio/dist");

app.use(express.static(clientBuildPath));

// Catch-all route for React SPA
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

/* ------------------------------
   4. ERROR HANDLING
--------------------------------*/
app.use(errorHandler);

/* ------------------------------
   5. SERVER STARTUP
--------------------------------*/
app.listen(PORT, () => {
  logger.info(` Server is running on http://localhost:${PORT}`);
});

/* ------------------------------
   6. GRACEFUL SHUTDOWN
--------------------------------*/
process.on("SIGINT", async () => {
  try {
    logger.info(" Shutting down server...");
    await pool.end();
    logger.info(" PostgreSQL pool closed.");
    process.exit(0);
  } catch (err) {
    logger.error(` Error closing PostgreSQL pool: ${err.message}`);
    process.exit(1);
  }
});
