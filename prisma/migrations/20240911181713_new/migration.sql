-- CreateTable
CREATE TABLE "count" (
    "id" TEXT NOT NULL,
    "blog" TEXT NOT NULL,
    "viewCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "count_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "count_blog_key" ON "count"("blog");
