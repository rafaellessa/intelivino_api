-- AlterTable
ALTER TABLE `pedidos` ADD COLUMN `coupon_id` INTEGER UNSIGNED NULL;

-- CreateTable
CREATE TABLE `coupon` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `discount_type` ENUM('PERCENTAGE', 'VALUE') NOT NULL,
    `discount_value` DOUBLE NOT NULL,
    `couponUse_type` ENUM('UNLIMITED', 'UNIQUE_BY_USER', 'UNIQUE') NOT NULL,
    `initial_date` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `expiration_date` DATETIME(3) NULL,
    `min_value` DOUBLE NULL,
    `max_value` DOUBLE NULL,
    `created_at` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `coupon_code_key`(`code`),
    INDEX `coupon_code_user_id_idx`(`code`, `user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pedidos` ADD CONSTRAINT `pedidos_coupon_id_fkey` FOREIGN KEY (`coupon_id`) REFERENCES `coupon`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `coupon` ADD CONSTRAINT `coupon_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
