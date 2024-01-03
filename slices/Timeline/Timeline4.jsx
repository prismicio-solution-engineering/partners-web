import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {
  const timelineData = [
    {
      title: 'Step 1',
      description: 'This is the initial step of our process.',
      imageUrl: 'https://source.unsplash.com/random/200x200?sig=1',
      side: 'left',
    },
    {
      title: 'Step 2',
      description: 'The process continues with this essential phase.',
      imageUrl: 'https://source.unsplash.com/random/200x200?sig=2',
      side: 'right',
    },
    {
      title: 'Step 3',
      description: 'After thorough consideration, we reach this milestone.',
      imageUrl: 'https://source.unsplash.com/random/200x200?sig=3',
      side: 'left',
    },
  ];

  return (
    <div className="bg-[#F5E6FF] py-[80px] px-8 lg:px-[84px]">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="relative w-full">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#50d71e] w-2 h-full" />

          {timelineData.map((step, index) => (
            <div
              key={index}
              className={`relative flex ${
                step.side === 'left' ? 'justify-start' : 'justify-end'
              } mb-[48px] last:mb-0`}
            >
              {/* Node */}
              <FontAwesomeIcon
                icon={faCircle}
                className={`absolute left-1/2 transform -translate-x-1/2 text-[#50d71e] text-4xl ${
                  step.side === 'left' ? '-ml-[12px]' : '-mr-[12px]'
                }`}
              />
              {/* Step Content */}
              <div
                className={`max-w-[calc(50%-3rem)] p-4 bg-white rounded-[16px] shadow-lg ${
                  step.side === 'left' ? 'mr-[48px]' : 'ml-[48px]'
                }`}
              >
                <img
                  src={step.imageUrl}
                  alt="Step Visual Representation"
                  className="object-cover w-full h-48 rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h4 className="font-medium text-[24pt] leading-[30pt] tracking-[-3%] text-[#8E44EC] mb-[24px]">
                    {step.title}
                  </h4>
                  <p className="font-medium text-[18pt] leading-[28pt] tracking-[-1%] text-[#303030]">
                    {step.description}
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

export default Timeline;