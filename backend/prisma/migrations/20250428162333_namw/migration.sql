/*
  Warnings:

  - Added the required column `uid` to the `Notifications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `notifications` ADD COLUMN `seen` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `uid` VARCHAR(191) NOT NULL;
