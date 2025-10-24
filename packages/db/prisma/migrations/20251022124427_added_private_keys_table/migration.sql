-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "publicKey" TEXT;

-- CreateTable
CREATE TABLE "public"."PrivateKeys" (
    "privateKeyId" SERIAL NOT NULL,
    "encrypted_key" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "iv" TEXT NOT NULL,
    "kdf" TEXT NOT NULL,
    "iterations" INTEGER NOT NULL,

    CONSTRAINT "PrivateKeys_pkey" PRIMARY KEY ("privateKeyId")
);
