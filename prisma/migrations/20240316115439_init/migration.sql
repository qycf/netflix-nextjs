-- AlterTable
ALTER TABLE `user` MODIFY `email` VARCHAR(32) NOT NULL,
    MODIFY `nickname` VARCHAR(32) NULL,
    MODIFY `password` VARCHAR(64) NOT NULL,
    MODIFY `username` VARCHAR(32) NOT NULL;
