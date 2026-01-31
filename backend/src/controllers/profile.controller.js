import prisma from "../config/db.js";
// import prisma from "../prisma/client.js";

/**
 * CREATE PROFILE (one per user)
 */
export const createProfile = async (req, res) => {
  try {
    const { bio, location } = req.body;

    const profile = await prisma.profile.create({
      data: {
        bio,
        location,
        userId: req.user.id,
      },
    });

    res.status(201).json(profile);
  } catch (error) {
    console.error("Create profile error:", error);
    res.status(500).json({ message: "Failed to create profile" });
  }
};

/**
 * GET MY PROFILE
 */
export const getMyProfile = async (req, res) => {
  try {
    const profile = await prisma.profile.findUnique({
      where: { userId: req.user.id },
      include: {
        skills: {
          include: { skill: true },
        },
      },
    });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json(profile);
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({ message: "Failed to fetch profile" });
  }
};
