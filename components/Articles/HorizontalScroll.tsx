import { Button } from "../Button";
import { isFilled, type Content, asDate } from "@prismicio/client";
import React from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "../PrismicRichText";
import { ScrollContainer } from "../ScrollContainer";
import { getArticles } from "@/utils/getArticles";
import { getArticlesByUids } from "@/utils/getArticlesByUids";
import { getArticlesByCategory } from "@/utils/getArticlesByCategory";
import { getCategory } from "@/utils/getCategory";
import { ArticleDocument } from "@/prismicio-types";
import { CategoryPill, categoryPillColor } from "../CategoryPill";

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

  let articles: ArticleDocument[] = [];

  if (
    slice.variation === "autoHorizontalScroll" &&
    isFilled.contentRelationship(slice.primary.category)
  ) {
    articles = await getArticlesByCategory(
      slice.primary.category.id,
      slice.primary.number_of_articles ? slice.primary.number_of_articles : 100
    );
  }
  if (
    slice.variation === "autoHorizontalScroll" &&
    !isFilled.contentRelationship(slice.primary.category)
  ) {
    articles = await getArticles(
      slice.primary.number_of_articles ? slice.primary.number_of_articles : 100
    );
  }
  if (slice.variation === "horizontalScroll") {
    articles = await getArticlesByUids(articlesUids);
  }

  return (
    <div className="bg-white relative max-w-screen-2xl mx-auto">
      <ScrollContainer gap={10}>
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="flex-none inline-block bg-white rounded-xl shadow overflow-hidden mb-8 max-w-[350px] shrink-0"
          >
            <PrismicNextLink document={article}>
              {isFilled.image(article.data.featured_image) ? (
                <PrismicNextImage
                  className="object-contain"
                  field={
                    isFilled.imageThumbnail(
                      article.data.featured_image.thumbnail
                    )
                      ? article.data.featured_image.thumbnail
                      : article.data.featured_image
                  }
                />
              ) : (
                <img
                  src="https://images.prismic.io/prismic-partners-web/65e19e9027237c2bb829b42b_illu-library_double-question-marks.png?auto=format,compress"
                  className="w-[350px] h-[200px] object-cover"
                />
              )}
              <div className="px-8 py-4 whitespace-normal h-80 flex flex-col justify-between">
                <span
                  className={`h-8 w-fit inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium ${categoryPillColor(article.data.category.data.name)}`}
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
                </div>
                <div className="text-sm text-gray-darker">
                  <span>
                    {asDate(
                      article.data.date_of_publication
                    )?.toLocaleDateString()}
                  </span>{" "}
                  by{" "}
                  <span>
                    {isFilled.contentRelationship(article.data.author)
                      ? article.data.author.data.name
                      : "Anonymous"}
                  </span>
                </div>
              </div>
            </PrismicNextLink>
          </div>
        ))}
      </ScrollContainer>
    </div>
  );
};
