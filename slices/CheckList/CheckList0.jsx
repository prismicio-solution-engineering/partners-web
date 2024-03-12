import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

const items = [
  {
    id: 1,
    title: 'API Integration',
    description:
      'Learn how to integrate with our comprehensive set of API tools for building robust applications.',
    imageUrl: 'https://source.unsplash.com/random/400x300?tech',
  },
  // ... additional items
];

function ChecklistItem({ item }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <div className="flex justify-between items-center p-8 bg-silver-light">
        <h3 className="text-[64px] leading-[72px] font-bold tracking-[calc(-3%)] text-gray-900 lg:text-[48px] lg:leading-[52px]">
          {item.title}
        </h3>
        <Switch
          checked={showDetails}
          onChange={setShowDetails}
          className={`${showDetails ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none`}
        >
          <span
            className={`${showDetails ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>
      {showDetails && (
        <>
          <div className="flex flex-col lg:flex-row">
            <img
              src={item.imageUrl}
              alt=""
              className="w-full max-h-[300px] object-cover lg:w-1/2"
            />
            <p className="text-[18px] leading-[28px] font-medium tracking-[calc(-1%)] text-gray-900 p-8 lg:text-[16px] lg:leading-[24px]">
              {item.description}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default function ChecklistSection() {
  return (
    <section className="py-[160px] px-[84px] bg-quaternary-blue lg:py-[128px] lg:px-[24px]">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[48px] leading-[52px] font-bold tracking-[calc(-3%)] text-center text-gray-900 mb-[64px] lg:text-[32px] lg:leading-[36px]">
          Certification Checklist
        </h2>
        <div className="grid gap-[64px]">
          {items.map((item) => (
            <ChecklistItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}