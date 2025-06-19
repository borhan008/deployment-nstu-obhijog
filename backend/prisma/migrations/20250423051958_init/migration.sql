/*
  Warnings:

  - Made the column `complaint_cat_id` on table `employee` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_complaint_cat_id_fkey`;

-- DropIndex
DROP INDEX `Employee_complaint_cat_id_fkey` ON `employee`;

-- AlterTable
ALTER TABLE `employee` MODIFY `complaint_cat_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_complaint_cat_id_fkey` FOREIGN KEY (`complaint_cat_id`) REFERENCES `ComplaintCataegory`(`complaint_cat_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
