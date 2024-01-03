import React, { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#E8F8F3] py-[64px] px-8 md:px-[84px]">
      <div className="max-w-[1440px] mx-auto grid gap-[48px]">
        <div className="flex justify-center">
          <h1 className="text-[64px] md:text-[48px] leading-[72px] md:leading-[52px] font-bold tracking-[-3%] text-[#151515]">
            Frequently Asked Questions
          </h1>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`shadow-md border border-[#EEEEEE] rounded-lg overflow-hidden ${
              openIndex === index ? 'bg-[#FFFFFF]' : 'bg-[#F7F7F7]'
            }`}
          >
            <button
              className="w-full px-[32px] py-[24px] text-left flex justify-between items-center"
              onClick={() => handleClick(index)}
            >
              <span className="text-[22px] md:text-[16px] leading-[32px] md:leading-[24px] font-bold tracking-[-1%]">
                {`Accordion Title ${index + 1}`}
              </span>
              <i
                className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'} text-[#3BBB96]`}
              />
            </button>
            <div
              className={`transition-max-height duration-700 ease-in-out ${
                openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
              } overflow-hidden`}
            >
              <div className="px-[32px] pb-[24px]">
                <p className="text-[18px] md:text-[16px] leading-[28px] md:leading-[24px] tracking-[-1%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales
                  orci nec ante suscipit, et ullamcorper neque consequat. Donec integer
                  magna at dolor sollicitudin hendrerit consectetur at mi.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;