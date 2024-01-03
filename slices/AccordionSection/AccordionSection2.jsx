import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const AccordionSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: 'What is the purpose of Prismic?',
      content: 'Prismic is a headless page builder designed for developers and marketers to collaborate efficiently, enabling rapid deployment and iterative improvements.'
    },
    {
      title: 'How does Prismic enhance website performance?',
      content: 'By using Prismic, you can build highly optimized websites that load quickly and offer an excellent user experience.'
    },
    {
      title: 'Is Prismic suitable for large-scale projects?',
      content: 'Yes, Prismic is built to handle projects of any size, whether small landing pages or large-scale enterprise websites.'
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  const isActive = (index) => activeIndex === index;

  return (
    <div className="bg-[#FFFFFF] p-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-6">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`bg-[#E8F8F3] p-6 rounded-lg transition-all duration-300 ease-in-out ${
                isActive(index) && 'shadow-md'
              }`}
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleAccordion(index)}
              >
                <h6 className="text-2xl font-bold text-[#3BBB96] tracking-[-3%]">
                  {item.title}
                </h6>
                <ChevronDownIcon
                  className={`w-6 h-6 text-[#3BBB96] transition-transform ${
                    isActive(index) ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`mt-4 text-base leading-7 tracking-[-1%] overflow-hidden transition-all duration-500 ease-in-out ${
                  isActive(index) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                {isActive(index) && <p>{item.content}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;