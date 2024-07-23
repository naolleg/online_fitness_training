/*
  Warnings:

  - You are about to drop the column `specialization` on the `Trainer` table. All the data in the column will be lost.
  - Added the required column `experience` to the `Trainer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Trainer` DROP COLUMN `specialization`,
    ADD COLUMN `experience` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `trainerid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `categories` ADD CONSTRAINT `categories_trainerid_fkey` FOREIGN KEY (`trainerid`) REFERENCES `Trainer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
