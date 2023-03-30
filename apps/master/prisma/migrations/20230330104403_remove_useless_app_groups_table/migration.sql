/*
  Warnings:

  - You are about to drop the `AppGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AppToTenant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `appGroupId` on the `App` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "_AppToTenant_B_index";

-- DropIndex
DROP INDEX "_AppToTenant_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AppGroup";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_AppToTenant";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_App" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "readmeUrl" TEXT NOT NULL
);
INSERT INTO "new_App" ("createAt", "description", "icon", "id", "name", "readmeUrl", "updateAt") SELECT "createAt", "description", "icon", "id", "name", "readmeUrl", "updateAt" FROM "App";
DROP TABLE "App";
ALTER TABLE "new_App" RENAME TO "App";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
