import express from "express";
import { createProject, listProjects } from "../controllers/project.controller.js";
import {authenticate} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, createProject);
router.get("/", listProjects);

export default router;
