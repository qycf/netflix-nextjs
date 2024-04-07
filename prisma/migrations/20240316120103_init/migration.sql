/*
  Warnings:

  - You are about to alter the column `group_status` on the `group` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedTinyInt`.

*/
-- AlterTable
ALTER TABLE `group` MODIFY `group_status` TINYINT UNSIGNED NOT NULL DEFAULT 0;
