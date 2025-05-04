import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const createTopic = (name:string) => prisma.appeal.create({
    data: {
        status: "NEW",
        topic: `Title ${name}`,
        description: `Description ${name}`
    }
})

async function main(): Promise<void> {
  
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
