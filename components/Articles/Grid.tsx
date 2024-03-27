"use client";
import { useState } from "react";
import { Button } from "../Button";
import {
  ArticleDocument,
  ArticlesSliceAutoFilterableGrid,
} from "@/prismicio-types";
import { asDate, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "../PrismicRichText";
import { getAllArticles } from "@/utils/getAllArticles";
import { getAllArticlesByCategory } from "@/utils/getAllArticlesByCategory";

const serializer = {
  heading1: ({ children }) => (
    <h3 className="text-xl font-bold mb-4 text-gray-darker">{children}</h3>
  ),
};

const categoryPill = (category: string) => {
  if (category === "Use case") {
    return "bg-quaternary-purple text-primary-purple";
  } else if (category === "Best practice") {
    return "bg-quaternary-green text-primary-green";
  } else if (category === "Tutorial") {
    return "bg-quaternary-orange text-primary-orange";
  } else if (category === "Solution engineering team projects") {
    return "bg-quaternary-blue text-primary-blue";
  }
};

export async function Grid({
  slice,
}: {
  slice: ArticlesSliceAutoFilterableGrid;
}) {
  let articles: ArticleDocument[] = [];

  if (
    slice.variation === "autoFilterableGrid" &&
    isFilled.contentRelationship(slice.primary.category)
  ) {
    articles = await getAllArticlesByCategory(slice.primary.category.id);
  }
  if (
    slice.variation === "autoFilterableGrid" &&
    !isFilled.contentRelationship(slice.primary.category)
  ) {
    articles = await getAllArticles();
  }

  // State for the filtered articles after applying date filter
  // const [filteredArticles, setFilteredArticles] = useState([]);

  // State for the start and end date for the filter
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");

  // Handle filtering of articles based on date
  // const handleDateFilter = () => {
  //   const start = startDate ? new Date(startDate).getTime() : 0;
  //   const end = endDate ? new Date(endDate).getTime() : Date.now();

  //   const filtered = articles.filter((article) => {
  //     const publicationDate = new Date(asDate(article.data.date_of_publication)?.toISOString()).getTime();
  //     return publicationDate >= start && publicationDate <= end;
  //   });

  //   setFilteredArticles(filtered);
  // };

  return (
    <div className="max-w-screen-xl mx-auto my-16 px-4">
      {/* <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex gap-4 mb-4 md:mb-0">
          <input
            type="date"
            className="border border-gray-darker p-2 rounded-lg"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className="border border-gray-darker p-2 rounded-lg"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button
          className="bg-primary-purple text-white font-bold py-2 px-4 rounded-lg"
          onClick={handleDateFilter}
        >
          {slice.primary.filter_label}
        </button>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg overflow-hidden shadow-lg max-w-[350px] hover:-translate-y-6 ease-in-out duration-300"
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
              <div className="px-8 py-4 whitespace-normal flex flex-col justify-between">
                <span
                  className={`h-8 w-fit inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium ${categoryPill(article.data.category.data.name)}`}
                >
                  {article.data.category.data.name}
                </span>

                <PrismicRichText
                  field={article.data.title}
                  components={serializer}
                />
                <div>
                  <span className="text-xs text-gray-darker mb-2">
                    {asDate(
                      article.data.date_of_publication
                    )?.toLocaleDateString()}
                  </span>{" "}
                  <span className="text-xs text-gray-darker mb-4">
                    by{" "}
                    {isFilled.contentRelationship(article.data.author)
                      ? article.data.author.data.name
                      : "Anonymous"}
                  </span>
                </div>
              </div>
            </PrismicNextLink>
          </div>
        ))}
      </div>
    </div>
  );
}
