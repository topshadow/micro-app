/*
  Warnings:

  - Added the required column `name` to the `Tenant` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tenant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "enable" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Tenant" ("createAt", "enable", "id", "updateAt") SELECT "createAt", "enable", "id", "updateAt" FROM "Tenant";
DROP TABLE "Tenant";
ALTER TABLE "new_Tenant" RENAME TO "Tenant";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
