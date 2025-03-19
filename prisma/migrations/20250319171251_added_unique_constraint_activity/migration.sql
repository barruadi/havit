/*
  Warnings:

  - A unique constraint covering the columns `[username,email,date,activityName]` on the table `Activity` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Activity` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Activity_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Activity_username_email_date_activityName_key" ON "Activity"("username", "email", "date", "activityName");
