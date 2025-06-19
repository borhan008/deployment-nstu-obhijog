-- AlterTable
ALTER TABLE `complaints` ADD COLUMN `building_id` INTEGER NULL,
    ADD COLUMN `room_no` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Buildings` (
    `building_id` INTEGER NOT NULL AUTO_INCREMENT,
    `building_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`building_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Complaints` ADD CONSTRAINT `Complaints_building_id_fkey` FOREIGN KEY (`building_id`) REFERENCES `Buildings`(`building_id`) ON DELETE SET NULL ON UPDATE CASCADE;
