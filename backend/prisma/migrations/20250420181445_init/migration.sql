/*
  Warnings:

  - The primary key for the `complaintcataegory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `complain_cat_id` on the `complaintcataegory` table. All the data in the column will be lost.
  - You are about to drop the column `complain_cat_id` on the `complaints` table. All the data in the column will be lost.
  - Added the required column `complaint_cat_id` to the `ComplaintCataegory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `complaints` DROP FOREIGN KEY `Complaints_complain_cat_id_fkey`;

-- DropIndex
DROP INDEX `Complaints_complain_cat_id_fkey` ON `complaints`;

-- AlterTable
ALTER TABLE `complaintcataegory` DROP PRIMARY KEY,
    DROP COLUMN `complain_cat_id`,
    ADD COLUMN `complaint_cat_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`complaint_cat_id`);

-- AlterTable
ALTER TABLE `complaints` DROP COLUMN `complain_cat_id`,
    ADD COLUMN `complaint_cat_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Complaints` ADD CONSTRAINT `Complaints_complaint_cat_id_fkey` FOREIGN KEY (`complaint_cat_id`) REFERENCES `ComplaintCataegory`(`complaint_cat_id`) ON DELETE SET NULL ON UPDATE CASCADE;
