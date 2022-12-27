-- AlterTable
ALTER TABLE `campaigns` ADD COLUMN `ask_for_address` TINYINT NULL DEFAULT 0,
    ADD COLUMN `ask_for_catalog` TINYINT NULL DEFAULT 0,
    ADD COLUMN `coupon` VARCHAR(30) NULL,
    ADD COLUMN `on_confirmation_end` VARCHAR(500) NULL,
    ADD COLUMN `presentation` VARCHAR(500) NULL;

-- CreateTable
CREATE TABLE `lead` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `name` VARCHAR(80) NULL,
    `mail` VARCHAR(255) NOT NULL,
    `mobile_phone` VARCHAR(30) NULL,
    `phone` VARCHAR(60) NULL,
    `is_active` TINYINT NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `origin_registration` TINYINT NOT NULL DEFAULT 1,
    `cpf_cnpj` VARCHAR(20) NULL,
    `type` VARCHAR(2) NULL,
    `note` VARCHAR(255) NULL,

    INDEX `id`(`id`),
    INDEX `lead_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lead_address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lead_id` INTEGER NOT NULL,
    `address_name` VARCHAR(50) NULL,
    `address_zip_code` VARCHAR(10) NULL,
    `address_state` VARCHAR(30) NULL,
    `address_city` VARCHAR(100) NULL,
    `address_district` VARCHAR(150) NULL,
    `address_street` VARCHAR(300) NULL,
    `address_number` VARCHAR(9) NULL,
    `address_complement` VARCHAR(300) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `lead_address`(`lead_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `lead_id` INTEGER NOT NULL,
    `campaign_id` INTEGER UNSIGNED NULL,
    `lead_address_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `order_campaign`(`campaign_id`),
    INDEX `order_lead`(`lead_id`),
    INDEX `order_lead_address_id`(`lead_address_id`),
    INDEX `order_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `indicacao_id` INTEGER UNSIGNED NOT NULL,
    `order_id` INTEGER NOT NULL,
    `quantity` INTEGER NULL,
    `price` DECIMAL(8, 2) NULL,
    `total` DECIMAL(8, 2) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `order_items_indicacao_id_foreign`(`indicacao_id`),
    INDEX `order_items_pedido_id_foreign`(`order_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `lead` ADD CONSTRAINT `lead_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `lead_address` ADD CONSTRAINT `lead_address` FOREIGN KEY (`lead_id`) REFERENCES `lead`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_campaign` FOREIGN KEY (`campaign_id`) REFERENCES `campaigns`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_lead` FOREIGN KEY (`lead_id`) REFERENCES `lead`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_lead_address_id` FOREIGN KEY (`lead_address_id`) REFERENCES `lead_address`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_indicacao_id_foreign` FOREIGN KEY (`indicacao_id`) REFERENCES `indicacoes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_pedido_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
