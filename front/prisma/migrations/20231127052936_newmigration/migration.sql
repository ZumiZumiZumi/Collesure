/*
  Warnings:

  - You are about to drop the column `article_coment` on the `articles` table. All the data in the column will be lost.
  - The primary key for the `follows` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `followed_id` on the `follows` table. All the data in the column will be lost.
  - The primary key for the `goods` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `reads` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `subtags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `user_icon` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_coment` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `articles` DROP COLUMN `article_coment`;

-- AlterTable
ALTER TABLE `follows` DROP PRIMARY KEY,
    DROP COLUMN `followed_id`,
    ADD PRIMARY KEY (`follow_id`);

-- AlterTable
ALTER TABLE `goods` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`userId`);

-- AlterTable
ALTER TABLE `reads` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`userId`);

-- AlterTable
ALTER TABLE `subtags` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`articleId`);

-- AlterTable
ALTER TABLE `users` MODIFY `user_icon` VARCHAR(191) NOT NULL,
    MODIFY `user_coment` VARCHAR(191) NOT NULL;
