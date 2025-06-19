/*
  Warnings:

  - You are about to drop the column `emp_category_id` on the `employee` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_emp_category_id_fkey`;

-- DropIndex
DROP INDEX `Employee_emp_category_id_fkey` ON `employee`;

-- AlterTable
ALTER TABLE `employee` DROP COLUMN `emp_category_id`,
    ADD COLUMN `complaint_cat_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_complaint_cat_id_fkey` FOREIGN KEY (`complaint_cat_id`) REFERENCES `ComplaintCataegory`(`complaint_cat_id`) ON DELETE SET NULL ON UPDATE CASCADE;
