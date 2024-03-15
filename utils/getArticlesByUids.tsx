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
      // filters: category
      //   ? [prismic.filter.at("my.article.category", category)]
      //   : undefined,
      orderings: {
        field: "document.data.date_of_publication",
        direction: "desc",
      },
    });
    // console.log("SIZE", graphQuery, size)
    return articles;
  } catch (error) {
    console.log("Error fetching articles :", error);
    return [];
  }
};
