import express from "express";
import { formresponse } from "../controllers/formControler.js";

const router = express.Router();

router.get("/corporateFormResponse", formresponse);

export default router;
