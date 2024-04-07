/*
  Warnings:

  - You are about to drop the column `vod_serial` on the `vod` table. All the data in the column will be lost.
  - You are about to drop the column `vod_total` on the `vod` table. All the data in the column will be lost.
  - You are about to drop the column `vod_weekday` on the `vod` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `vod` DROP COLUMN `vod_serial`,
    DROP COLUMN `vod_total`,
    DROP COLUMN `vod_weekday`,
    MODIFY `vod_copyright` INTEGER NOT NULL DEFAULT 0;
