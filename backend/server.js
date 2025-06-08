import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";

import adminRoutes from "./routes/adminRoutes.js";
import formRoute from "./routes/formRoute.js";
import attendanceRoute from "./routes/attendanceRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/form", formRoute);
app.use("/api/v1/attendance", attendanceRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`.green.bold);
});
