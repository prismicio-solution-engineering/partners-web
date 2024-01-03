import React, { useState } from "react";
import { Switch } from '@headlessui/react';

function ChecklistItem({ title, description, image, defaultActive }) {
  const [isActive, setIsActive] = useState(defaultActive);

  return (
    <div className="flex flex-col md:flex-row shadow-sm rounded-lg mb-8 p-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className={`flex-none ${isActive ? 'block' : 'hidden'} md:block w-full max-w-xs md:max-w-none md:w-1/3`}>
        <img className="object-cover h-48 w-full md:h-auto md:rounded-l-lg" src={image} alt={title} />
      </div>
      <div className="md:flex-1 md:pl-8">
        <h3 className="text-2xl md:text-4xl font-bold text-[#50d71e] tracking-tighter mb-2 md:mb-4">{title}</h3>
        <div className={`leading-normal text-lg tracking-tighter ${isActive ? 'block' : 'hidden'}`}>{description}</div>
        <Switch
          checked={isActive}
          onChange={setIsActive}
          className={`${
            isActive ? 'bg-[#50d71e]' : 'bg-gray-200'
          } relative inline-flex items-center h-6 rounded-full w-11 mt-4`}
        >
          <span className="sr-only">Enable item description and image</span>
          <span
            className={`${
              isActive ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
      </div>
    </div>
  );
}

function ChecklistSection() {
  const items = [
    {
      title: "Certification Item 1",
      description: "Description for the first certification item goes here, explaining what needs to be done to complete it.",
      image: "https://source.unsplash.com/random/360x240",
      defaultActive: true,
    },
    {
      title: "Certification Item 2",
      description: "Here is where the explanation for the second certificate item will be placed.",
      image: "https://source.unsplash.com/random/361x241",
      defaultActive: false,
    },
    // ... add more items as needed
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 space-y-8">
      <h2 className="font-bold text-4xl md:text-6xl leading-tight text-center tracking-tighter mb-12" style={{ letterSpacing: '-3%' }}>Certification Checklist</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <ChecklistItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ChecklistSection;