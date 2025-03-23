/*
  Warnings:

  - The primary key for the `Activity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `finishedDate` on the `Activity` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Activity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Activity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username,email,date,activityName]` on the table `Activity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Made the column `activityPicture` on table `Activity` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_pkey",
DROP COLUMN "finishedDate",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "activityPicture" SET NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Activity_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Activity_id_seq";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "picture" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Activity_username_key" ON "Activity"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Activity_email_key" ON "Activity"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Activity_username_email_date_activityName_key" ON "Activity"("username", "email", "date", "activityName");

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");
