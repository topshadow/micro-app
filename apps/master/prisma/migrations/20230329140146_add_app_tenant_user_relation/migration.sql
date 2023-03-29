-- CreateTable
CREATE TABLE "App" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "readmeUrl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AppToTenant" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AppToTenant_A_fkey" FOREIGN KEY ("A") REFERENCES "App" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AppToTenant_B_fkey" FOREIGN KEY ("B") REFERENCES "Tenant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AppToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AppToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "App" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AppToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_AppToTenant_AB_unique" ON "_AppToTenant"("A", "B");

-- CreateIndex
CREATE INDEX "_AppToTenant_B_index" ON "_AppToTenant"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AppToUser_AB_unique" ON "_AppToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AppToUser_B_index" ON "_AppToUser"("B");
