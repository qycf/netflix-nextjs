/*
  Warnings:

  - Added the required column `type_rank` to the `type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `type` ADD COLUMN `type_rank` INTEGER NOT NULL;
