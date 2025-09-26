import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import logger from "./utils/logger.js";

// Import routes
// import healthcheckRouter from "./routes/healthcheck.routes.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js"; // now real
import sweetRouter from "./routes/sweet.routes.js";

const app = express();
const morganFormat = ":method :url :status :response-time ms";

// Common Middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.static("public"));
app.use(cookieParser());

// Logging with morgan -> custom logger
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

// Basic route
app.get("/", (req, res) => {
  res.send("Hello Server");
  logger.info("Hello Server");
});

// API Routes
// app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter); // register/login
app.use("/api/v1/sweets", sweetRouter); // sweets + inventory

export { app };
