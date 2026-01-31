import { Router } from "express";
import { searchTalent } from "../controllers/search.controller.js";

const router = Router();

router.get("/", searchTalent);

export default router;
