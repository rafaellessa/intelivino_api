/*
  Warnings:

  - You are about to drop the column `couponUseType` on the `coupon` table. All the data in the column will be lost.
  - You are about to drop the column `dicountType` on the `coupon` table. All the data in the column will be lost.
  - You are about to drop the column `discountValue` on the `coupon` table. All the data in the column will be lost.
  - You are about to drop the column `initalDate` on the `coupon` table. All the data in the column will be lost.
  - Added the required column `couponUse_type` to the `coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dicount_type` to the `coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discount_value` to the `coupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `coupon` DROP COLUMN `couponUseType`,
    DROP COLUMN `dicountType`,
    DROP COLUMN `discountValue`,
    DROP COLUMN `initalDate`,
    ADD COLUMN `couponUse_type` ENUM('UNLIMITED', 'UNIQUE_BY_USER', 'UNIQUE') NOT NULL,
    ADD COLUMN `dicount_type` ENUM('PERCENTAGE', 'VALUE') NOT NULL,
    ADD COLUMN `discount_value` DOUBLE NOT NULL,
    ADD COLUMN `inital_date` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
