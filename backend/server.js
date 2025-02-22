import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";
import productRoutes from "./routes/productRoutes.js";

dotenv.config({path: path.resolve(import.meta.dirname, ".env")});

const port = process.env.PORT || 5000;
const app = express();

/* Connect to MongoDB */
connectDB();

// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", (req, res) => {
    res.send('API is running.');
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
