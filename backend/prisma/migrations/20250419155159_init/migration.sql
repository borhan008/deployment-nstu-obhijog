/*
  Warnings:

  - You are about to drop the column `roles` on the `user` table. All the data in the column will be lost.
  - Added the required column `profession` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `roles`,
    ADD COLUMN `profession` VARCHAR(191) NOT NULL,
    ADD COLUMN `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER';
