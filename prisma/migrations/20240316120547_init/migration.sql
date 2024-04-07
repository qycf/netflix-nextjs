/*
  Warnings:

  - You are about to drop the `group` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `group`;

-- CreateTable
CREATE TABLE `user_group` (
    `group_id` INTEGER NOT NULL AUTO_INCREMENT,
    `group_name` VARCHAR(32) NOT NULL,
    `group_status` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `group_type` VARCHAR(16) NOT NULL,

    INDEX `group_status`(`group_status`),
    PRIMARY KEY (`group_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
