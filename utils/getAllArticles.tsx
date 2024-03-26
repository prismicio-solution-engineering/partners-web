import { createClient } from "@/prismicio";
import { articleQuery } from "./graphQueries";

const client = createClient();

export const getAllArticles = async () => {
  try {
    const articles = await client.getAllByType("article", {
      graphQuery: articleQuery,
      orderings: {
        field: "document.data.date_of_publication",
        direction: "desc",
      },
    });
    return articles;
  } catch (error) {
    console.log("Error fetching articles :", error);
    return [];
  }
};
