/*
  Warnings:

  - Made the column `date` on table `Activity` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Activity" ALTER COLUMN "date" SET NOT NULL;
