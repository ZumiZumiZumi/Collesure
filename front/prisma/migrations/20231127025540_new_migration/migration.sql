-- CreateTable
CREATE TABLE `users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(191) NOT NULL,
    `user_mail` VARCHAR(191) NOT NULL,
    `user_pass` VARCHAR(191) NOT NULL,
    `user_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_icon` VARCHAR(191),
    `user_coment` VARCHAR(191),

    UNIQUE INDEX `users_user_mail_key`(`user_mail`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `follows` (
    `follow_id` INTEGER NOT NULL,
    `followed_id` INTEGER NOT NULL,

    PRIMARY KEY (`follow_id`,`followed_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tags` (
    `tag_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tag_name` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`tag_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `articles` (
    `article_id` INTEGER NOT NULL AUTO_INCREMENT,
    `article_title` VARCHAR(191) NOT NULL,
    `article_image` VARCHAR(191) NOT NULL,
    `article_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `article_updated` DATETIME(3) NOT NULL,
    `article_coment` VARCHAR(191),
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`article_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `goods` (
    `userId` INTEGER NOT NULL,
    `articleId` INTEGER NOT NULL,
    `good_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`userId`,`articleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reads` (
    `userId` INTEGER NOT NULL,
    `read_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `articleId` INTEGER NOT NULL,

    UNIQUE INDEX `reads_articleId_key`(`articleId`),
    PRIMARY KEY (`userId`,`read_created`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `maintags` (
    `articleId` INTEGER NOT NULL,
    `tagId` INTEGER NOT NULL,

    UNIQUE INDEX `maintags_tagId_key`(`tagId`),
    PRIMARY KEY (`articleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subtags` (
    `articleId` INTEGER NOT NULL,
    `tagId` INTEGER NOT NULL,

    PRIMARY KEY (`articleId`,`tagId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `follows` ADD CONSTRAINT `follows_follow_id_fkey` FOREIGN KEY (`follow_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tags` ADD CONSTRAINT `tags_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `articles` ADD CONSTRAINT `articles_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goods` ADD CONSTRAINT `goods_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goods` ADD CONSTRAINT `goods_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `articles`(`article_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reads` ADD CONSTRAINT `reads_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reads` ADD CONSTRAINT `reads_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `articles`(`article_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maintags` ADD CONSTRAINT `maintags_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `articles`(`article_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maintags` ADD CONSTRAINT `maintags_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `tags`(`tag_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subtags` ADD CONSTRAINT `subtags_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `articles`(`article_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subtags` ADD CONSTRAINT `subtags_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `tags`(`tag_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
