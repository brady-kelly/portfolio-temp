/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `SkillCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_categoryId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "SkillCategory_title_key" ON "SkillCategory"("title");

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "SkillCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
