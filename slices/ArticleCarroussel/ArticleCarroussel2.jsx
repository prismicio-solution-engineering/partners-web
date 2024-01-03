import React from 'react';

const articles = [
  {
    title: 'Article One',
    author: 'John Doe',
    category: 'Technology',
    readTime: '5 min read',
    imageUrl: 'https://source.unsplash.com/random/300x200',
  },
  {
    title: 'Article Two',
    author: 'Jane Smith',
    category: 'Marketing',
    readTime: '7 min read',
    imageUrl: 'https://source.unsplash.com/random/300x200?sig=1',
  },
  {
    title: 'Article Three',
    author: 'James Johnson',
    category: 'Design',
    readTime: '6 min read',
    imageUrl: 'https://source.unsplash.com/random/300x200?sig=2',
  },
];

const ArticleCard = ({ article }) => {
  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden mx-auto">
      <img className="w-full h-40 object-cover" src={article.imageUrl} alt={article.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{article.title}</div>
        <p className="text-gray-700 text-base">{article.author}</p>
        <p className="text-gray-700 text-base">{article.category}</p>
        <p className="text-gray-700 text-base">{article.readTime}</p>
      </div>
    </div>
  );
};

const ArticleCarousel = () => {
  return (
    <div className="px-6 py-8 bg-[#F5E6FF]">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#8E44EC] leading-tight">
            Latest Articles
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4 mt-8 justify-center">
          {articles.map((article, index) => (
            <div key={index} className="p-4 md:w-1/2 lg:w-1/3">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCarousel;