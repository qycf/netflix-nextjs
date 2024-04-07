-- CreateTable
CREATE TABLE `group` (
    `group_id` INTEGER NOT NULL AUTO_INCREMENT,
    `group_name` VARCHAR(30) NOT NULL,
    `group_status` INTEGER NOT NULL,
    `group_type` TEXT NOT NULL,

    INDEX `group_status`(`group_status`),
    PRIMARY KEY (`group_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
