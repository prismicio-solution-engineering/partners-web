import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faClock,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const articles = [
  {
    title: 'Headless CMS: The Future of Content Management',
    author: 'Jane Doe',
    category: 'Technology',
    readTime: '5 min read',
    imageUrl: 'https://source.unsplash.com/random/360x200?technology',
  },
  {
    title: 'Empower Your Marketing with Headless Page Builders',
    author: 'John Smith',
    category: 'Marketing',
    readTime: '7 min read',
    imageUrl: 'https://source.unsplash.com/random/360x200?marketing',
  },
  {
    title: 'Iterate Fast and Build Perfect Sites',
    author: 'Emily White',
    category: 'Development',
    readTime: '4 min read',
    imageUrl: 'https://source.unsplash.com/random/360x200?development',
  },
];

const ArticleCarousel = () => {
  return (
    <div className="bg-quaternary-purple px-[84px] py-[64px]">
      <div className="flex overflow-hidden justify-between">
        <button className="self-center">
          <FontAwesomeIcon icon={faChevronLeft} size="2x" className="text-primary-purple" />
        </button>
        <div className="flex space-x-[48px]">
          {articles.map((article, index) => (
            <div
              className="max-w-[360px] bg-white p-[32px] rounded-[16px] shadow-lg"
              key={index}
            >
              <img src={article.imageUrl} alt={article.title} className="w-full h-[200px] object-cover rounded-t-[16px]" />
              <p className="font-bold mt-[24px]">{article.category}</p>
              <h3 className="font-rational-bold text-[24px] leading-[30px] my-[24px]">{article.title}</h3>
              <div className="flex items-center text-gray-base">
                <FontAwesomeIcon icon={faUser} />
                <span className="text-[18px] leading-[24px] px-[12px]">{article.author}</span>
                <FontAwesomeIcon icon={faClock} />
                <span className="text-[18px] leading-[24px] px-[12px]">{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="self-center">
          <FontAwesomeIcon icon={faChevronRight} size="2x" className="text-primary-purple" />
        </button>
      </div>
    </div>
  );
};

export default ArticleCarousel;