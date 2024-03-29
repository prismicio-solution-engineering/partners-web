import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { articleQuery } from "./graphQueries";

const client = createClient();

export const getArticlesByUids = async (
  // category?: string,
  articleUids?: string[],
) => {
  try {
    const articles = await client.getByUIDs("article", articleUids, {
      graphQuery: articleQuery,
      orderings: {
        field: "document.data.date_of_publication",
        direction: "desc",
      },
    });
    return articles.results;
  } catch (error) {
    console.log("Error fetching articles by UIDs :", error);
    return [];
  }
};
