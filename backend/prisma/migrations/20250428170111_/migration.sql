/*
  Warnings:

  - The primary key for the `notifications` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `notification_id` on the `notifications` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[complaint_id]` on the table `Notifications` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `notifications` DROP PRIMARY KEY,
    DROP COLUMN `notification_id`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `Notifications_complaint_id_key` ON `Notifications`(`complaint_id`);
