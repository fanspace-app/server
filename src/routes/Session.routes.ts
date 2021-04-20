import express, { Router } from "express";
const router: Router = express.Router();
import { getSessionsofUser } from "../controllers";
import { verifyToken } from "../middlewares";

router.get("/all", verifyToken, getSessionsofUser);

export default router;
