-- AlterTable
ALTER TABLE `resolvedcomplaints` ADD COLUMN `employee_id` INTEGER NULL,
    ADD COLUMN `estimated_date` DATETIME(3) NULL;

-- AddForeignKey
ALTER TABLE `ResolvedComplaints` ADD CONSTRAINT `ResolvedComplaints_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee`(`employee_id`) ON DELETE SET NULL ON UPDATE CASCADE;
