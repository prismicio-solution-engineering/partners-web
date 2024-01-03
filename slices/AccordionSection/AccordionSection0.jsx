import React, { useState } from 'react';

const AccordionSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'What is Prismic?',
      content: 'Prismic is a headless website builder allowing for faster development and iteration cycles, with extensive customization capabilities for developers and marketers.'
    },
    {
      title: 'How does Prismic help my marketing team?',
      content: 'Prismic provides your marketing team with easy-to-use tools to update content and create new pages without needing technical assistance, enabling a greater focus on strategy and content quality.'
    },
    {
      title: 'Is Prismic suitable for enterprise-sized projects?',
      content: 'Yes, Prismic is built to scale and provides robust solutions for enterprise-level projects including multi-language support, dynamic layouts, and powerful integration capabilities.'
    },
  ];

  return (
    <div className="bg-[#F5E6FF] text-center py-16 px-8">
      <h2 className="text-[#8E44EC] text-4xl sm:text-5xl font-bold mb-12">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl mb-8 shadow-md overflow-hidden ${activeIndex === index ? 'shadow-lg ' : ''}`}
            onClick={() => toggleItem(index)}
          >
            <h4 className="text-lg font-semibold p-6 cursor-pointer hover:bg-[#EEEEEE]">{item.title}</h4>
            <div className={`${activeIndex === index ? 'block' : 'hidden'} p-6 border-t text-left text-gray-600`}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionSection;