"use client";
import { useState } from "react";
import { Button } from "../Button";
import { ArticleDocument, ArticleDocumentData, ArticlesSliceAutoList, ArticlesSliceList, NavigationDocumentData } from "@/prismicio-types";
import * as prismic from "@prismicio/client";

type ArticlesProps = {
  data: ArticleDocumentData;
};

const getCategoryStyle = (category) => {
  switch (category) {
    case "Best practices":
      return "bg-primary-purple text-white";
    case "Use case":
      return "bg-secondary-blue text-gray-darker";
    // Define more categories and styles here
    default:
      return "bg-gray-darker text-white";
  }
};

export const List = ({
  data,
  slice,
}: {
  data: ArticleDocument[];
  slice: ArticlesSliceAutoList | ArticlesSliceList;
}) => {
  const articles = [
    // Mock articles data
    {
      id: 1,
      title: "Best Practices for Optimizing Web Content with Prismic",
      category: "Best practices",
      date: "February 20, 2024",
      author: {
        name: "Jane Doe",
        picture: "https://source.unsplash.com/random/100x100?face=1",
      },
      image: "https://source.unsplash.com/random/800x600?tech",
    },
    {
      id: 2,
      title: "How to Implement a Multi-language Site with Prismic",
      category: "Use case",
      date: "February 15, 2024",
      author: {
        name: "John Smith",
        picture: "https://source.unsplash.com/random/100x100?face=2",
      },
      image: "https://source.unsplash.com/random/800x600?website",
    },
    // Add more articles here
  ];

  const [filteredCategory, setFilteredCategory] = useState("All");

  const filteredArticles = articles.filter(
    (article) =>
      filteredCategory === "All" || article.category === filteredCategory
  );

  return (
    <div className="flex flex-col items-center my-16">
      {/* <h2 className="text-4xl font-sans font-bold text-gray-darker text-center mb-4">
        Latest Articles
      </h2> */}
      <div className="my-8">
        <button
          className={`mx-4 font-sans font-bold text-base text-gray-darker ${filteredCategory === "All" ? "underline" : ""}`}
          onClick={() => setFilteredCategory("All")}
        >
          All
        </button>
        <button
          className={`mx-4 font-sans font-bold text-base text-gray-darker ${filteredCategory === "Best practices" ? "underline" : ""}`}
          onClick={() => setFilteredCategory("Best practices")}
        >
          Best Practices
        </button>
        <button
          className={`mx-4 font-sans font-bold text-base text-gray-darker ${filteredCategory === "Use case" ? "underline" : ""}`}
          onClick={() => setFilteredCategory("Use case")}
        >
          Use Cases
        </button>
      </div>
      <div className="w-full max-w-screen-xl mx-auto">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col md:flex-row gap-12 items-center mb-10 last:mb-0 bg-white rounded-lg shadow-md p-10 md:p-16"
          >
            <div className="md:w-3/5 px-4 mb-8 md:mb-0">
              <img
                className="w-full h-48 md:h-80 rounded-lg object-cover"
                src={article.image}
                alt={article.title}
              />
            </div>
            <div className="md:w-2/5">
              <div
                className={`inline-block px-3 py-1 text-sm rounded-full ${getCategoryStyle(article.category)}`}
              >
                {article.category}
              </div>
              <h3 className="text-xl font-sans font-bold text-gray-darker mt-2 mb-4">
                {article.title}
              </h3>
              <p className="text-gray-darker font-sans text-sm mb-2">
                {article.date}
              </p>
              <div className="flex items-center mt-4">
                <img
                  className="w-10 h-10 rounded-full object-cover mr-4"
                  src={article.author.picture}
                  alt={article.author.name}
                />
                <p className="text-gray-darker font-sans">
                  {article.author.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
