import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "./slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_REPO
  ? process.env.NEXT_PUBLIC_PRISMIC_REPO
  : config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
const routes: prismic.ClientConfig["routes"] = [
  {
    type: "home",
    path: "/",
  },
  {
    type: "page",
    path: "/:uid",
  },
  {
    type: "resources",
    path: "/resources",
  },
  {
    type: "reviews",
    path: "/reviews",
  },
  {
    type: "article",
    resolvers: {
      category: "category",
    },
    path: "/resources/:category?/:uid",
  },
  {
    type: "projects",
    path: "/resources/projects",
  }
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
