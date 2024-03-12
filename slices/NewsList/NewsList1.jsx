import React from 'react';

const NewsList = () => (
  <div className="py-[80px] px-[24px] md:px-[84px] bg-quaternary-purple">
    <h2
      className="text-[64px] md:text-[48px] leading-[72px] md:leading-[52px] font-bold text-primary-purple tracking-[normal] text-center mb-[64px]"
      style={{
        letterSpacing: '-0.03em',
      }}
    >
      Latest News & Updates
    </h2>
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[48px]">
      {[...Array(6)].map((_, index) => (
        <a
          key={index}
          href="#!"
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-purple rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="aspect-w-4 aspect-h-3 bg-primary-purple">
            <img
              src={`https://source.unsplash.com/random/400x300?sig=${index}`}
              alt={`News ${index + 1}`}
              className="object-cover"
            />
          </div>
          <div className="px-[16px] py-[24px] bg-white">
            <h3
              className="font-medium text-[32px] md:text-[24px] leading-[36px] md:leading-[30px] text-[#151515] mb-[16px]"
              style={{
                letterSpacing: '-0.03em',
              }}
            >
              Prismic Release {index + 1}
            </h3>
            <p
              className="font-medium text-[18px] md:text-[16px] leading-[28px] md:leading-[24px] text-gray-darker mb-[32px]"
              style={{
                letterSpacing: '-0.01em',
              }}
            >
              We're excited to announce a new feature in the Prismic ecosystem that's set to revolutionize the way you build web pages!
            </p>
            <div className="text-left">
              <button
                className="text-white bg-primary-purple hover:bg-secondary-purple focus:outline-none focus:ring focus:ring-primary-purple rounded-[8px] px-[24px] py-[12px] transition-colors duration-300"
              >
                Read more
              </button>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default NewsList;