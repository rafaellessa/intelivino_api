/*
  Warnings:

  - You are about to alter the column `post_uva` on the `api_postswp` table. The data in that column could be lost. The data in that column will be cast from `VarChar(199)` to `VarChar(99)`.
  - You are about to alter the column `post_teor` on the `api_postswp` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `VarChar(16)`.
  - You are about to drop the column `cat` on the `devices` table. All the data in the column will be lost.
  - You are about to drop the column `dog` on the `devices` table. All the data in the column will be lost.
  - You are about to drop the column `home` on the `devices` table. All the data in the column will be lost.
  - You are about to alter the column `user_id` on the `devices` table. The data in that column could be lost. The data in that column will be cast from `Int` to `UnsignedInt`.
  - You are about to drop the `api_postswpBkp` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `meta_subregioesbkp` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[installation_id]` on the table `devices` will be added. If there are existing duplicate values, this will fail.
  - Made the column `token_notification` on table `devices` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `api_postswp` MODIFY `post_uva` VARCHAR(99) NULL,
    MODIFY `post_teor` VARCHAR(16) NULL;

-- AlterTable
ALTER TABLE `business` ADD COLUMN `banner_catalogo_url` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `campaigns` ADD COLUMN `type` INTEGER NULL;

-- AlterTable
ALTER TABLE `devices` DROP COLUMN `cat`,
    DROP COLUMN `dog`,
    DROP COLUMN `home`,
    MODIFY `token_notification` VARCHAR(255) NOT NULL,
    MODIFY `user_id` INTEGER UNSIGNED NULL;

-- AlterTable
ALTER TABLE `indicacoes` MODIFY `descricao` VARCHAR(255) NULL,
    MODIFY `estoque` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `meta_regioes` MODIFY `meta_estado_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `planos` ADD COLUMN `highlight_indications` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `normal_indications` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `status_indicacoes` MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `users` ADD COLUMN `cod_ref` VARCHAR(255) NULL;

-- DropTable
DROP TABLE `api_postswpBkp`;

-- DropTable
DROP TABLE `meta_subregioesbkp`;

-- CreateTable
CREATE TABLE `campaigns_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `meta_categorias` (
    `id` INTEGER NOT NULL,
    `title` VARCHAR(240) NOT NULL,
    `master_id` INTEGER NULL,
    `alias` VARCHAR(90) NOT NULL,
    `categorization` VARCHAR(25) NULL,

    UNIQUE INDEX `id`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `campaigns_type_foreign` ON `campaigns`(`type`);

-- CreateIndex
CREATE UNIQUE INDEX `devices_installation_id_unique` ON `devices`(`installation_id`);

-- CreateIndex
CREATE INDEX `devices_user_id_foreign` ON `devices`(`user_id`);

-- AddForeignKey
ALTER TABLE `campaigns` ADD CONSTRAINT `campaigns_type_foreign` FOREIGN KEY (`type`) REFERENCES `campaigns_types`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `devices` ADD CONSTRAINT `devices_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;
