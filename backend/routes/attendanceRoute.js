import express from "express";
import { attendanceformresponse } from "../controllers/attendanceController.js";

const router = express.Router();

router.get("/attendanceResponse", attendanceformresponse);

export default router;
