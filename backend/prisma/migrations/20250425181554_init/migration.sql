-- AlterTable
ALTER TABLE `resolvedcomplaints` MODIFY `resolved_by` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `ResolvedComplaints` ADD CONSTRAINT `ResolvedComplaints_resolved_by_fkey` FOREIGN KEY (`resolved_by`) REFERENCES `User`(`uid`) ON DELETE SET NULL ON UPDATE CASCADE;
