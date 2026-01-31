import express from "express";
import { createSkill, listSkills } from "../controllers/skill.controller.js";
import {authenticate} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, createSkill);
router.get("/", listSkills);

export default router;
