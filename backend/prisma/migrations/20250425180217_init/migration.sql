-- AddForeignKey
ALTER TABLE `ResolvedComplaints` ADD CONSTRAINT `ResolvedComplaints_complaint_id_fkey` FOREIGN KEY (`complaint_id`) REFERENCES `Complaints`(`complaint_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
