-- CreateEnum
CREATE TYPE "AppealStatus" AS ENUM ('NEW', 'PENDING', 'RESOLVED', 'CANCELED');

-- CreateTable
CREATE TABLE "Appeal" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "AppealStatus" NOT NULL,
    "topicId" TEXT NOT NULL,

    CONSTRAINT "Appeal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppealTopic" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "AppealTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppealResolution" (
    "id" TEXT NOT NULL,
    "appealId" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "AppealResolution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppealCancellation" (
    "id" TEXT NOT NULL,
    "appealId" TEXT NOT NULL,
    "reason" TEXT NOT NULL,

    CONSTRAINT "AppealCancellation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AppealResolution_appealId_key" ON "AppealResolution"("appealId");

-- CreateIndex
CREATE UNIQUE INDEX "AppealCancellation_appealId_key" ON "AppealCancellation"("appealId");

-- AddForeignKey
ALTER TABLE "Appeal" ADD CONSTRAINT "Appeal_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "AppealTopic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppealResolution" ADD CONSTRAINT "AppealResolution_appealId_fkey" FOREIGN KEY ("appealId") REFERENCES "Appeal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppealCancellation" ADD CONSTRAINT "AppealCancellation_appealId_fkey" FOREIGN KEY ("appealId") REFERENCES "Appeal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
