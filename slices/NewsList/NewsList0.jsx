import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const NewsList = () => {
  // Dummy news data
  const newsItems = [
    {
      id: 1,
      title: "Prismic Launches New Feature Set for Faster Iterations",
      date: "April 6, 2023",
      link: "#",
    },
    {
      id: 2,
      title: "Introducing Improved Collaboration Tools for Teams",
      date: "March 30, 2023",
      link: "#",
    },
    {
      id: 3,
      title: "Upcoming Webinar: Harnessing the Power of Headless CMS",
      date: "March 22, 2023",
      link: "#",
    },
    // Add more news items as needed
  ];

  return (
    <section className="bg-[#E8F8F3] pt-32 pb-32 md:pt-64 md:pb-64">
      <div className="max-w-6xl mx-auto px-6 md:px-24">
        <h1 className="text-[64px] md:text-[48px] leading-[72px] md:leading-[52px] font-bold text-[#151515] tracking-[-0.03em] mb-16 md:mb-32 text-center">
          Latest News & Updates
        </h1>
        <div className="grid grid-cols-1 gap-y-16 md:gap-y-24">
          {newsItems.map((newsItem) => (
            <a
              key={newsItem.id}
              href={newsItem.link}
              className="flex items-start p-6 bg-white rounded-lg shadow transition-all hover:shadow-md"
            >
              <div className="text-orange-600 mr-6">
                {/* <FontAwesomeIcon icon={faNewspaper} size="3x" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clipRule="evenodd" />
                  <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
                </svg>

              </div>
              <div>
                <h2 className="text-[32px] md:text-[24px] leading-[36px] md:leading-[30px] font-medium text-[#151515] tracking-[-0.03em]">
                  {newsItem.title}
                </h2>
                <p className="text-[18px] md:text-[16px] leading-[28px] md:leading-[24px] text-gray-dark tracking-[-0.01em] mt-4">
                  {newsItem.date}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsList;