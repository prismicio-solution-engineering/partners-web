import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NewsList = () => {
  const newsItems = [
    {
      title: 'Prismic launches new integrations',
      date: 'April 10, 2023',
      excerpt: 'Discover how our new integrations can enhance your workflow.',
      link: '#',
    },
    {
      title: 'Update: Prismic UI improvements',
      date: 'April 7, 2023',
      excerpt: 'A series of UI improvements to make your experience smoother.',
      link: '#',
    },
    {
      title: 'Webinar: Headless CMS Strategies',
      date: 'March 30, 2023',
      excerpt: 'Join us for a webinar on effective strategies for headless CMS.',
      link: '#',
    },
  ];

  return (
    <div className="bg-[#E8F8F3] p-10 md:p-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#3BBB96] font-bold text-4xl md:text-[48px] leading-[52px] md:leading-[72px] tracking-[-3%] mb-16 text-center">
          Latest News & Updates
        </h2>
        <div className="space-y-16">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-[16px] p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start"
            >
              <div className="flex-grow">
                <h3 className="font-bold text-[24px] md:text-[32px] leading-[30px] md:leading-[36px] tracking-[-3%] text-[#151515] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#505050] text-[18px] md:text-[22px] leading-[24px] md:leading-[32px] tracking-[-1%] mb-8">
                  {item.date}
                </p>
                <p className="text-[#303030] text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] tracking-[-1%]">
                  {item.excerpt}
                </p>
              </div>
              <a
                href={item.link}
                className="mt-8 md:mt-0 bg-[#3BBB96] text-white font-medium rounded-[8px] py-3 px-8 inline-flex items-center"
              >
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-2">
                  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>

              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;