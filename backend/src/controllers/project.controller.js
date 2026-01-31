import prisma from "../prisma/client.js";

export const createProject = async (req, res) => {
  try {
    const { title, description } = req.body;

    const project = await prisma.project.create({
      data: {
        title,
        description,
        ownerId: req.user.id
      }
    });

    res.status(201).json(project);
  } catch (err) {
    console.error("PROJECT ERROR:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const listProjects = async (req, res) => {
  const projects = await prisma.project.findMany({
    include: { owner: true }
  });
  res.json(projects);
};
