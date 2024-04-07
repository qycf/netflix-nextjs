/*
  Warnings:

  - You are about to drop the column `login_ip` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `login_time` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `login_ip`,
    DROP COLUMN `login_time`;
