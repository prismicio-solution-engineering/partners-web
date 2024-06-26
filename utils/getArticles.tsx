import { createClient } from "@/prismicio";
import { articleQuery } from "./graphQueries";

const client = createClient();

export const getArticles = async ({ size }: { size?: number }) => {
  try {
    const articles = await client.getByType("article", {
      graphQuery: articleQuery,
      pageSize: size,
      orderings: {
        field: "document.data.date_of_publication",
        direction: "desc",
      },
    });
    return articles.results;
  } catch (error) {
    console.log("Error fetching articles :", error);
    return [];
  }
};
