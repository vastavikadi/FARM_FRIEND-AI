import express from "express";
import { signupEmail, loginEmail, signupHive, loginHive } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup/email", signupEmail);
router.post("/login/email", loginEmail);

router.post("/signup/hive", signupHive);
router.post("/login/hive", loginHive);

export default router;
