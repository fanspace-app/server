import express, { Router } from "express";
const router: Router = express.Router();
import { handleAuth, getUser, getMentorProfile } from "../controllers";
import { verifyToken } from "../middlewares";

router.post("/auth", handleAuth);
// router.post("/mentor/create");

router.get("/get", verifyToken, getUser);

router.get("/mentor-profile", verifyToken, getMentorProfile);

export default router;
