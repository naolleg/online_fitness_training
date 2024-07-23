/*
  Warnings:

  - Added the required column `BMI` to the `TraineeStatus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TraineeStatus` ADD COLUMN `BMI` DOUBLE NOT NULL;
