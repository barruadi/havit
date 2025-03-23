-- DropIndex
DROP INDEX "Activity_email_key";

-- DropIndex
DROP INDEX "Activity_username_key";

-- AlterTable
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_pkey" PRIMARY KEY ("username", "activityName");
