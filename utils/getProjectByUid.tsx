import { createClient } from "@/prismicio";
import { projectQuery } from "./graphQueries";

const client = createClient();

export const getProjectByUid = async (projectUid: string) => {
  try {
    const project = await client.getByUID("project", projectUid, {
      graphQuery: projectQuery,
    });
    return project;
  } catch (error) {
    console.log("Error fetching project by UID :", error);
    return [];
  }
};
