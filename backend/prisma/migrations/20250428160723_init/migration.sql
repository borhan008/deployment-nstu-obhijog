-- CreateTable
CREATE TABLE `Notifications` (
    `notification_id` INTEGER NOT NULL AUTO_INCREMENT,
    `complaint_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`notification_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
