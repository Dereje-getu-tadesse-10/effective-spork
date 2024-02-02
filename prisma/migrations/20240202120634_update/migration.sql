-- CreateTable
CREATE TABLE "Vinyl" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "artist" STRING NOT NULL,
    "year" INT4 NOT NULL,
    "genre" STRING NOT NULL,
    "image" STRING NOT NULL,
    "label" STRING NOT NULL,
    "album" STRING NOT NULL,
    "format" STRING NOT NULL,
    "userId" STRING NOT NULL,

    CONSTRAINT "Vinyl_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vinyl" ADD CONSTRAINT "Vinyl_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
