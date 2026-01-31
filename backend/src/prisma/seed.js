import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("password123", 10);

  await prisma.user.upsert({
    where: { email: "admin@partnr.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@partnr.com",
      password,
      role: "ADMIN",
    },
  });

  await prisma.skill.createMany({
    data: [
      { name: "JavaScript" },
      { name: "Node.js" },
      { name: "React" },
      { name: "PostgreSQL" },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Database seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
