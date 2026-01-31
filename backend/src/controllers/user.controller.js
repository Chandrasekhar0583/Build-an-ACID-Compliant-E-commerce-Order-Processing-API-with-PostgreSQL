// import { PrismaClient } from "@prisma/client";
import prisma from "../prisma/client.js";


// const prisma = new PrismaClient();

/**
 * GET CURRENT USER
 */
export const getProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    res.json(user);
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * UPDATE PROFILE
 */
export const updateProfile = async (req, res) => {
  try {
    const { name } = req.body;

    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: { name },
    });

    res.json({
      message: "Profile updated",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
