import express from "express";
import cors from "cors";
import morgan from "morgan";

import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import projectRoutes from "./routes/project.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import skillRoutes from "./routes/skill.routes.js";
import searchRoutes from "./routes/search.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/health", healthRoutes);
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/projects", projectRoutes);
app.use("/profiles", profileRoutes);
app.use("/skills", skillRoutes);
app.use("/search", searchRoutes);

export default app;
