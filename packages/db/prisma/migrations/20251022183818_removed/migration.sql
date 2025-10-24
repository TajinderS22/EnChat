/*
  Warnings:

  - You are about to drop the column `iterations` on the `PrivateKey` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."PrivateKey" DROP COLUMN "iterations";
