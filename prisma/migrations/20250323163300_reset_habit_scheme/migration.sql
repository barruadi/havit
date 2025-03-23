-- DropIndex
DROP INDEX "Habit_email_key";

-- DropIndex
DROP INDEX "Habit_username_key";

-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Habit_pkey" PRIMARY KEY ("id");
