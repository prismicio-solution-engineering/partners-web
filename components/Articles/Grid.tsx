"use client";
import { useState } from "react";
import { Button } from "../Button";
import {
  ArticleDocument,
  ArticleDocumentData,
  ArticlesSlice,
  ArticlesSliceAutoFilterableGrid,
  NavigationDocumentData,
} from "@/prismicio-types";
import * as prismic from "@prismicio/client";

type ArticlesProps = {
  data: ArticleDocumentData;
};

export const Grid = ({
  data,
  slice,
}: {
  data: ArticleDocument[];
  slice: ArticlesSliceAutoFilterableGrid;
}) => {
  const [articles] = useState([
    {
      id: 1,
      title: "How to Improve Website Conversion Rates with Prismic",
      excerpt:
        "Learn the best practices for boosting your website conversion rates using Prismic...",
      imageUrl: "https://source.unsplash.com/random/800x600?business&1",
      category: "Business of Web Development",
      publicationDate: "2023-07-19",
      author: "Lea Thomas",
      readTime: "6",
    },
    {
      id: 2,
      title: "How to win an award for your website",
      excerpt:
        "Awards can lend credibility to your work. Find out how to make your website stand out...",
      imageUrl: "https://source.unsplash.com/random/800x600?business&2",
      category: "Design Inspiration",
      publicationDate: "2023-01-05",
      author: "Coner Murphy",
      readTime: "7",
    },
    {
      id: 3,
      title: "How much should you charge for a website in 2023?",
      excerpt:
        "Pricing your services can be tricky. Get insights into pricing strategies for this year...",
      imageUrl: "https://source.unsplash.com/random/800x600?business&3",
      category: "Freelancing Career Tips",
      publicationDate: "2022-12-01",
      author: "Alex Trost",
      readTime: "12",
    },
    // You can add more dummy articles here
  ]);

  // State for the filtered articles after applying date filter
  const [filteredArticles, setFilteredArticles] = useState(articles);

  // State for the start and end date for the filter
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Handle filtering of articles based on date
  const handleDateFilter = () => {
    const start = startDate ? new Date(startDate).getTime() : 0;
    const end = endDate ? new Date(endDate).getTime() : Date.now();

    const filtered = articles.filter((article) => {
      const publicationDate = new Date(article.publicationDate).getTime();
      return publicationDate >= start && publicationDate <= end;
    });

    setFilteredArticles(filtered);
  };

  return (
    <div className="container mx-auto my-16 px-4">
      {/* <h2 className="text-4xl font-sans font-bold text-gray-darker text-center mb-12">
        Prismic News Articles
      </h2> */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
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
          Apply Date Filter
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-48 object-cover"
              src={article.imageUrl}
              alt={article.title}
            />
            <div className="p-6">
              <p className="text-xs text-secondary-blue uppercase mb-1">
                {article.category}
              </p>
              <p className="text-xs text-gray-darker mb-2">
                {new Date(article.publicationDate).toLocaleDateString()}
              </p>
              <h3 className="text-lg font-semibold text-gray-darker mb-2">
                {article.title}
              </h3>
              <p className="text-xs text-gray-darker mb-4">
                By {article.author}
              </p>
              <p className="text-xs text-gray-darker">
                {article.readTime} min read
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
