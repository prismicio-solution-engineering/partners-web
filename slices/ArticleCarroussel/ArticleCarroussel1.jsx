import React from 'react';

const ArticleCarousel = () => {
  const articles = [
    // Dummy articles data, would be replaced by actual data
    {
      id: 1,
      title: 'Efficiently Manage Your Projects with Prismic',
      author: 'Jane Doe',
      category: 'Project Management',
      readTime: '5 mins',
      imageUrl: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      id: 2,
      title: 'Boosting Your Site’s Performance',
      author: 'John Doe',
      category: 'Optimization',
      readTime: '7 mins',
      imageUrl: 'https://source.unsplash.com/random/200x200?sig=2',
    },
    {
      id: 3,
      title: 'Creating Engaging Content with Prismic',
      author: 'Molly Smith',
      category: 'Content Creation',
      readTime: '6 mins',
      imageUrl: 'https://source.unsplash.com/random/200x200?sig=3',
    },
    // ... more articles
  ];

  return (
    <div className="bg-[#FFFFFF] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[64px] leading-[72px] text-[#151515] font-bold text-center mb-10">
          Latest Articles
        </h2>
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
          {articles.map((article) => (
            <div key={article.id} className="bg-[#F7F7F7] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <img
                className="w-full h-48 object-cover"
                src={article.imageUrl}
                alt={article.title}
              />
              <div className="px-6 py-4">
                <h3 className="text-[#8E44EC] font-semibold mb-2">{article.category}</h3>
                <h4 className="text-[24px] leading-[30px] text-[#151515] mb-2">
                  {article.title}
                </h4>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-[#505050]">
                    <span className="font-bold">{article.author}</span> - {article.readTime} read
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCarousel;