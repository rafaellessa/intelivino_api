/*
  Warnings:

  - You are about to drop the column `maxValue` on the `coupon` table. All the data in the column will be lost.
  - You are about to drop the column `minValue` on the `coupon` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `coupon` DROP COLUMN `maxValue`,
    DROP COLUMN `minValue`,
    ADD COLUMN `max_value` DOUBLE NULL,
    ADD COLUMN `min_value` DOUBLE NULL;
