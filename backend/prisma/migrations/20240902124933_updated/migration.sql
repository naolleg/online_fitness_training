/*
  Warnings:

  - You are about to drop the column `userid` on the `Chat` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Chat` DROP FOREIGN KEY `Chat_userid_fkey`;

-- AlterTable
ALTER TABLE `Chat` DROP COLUMN `userid`;

-- CreateTable
CREATE TABLE `_ParticipantInChats` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ParticipantInChats_AB_unique`(`A`, `B`),
    INDEX `_ParticipantInChats_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ParticipantInChats` ADD CONSTRAINT `_ParticipantInChats_A_fkey` FOREIGN KEY (`A`) REFERENCES `Chat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ParticipantInChats` ADD CONSTRAINT `_ParticipantInChats_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
