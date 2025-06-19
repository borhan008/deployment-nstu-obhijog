/*
  Warnings:

  - The primary key for the `department` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `profession_id` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[department_id]` on the table `Department` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `department` DROP PRIMARY KEY,
    MODIFY `department_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `profession_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Department_department_id_key` ON `Department`(`department_id`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `Department`(`department_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_profession_id_fkey` FOREIGN KEY (`profession_id`) REFERENCES `Profession`(`profession_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
