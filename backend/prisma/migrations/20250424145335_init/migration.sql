-- AddForeignKey
ALTER TABLE `Complaints` ADD CONSTRAINT `Complaints_uid_fkey` FOREIGN KEY (`uid`) REFERENCES `User`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;
