import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

/**
 * Setup
 */
dotenv.config({path: path.resolve(import.meta.dirname, ".env")});
const port = process.env.PORT || 5000;
const app = express();

/**
 * Connect to MongoDB
 */
connectDB();

/**
 * Middleware
 * Body Parser, URL Encoded, Cookie Parser
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * CORS HEADERS MIDDLEWARE
 */
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**
 * GET Root
 */
app.get("/", (req, res) => {
    res.send('API is running.');
});

/**
 * Routes
 */
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
    res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

const __dirname = path.resolve(); // Set __dirname to current directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

/**
 * Error Middleware
 */
app.use(notFound);
app.use(errorHandler);

/**
 * Run Server
 */
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
