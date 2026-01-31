import prisma from "../prisma/client.js";

export const createSkill = async (req, res) => {
  try {
    const { name } = req.body;

    const skill = await prisma.skill.create({
      data: { name }
    });

    res.status(201).json(skill);
  } catch (err) {
    console.error("SKILL ERROR:", err);
    res.status(500).json({ message: "Failed to add skill" });
  }
};

export const listSkills = async (req, res) => {
  const skills = await prisma.skill.findMany();
  res.json(skills);
};
