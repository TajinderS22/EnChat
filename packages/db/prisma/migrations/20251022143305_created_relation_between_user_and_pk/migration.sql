/*
  Warnings:

  - You are about to drop the `PrivateKeys` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."PrivateKeys";

-- CreateTable
CREATE TABLE "public"."PrivateKey" (
    "privateKeyId" SERIAL NOT NULL,
    "encrypted_key" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "iv" TEXT NOT NULL,
    "kdf" TEXT NOT NULL,
    "iterations" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PrivateKey_pkey" PRIMARY KEY ("privateKeyId")
);

-- CreateIndex
CREATE UNIQUE INDEX "PrivateKey_userId_key" ON "public"."PrivateKey"("userId");

-- AddForeignKey
ALTER TABLE "public"."PrivateKey" ADD CONSTRAINT "PrivateKey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
