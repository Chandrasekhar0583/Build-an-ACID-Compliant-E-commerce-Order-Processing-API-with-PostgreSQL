import prisma from "../config/db.js";
// import prisma from "../prisma/client.js";

/**
 * SEARCH TALENT BY SKILL OR LOCATION
 */
export const searchTalent = async (req, res) => {
  try {
    const { skill, location } = req.query;

    const profiles = await prisma.profile.findMany({
      where: {
        AND: [
          skill
            ? {
                skills: {
                  some: {
                    skill: {
                      name: {
                        contains: skill,
                        mode: "insensitive",
                      },
                    },
                  },
                },
              }
            : {},
          location
            ? {
                location: {
                  contains: location,
                  mode: "insensitive",
                },
              }
            : {},
        ],
      },
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
        skills: {
          include: { skill: true },
        },
      },
    });

    res.json(profiles);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: "Search failed" });
  }
};
