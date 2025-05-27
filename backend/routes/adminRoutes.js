import express from "express";
import { adminLogin, adminDashboard } from "../controllers/adminController.js";
import { verifyAdmin } from "../middlewares/adminAuth.js";

const router = express.Router();

router.post("/login", adminLogin);

router.get("/dashboard", verifyAdmin, adminDashboard);

export default router;
