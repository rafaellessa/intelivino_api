/*
  Warnings:

  - You are about to drop the column `additional_information` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `country` to the `account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipcode` to the `account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `account` ADD COLUMN `complement` VARCHAR(191) NULL,
    ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `district` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `number` VARCHAR(191) NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `street` VARCHAR(191) NOT NULL,
    ADD COLUMN `zipcode` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `additional_information`,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `complement` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `AccountConfiguration` (
    `id` VARCHAR(191) NOT NULL,
    `account_id` VARCHAR(191) NOT NULL,
    `banner_market_url` VARCHAR(191) NULL,
    `header_color` VARCHAR(191) NULL,

    UNIQUE INDEX `AccountConfiguration_account_id_key`(`account_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `account_email_key` ON `account`(`email`);

-- AddForeignKey
ALTER TABLE `AccountConfiguration` ADD CONSTRAINT `AccountConfiguration_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `account`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
