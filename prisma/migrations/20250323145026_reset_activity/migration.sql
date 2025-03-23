/*
  Warnings:

  - The primary key for the `Activity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "Activity_email_key";

-- DropIndex
DROP INDEX "Activity_username_key";

-- AlterTable
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Activity_pkey" PRIMARY KEY ("id");
