-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "finishedDate" TIMESTAMP(3),
ALTER COLUMN "activityPicture" DROP NOT NULL,
ALTER COLUMN "activityPicture" SET DATA TYPE TEXT;
