/*
  Warnings:

  - The primary key for the `Activity` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Activity_pkey" PRIMARY KEY ("id");
