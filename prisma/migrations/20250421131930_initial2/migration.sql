/*
  Warnings:

  - You are about to drop the column `topicId` on the `Appeal` table. All the data in the column will be lost.
  - You are about to drop the `AppealTopic` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Appeal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic` to the `Appeal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Appeal" DROP CONSTRAINT "Appeal_topicId_fkey";

-- AlterTable
ALTER TABLE "Appeal" DROP COLUMN "topicId",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "topic" TEXT NOT NULL;

-- DropTable
DROP TABLE "AppealTopic";
