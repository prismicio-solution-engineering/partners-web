import { Button } from "../Button";
import { ArticleDocumentData } from "@/prismicio-types";
import { isFilled, type Content } from "@prismicio/client";
import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "../PrismicRichText";
import { ScrollContainer } from "./ScrollContainer";
import { getArticles } from "@/utils/getArticles";
import { getArticlesByUids } from "@/utils/getArticlesByUids";

const serializer = {
  heading1: ({ children }) => (
    <h3 className="text-xl font-bold mb-4 text-gray-darker">{children}</h3>
  ),
};

export const HorizontalScroll = async ({
  slice,
}: {
  slice:
    | Content.ArticlesSliceHorizontalScroll
    | Content.ArticlesSliceAutoHorizontalScroll;
}) => {
  const articlesUids: string[] = slice.items.map((item) => {
    if (isFilled.contentRelationship(item.article)) {
      return item.article.uid!;
    }
    return "";
  });

  const articles =
    slice.variation === "autoHorizontalScroll"
      ? await getArticles(
          // slice.primary.category,
          slice.primary.number_of_articles
            ? slice.primary.number_of_articles
            : 100
        )
      : await getArticlesByUids(articlesUids);

  return (
    <div className="bg-white relative max-w-screen-xl mx-auto">
      <ScrollContainer>
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="inline-block bg-white rounded-xl shadow overflow-hidden mb-8 max-w-[350px] shrink-0"
          >
            <PrismicNextImage
              className="w-full object-cover h-[200px]"
              field={article.data.featured_image}
            />

            <div className="px-8 py-4 whitespace-normal h-80 flex flex-col justify-between">
              {/* Create a category pill component */}
                <span
                  className={`h-8 w-fit inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium ${article.data.category.data.name === "Use case" && "bg-quaternary-blue text-primary-blue"} ${article.data.category.data.name === "Best practice" && "bg-[#E8F8F3] text-primary-green"} ${article.data.category.data.name === "Tutorial" && "bg-quaternary-orange text-primary-orange"}`}
                >
                  {article.data.category.data.name}
                </span>
              <div className="flex flex-col gap-y-1">
                <PrismicRichText
                  field={article.data.title}
                  components={serializer}
                />
                <p className="text-gray-darker text-sm max-h-[96px] text-ellipsis overflow-hidden">
                  {article.data.excerpt}
                </p>
                <Button variant="link" document={article}>
                  {slice.primary.articles_read_more_label}
                </Button>
              </div>
              <div className="text-sm text-gray-darker">
                <span>{article.data.date_of_publication}</span> by{" "}
                <span>
                  {isFilled.contentRelationship(article.data.author)
                    ? article.data.author.data.name
                    : "Anonymous"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </ScrollContainer>
    </div>
  );
};
