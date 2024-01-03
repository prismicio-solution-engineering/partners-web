import React from 'react';

const Timeline = () => {
  const steps = [
    {
      name: "Step 1",
      description: "This is the first step of the process.",
      side: "left",
    },
    {
      name: "Step 2",
      description: "Second step with a bit more details.",
      side: "right",
    },
    {
      name: "Step 3",
      description: "An important step to highlight.",
      side: "left",
    },
    // Add more steps as needed
  ];

  return (
    <div className="bg-white py-16 px-6 lg:px-24">
      <div className="relative mx-auto max-w-screen-xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 border-l-2 border-gray-300 h-full" />
        {steps.map((step, index) => (
          <div key={index} className={`flex items-center mb-12 ${step.side === 'left' ? 'flex-row-reverse' : ''}`}>
            <div className="w-1/2 px-8 py-2">
              <h6 className="text-primary font-semibold text-lg lg:text-2xl">{step.name}</h6>
              <p className="mt-4 text-gray-700">{step.description}</p>
            </div>
            <div className="flex justify-center w-0 grow">
              <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center border-2 border-white">
                {/* Icon or number */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;