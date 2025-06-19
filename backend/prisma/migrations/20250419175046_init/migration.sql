/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[uid]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `block` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `uid` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Profession` (
    `profession_id` INTEGER NOT NULL AUTO_INCREMENT,
    `profession_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`profession_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmployeeCategory` (
    `emp_category_id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`emp_category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Department` (
    `department_id` INTEGER NOT NULL AUTO_INCREMENT,
    `dept_full_name` VARCHAR(191) NOT NULL,
    `dept_shortform` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`department_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_uid_key` ON `User`(`uid`);
