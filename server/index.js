// Main entry point for the app
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("./utils/logger");
const errorHandler = require("./middlewares/errorHandler");
const commonMiddleware = require("./middlewares/common");

//routes
const messageRoutes = require("./routes/messageRoutes"); //  Added Messages API

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from frontend
app.use(
  cors({
    origin: "http://localhost:5173", // My React app URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Trust the first proxy (e.g., Ngrok)
app.set("trust proxy", 1);

// Apply common middleware
commonMiddleware(app);

// Redirect HTTP to HTTPS in production (but not for localhost)
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

// Parse incoming JSON but limit it to a small file to avoid server crash.
app.use(express.json({ limit: "10kb" }));

// Routes
app.use("/api/messages", messageRoutes); // Added Messages API

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).send("API is running.");
});

// Global Error Handler
app.use(errorHandler);

// Start the Server
app.listen(PORT, () => {
  logger.info(` Server is running on http://localhost:${PORT}`);
});
