"use client";
import { useState } from "react";
import { Button } from "../Button";
import {
  ArticleDocument,
  ArticleDocumentData,
  ArticlesSliceAutoList,
  ArticlesSliceList,
  NavigationDocumentData,
} from "@/prismicio-types";
import * as prismic from "@prismicio/client";
import React from "react";

type ArticlesProps = {
  data: ArticleDocumentData;
};

export const LargeCards = ({
  data,
  slice,
}: {
  data: ArticleDocument[];
  slice: ArticlesSliceAutoList | ArticlesSliceList;
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
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filterArticlesByDate = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const result = articles.filter((article) => {
      const articleDate = new Date(article.date);
      return articleDate >= start && articleDate <= end;
    });
    setFilteredArticles(result);
  };

  return (
    <div className="flex flex-col items-center my-16">
      {/* <h2 className="text-4xl font-headings font-bold text-gray-darker text-center mb-4">
        Prismic Announcements
      </h2> */}
      <div className="flex justify-center mb-[88px]">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border-2 border-gray-darker p-2 rounded-lg mr-2"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border-2 border-gray-darker p-2 rounded-lg"
        />
        <button
          onClick={filterArticlesByDate}
          className="bg-primary-purple text-white font-bold py-2 px-4 rounded-lg ml-2"
        >
          Filter
        </button>
      </div>
      <div className="w-full max-w-screen-xl mx-auto">
        {filteredArticles.map((article, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row gap-12 items-center mb-10 last:mb-0 bg-[#F5F5F5] rounded-lg p-10 md:p-16"
          >
            <div className="md:w-3/5 px-4 mb-8 md:mb-0">
              <h3 className="text-xl font-headings font-bold text-gray-darker mb-4">
                {article.title}
              </h3>
              <p className="text-gray-darker mb-4">{article.excerpt}</p>
              <span className="text-gray-darker mb-4 block">
                {article.date} - {article.category}
              </span>
              <button className="text-primary-purple font-copy font-bold text-base underline underline-offset-8 hover:underline-offset-4">
                Read more
              </button>
            </div>
            <div className="md:w-2/5 px-12">
              <div className="bg-quaternary-purple border-2 border-gray-darker p-9 rounded-lg">
                <img
                  className="w-full h-80 rounded-lg object-cover"
                  src={article.featuredImage}
                  alt={article.title}
                />
              </div>
            </div>
          </div>
        ))}
        {filteredArticles.length === 0 && (
          <p className="text-lg text-gray-darker">
            No articles found for the selected date range.
          </p>
        )}
      </div>
    </div>
  );
};
