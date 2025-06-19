/*
  Warnings:

  - The primary key for the `resolvedcomplaints` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `resolved_id` on the `resolvedcomplaints` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[complaint_id]` on the table `ResolvedComplaints` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `complaints` ADD COLUMN `emergancy` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `resolvedcomplaints` DROP PRIMARY KEY,
    DROP COLUMN `resolved_id`;

-- CreateIndex
CREATE UNIQUE INDEX `ResolvedComplaints_complaint_id_key` ON `ResolvedComplaints`(`complaint_id`);
