import express, { Router } from "express";
const router: Router = express.Router();
import { handleAuth } from "../controllers";

router.post("/auth", handleAuth);

export default router;
