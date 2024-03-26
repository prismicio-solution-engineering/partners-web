import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { articleQuery } from "./graphQueries";

const client = createClient();

export const getAllArticlesByCategory = async (category: string) => {
  try {
    const articles = await client.getAllByType("article", {
      graphQuery: articleQuery,
      filters: [prismic.filter.at("my.article.category", category)],
      orderings: {
        field: "document.data.date_of_publication",
        direction: "desc",
      },
    });
    return articles;
  } catch (error) {
    console.log("Error fetching articles by category :", error);
    return [];
  }
};
