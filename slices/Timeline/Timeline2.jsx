import React from 'react';

const Timeline = () => {
  const timelineData = [
    {
      stepName: 'Start',
      description: 'This is where we begin the journey, gathering requirements and setting the goals.',
      side: 'right',
    },
    {
      stepName: 'Design',
      description: 'Sketching out the first version of designs for feedback and iteration.',
      side: 'left',
    },
    {
      stepName: 'Development',
      description: 'Turning designs into reality through efficient and scalable code.',
      side: 'right',
    },
    {
      stepName: 'Testing',
      description: 'Ensuring everything works as intended, fixing bugs and improving performance.',
      side: 'left',
    },
    {
      stepName: 'Launch',
      description: 'Going live for the world to see and experience the hard work put in!',
      side: 'right',
    },
  ];

  return (
    <div className="flex flex-col items-center py-16 bg-[#E8F8F3]">
      <div className="max-w-screen-lg w-full px-8 sm:px-24 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#3BBB96]"></div>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`flex ${item.side === 'right' ? 'flex-row-reverse' : 'flex-row'}
                         items-center my-16`}
          >
            <div
              className={`w-1/2 text-[sizes depends on context] ${item.side === 'right' ? 'pl-8' : 'pr-8'}`}
            >
              <div className="text-4xl font-bold text-[#8E44EC] mb-4 leading-tight">{item.stepName}</div>
              <div className="text-base text-[#151515]">{item.description}</div>
            </div>
            <div className="relative w-12 h-12">
              <div className="absolute rounded-full bg-[#3BBB96] w-8 h-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;