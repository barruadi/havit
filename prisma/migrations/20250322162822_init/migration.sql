/*
  Warnings:

  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `picture` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "age",
DROP COLUMN "emailVerified",
ADD COLUMN     "birthdate" TIMESTAMP(3),
ADD COLUMN     "coin" INTEGER,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "picture" BYTEA NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- DropTable
DROP TABLE "VerificationToken";

-- CreateTable
CREATE TABLE "Activity" (
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "activityName" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "coin" INTEGER NOT NULL,
    "habitName" TEXT NOT NULL,
    "activityPicture" BYTEA NOT NULL
);

-- CreateTable
CREATE TABLE "KondisiMental" (
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "depression" DOUBLE PRECISION NOT NULL,
    "anxiety" DOUBLE PRECISION NOT NULL,
    "stress" DOUBLE PRECISION NOT NULL,
    "result" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Habit" (
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "habitName" TEXT NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "KondisiGizi" (
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "carbohydrate" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "fat" DOUBLE PRECISION NOT NULL,
    "vitamin" DOUBLE PRECISION NOT NULL,
    "calorie" DOUBLE PRECISION NOT NULL
);

-- CreateTable
CREATE TABLE "PopQuiz" (
    "question" TEXT NOT NULL,
    "option1" TEXT NOT NULL,
    "option2" TEXT NOT NULL,
    "option3" TEXT NOT NULL,
    "option4" TEXT NOT NULL,
    "answer" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Activity_username_key" ON "Activity"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Activity_email_key" ON "Activity"("email");

-- CreateIndex
CREATE UNIQUE INDEX "KondisiMental_username_key" ON "KondisiMental"("username");

-- CreateIndex
CREATE UNIQUE INDEX "KondisiMental_email_key" ON "KondisiMental"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Habit_username_key" ON "Habit"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Habit_email_key" ON "Habit"("email");

-- CreateIndex
CREATE UNIQUE INDEX "KondisiGizi_username_key" ON "KondisiGizi"("username");

-- CreateIndex
CREATE UNIQUE INDEX "KondisiGizi_email_key" ON "KondisiGizi"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PopQuiz_question_key" ON "PopQuiz"("question");
