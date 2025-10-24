/*
  Warnings:

  - Added the required column `messageFromSender` to the `Messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Messages" ADD COLUMN     "messageFromSender" TEXT NOT NULL;
