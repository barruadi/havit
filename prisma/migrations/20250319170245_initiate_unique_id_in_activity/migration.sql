/*
  Warnings:

  - A unique constraint covering the columns `[username,email,date,activityName]` on the table `Activity` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Activity_username_email_date_activityName_key" ON "Activity"("username", "email", "date", "activityName");
