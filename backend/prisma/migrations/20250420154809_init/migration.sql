-- CreateTable
CREATE TABLE `Complaints` (
    `complaint_id` INTEGER NOT NULL AUTO_INCREMENT,
    `complaint_title` VARCHAR(191) NOT NULL,
    `complaint_description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `uid` VARCHAR(191) NOT NULL,
    `complain_cat_id` INTEGER NULL,
    `status` ENUM('DUE', 'PROCESSING', 'COMPLETED') NOT NULL DEFAULT 'DUE',

    PRIMARY KEY (`complaint_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ComplaintCataegory` (
    `complain_cat_id` INTEGER NOT NULL AUTO_INCREMENT,
    `complaint_cat_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`complain_cat_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ResolvedComplaints` (
    `resolved_id` INTEGER NOT NULL AUTO_INCREMENT,
    `resolved_details` VARCHAR(191) NOT NULL,
    `resolved_by` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `complaint_id` INTEGER NOT NULL,

    PRIMARY KEY (`resolved_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Complaints` ADD CONSTRAINT `Complaints_complain_cat_id_fkey` FOREIGN KEY (`complain_cat_id`) REFERENCES `ComplaintCataegory`(`complain_cat_id`) ON DELETE SET NULL ON UPDATE CASCADE;
