/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `update_time` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_last_login_ip` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_last_login_time` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_login_ip` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_login_time` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_nick_name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_pwd` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_reg_ip` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_reg_time` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_status` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `user_id` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - You are about to alter the column `group_id` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedSmallInt`.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `user_name` ON `user`;

-- DropIndex
DROP INDEX `user_reg_time` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `update_time`,
    DROP COLUMN `user_email`,
    DROP COLUMN `user_last_login_ip`,
    DROP COLUMN `user_last_login_time`,
    DROP COLUMN `user_login_ip`,
    DROP COLUMN `user_login_time`,
    DROP COLUMN `user_name`,
    DROP COLUMN `user_nick_name`,
    DROP COLUMN `user_pwd`,
    DROP COLUMN `user_reg_ip`,
    DROP COLUMN `user_reg_time`,
    DROP COLUMN `user_status`,
    ADD COLUMN `email` VARCHAR(30) NOT NULL,
    ADD COLUMN `last_login_ip` VARCHAR(15) NULL,
    ADD COLUMN `last_login_time` DATETIME(3) NULL,
    ADD COLUMN `login_ip` VARCHAR(15) NULL DEFAULT '0',
    ADD COLUMN `login_time` DATETIME(3) NULL,
    ADD COLUMN `nickname` VARCHAR(30) NULL,
    ADD COLUMN `password` VARCHAR(32) NOT NULL,
    ADD COLUMN `reg_ip` VARCHAR(15) NULL DEFAULT '0',
    ADD COLUMN `reg_time` DATETIME(3) NULL,
    ADD COLUMN `status` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    ADD COLUMN `username` VARCHAR(30) NOT NULL,
    MODIFY `user_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `group_id` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`user_id`);

-- CreateIndex
CREATE INDEX `user_name` ON `user`(`username`);

-- CreateIndex
CREATE INDEX `user_reg_time` ON `user`(`reg_time`);
