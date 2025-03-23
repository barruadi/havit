/*
  Warnings:

  - A unique constraint covering the columns `[name,username,password,email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_name_username_password_email_key" ON "User"("name", "username", "password", "email");
