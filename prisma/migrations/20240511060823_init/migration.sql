-- CreateTable
CREATE TABLE "PostViews" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PostViews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PostViews_slug_key" ON "PostViews"("slug");
