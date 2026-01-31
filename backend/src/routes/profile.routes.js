import { Router } from "express";
import {
  createProfile,
  getMyProfile,
} from "../controllers/profile.controller.js";
import {authenticate} from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", authenticate, createProfile);
router.get("/me", authenticate, getMyProfile);

export default router;
