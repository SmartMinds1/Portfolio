const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const logger = require("../utils/logger");

const isDev = process.env.NODE_ENV !== "production"; // ✅ add this line

const commonMiddleware = (app) => {
  // Securing our app by setting HTTP headers
  app.use(helmet());

  // Controlling which domains are allowed to access our backend
  const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(",")
    : ["https://biznutritia.com"];

  const corsOptions = {
    origin: (origin, callback) => {
      if (
        !origin ||
        allowedOrigins.includes(origin) ||
        (isDev && /^http:\/\/localhost:\d+$/.test(origin)) // ✅ now works
      ) {
        callback(null, true);
      } else {
        logger.warn(`Blocked CORS request from origin: ${origin}`);
        callback(new Error("Blocked by CORS policy"), false);
      }
    },
    credentials: true,
  };

  app.use(cors(corsOptions));
  app.use(express.json({ limit: "10kb" })); // Limit large file to prevent DOS attacks
};

module.exports = commonMiddleware;
