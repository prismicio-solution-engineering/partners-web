import { createClient } from "@/prismicio";
import { ArticleCategoryDocument } from "@/prismicio-types";

const client = createClient();

export const getCategory = async (cat: ArticleCategoryDocument) => {
  try {
    const category = await client.getByUID("article_category", cat.uid);
    return category;
  } catch (error) {
    console.log("Error fetching categories :", error);
    return [];
  }
};
