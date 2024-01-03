import React, { useState } from 'react';

const ToggleContent = ({ title, description, imgUrl }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-gray-300 py-8">
      <div className="flex justify-between items-center">
        <h3 className="text-[32px] leading-[36px] font-medium text-[#151515] tracking-[-3%] lg:text-[24px] lg:leading-[30px]">
          {title}
        </h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#8E44EC] text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B382F2]"
          aria-expanded={isOpen}
          aria-controls="toggle-content"
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && (
        <div className="mt-6 flex lg:flex-col lg:items-start">
          <img
            src={imgUrl}
            alt=""
            className="rounded-lg w-[192px] h-[128px] object-cover lg:w-full lg:h-48 mb-4"
          />
          <p className="text-[#1F1F1F] text-[18px] leading-[28px] font-medium tracking-[-1%] lg:text-[16px] lg:leading-[24px] ml-8 lg:ml-0">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

const ChecklistSection = () => {
  const checklistItems = [
    {
      title: 'Choose Your Certification Path',
      description: 'Identify which certification program aligns with your career goals.',
      imgUrl: 'https://source.unsplash.com/random/192x128?career',
    },
    {
      title: 'Complete Required Training',
      description: 'Attend the necessary training sessions to prepare for the certification examination.',
      imgUrl: 'https://source.unsplash.com/random/192x128?training',
    },
    {
      title: 'Pass The Examination',
      description: 'Successfully pass the exam to obtain your certificate.',
      imgUrl: 'https://source.unsplash.com/random/192x128?exam',
    },
  ];

  return (
    <section className="bg-[#E8F8F3] text-center py-16 px-8 lg:px-24">
      <h2 className="text-[48px] leading-[52px] font-bold text-[#3BBB96] tracking-[-3%] mb-16 lg:text-[32px] lg:leading-[36px]">
        Certification Checklist
      </h2>
      <div className="max-w-4xl mx-auto">
        {checklistItems.map((item, index) => (
          <ToggleContent key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ChecklistSection;