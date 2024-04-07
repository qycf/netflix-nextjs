-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `group_id` INTEGER NOT NULL,
    `user_name` VARCHAR(30) NOT NULL,
    `user_pwd` VARCHAR(32) NOT NULL,
    `user_nick_name` VARCHAR(30) NOT NULL,
    `user_email` VARCHAR(30) NOT NULL,
    `user_status` INTEGER NOT NULL,
    `user_reg_time` INTEGER NOT NULL,
    `user_reg_ip` INTEGER NOT NULL,
    `user_login_time` INTEGER NOT NULL,
    `user_login_ip` INTEGER NOT NULL,
    `user_last_login_time` INTEGER NOT NULL,
    `user_last_login_ip` INTEGER NOT NULL,
    `update_time` INTEGER NOT NULL,

    INDEX `type_id`(`group_id`),
    INDEX `user_name`(`user_name`),
    INDEX `user_reg_time`(`user_reg_time`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
