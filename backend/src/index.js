import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Use cookie-parser before routes
app.use(cookieParser());

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
    }
));

// Define routes
app.use("/api/auth", authRoutes);

app.use("/api/messages", messageRoutes);

// Start server and connect to the database
app.listen(PORT, () => {
    console.log("Server running on port:" + PORT);
    connectDB();
});
