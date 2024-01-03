import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {
  // This array should be dynamic in a full application, potentially fetched from an API
  const steps = [
    {
      id: 1,
      name: 'Step 1',
      description: 'This is the first step of the process.',
    },
    {
      id: 2,
      name: 'Step 2',
      description: 'This is the second step of the process.',
    },
    {
      id: 3,
      name: 'Step 3',
      description: 'This is the third step of the process.',
    },
    {
      id: 4,
      name: 'Step 4',
      description: 'This is the final step of the process.',
    },
  ];

  return (
    <div className="bg-[#FFFFFF] p-8 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-gray-300 before:content-['']">
          {steps.map((step, index) => (
            <div key={step.id} className="flex mb-8 items-center last:mb-0">
              <div className={`w-1/2 ${index % 2 ? 'order-last' : ''} px-4 text-right`}>
                <h3 className="font-bold text-[#8E44EC] text-lg lg:text-2xl mb-4">{step.name}</h3>
                <p className="text-sm lg:text-base text-gray-700">{step.description}</p>
              </div>
              <div className="w-8 h-8 lg:w-16 lg:h-16 flex items-center justify-center bg-[#8E44EC] rounded-full mx-10">
                <FontAwesomeIcon icon={faCircle} className="text-white text-xs lg:text-lg" />
              </div>
              <div className={`w-1/2 ${index % 2 ? 'order-first' : ''} px-4`}>
                {index % 2 === 0 && (
                  <h3 className="font-bold text-[#8E44EC] text-lg lg:text-2xl mb-4 text-left">{step.name}</h3>
                )}
                {index % 2 === 0 && (
                  <p className="text-sm lg:text-base text-gray-700 text-left">{step.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;