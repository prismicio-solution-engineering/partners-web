import React, { useState } from 'react';

// Sample list data could be fetched from an API or defined locally
const checklistItems = [
  {
    id: 1,
    title: 'Module 1: Introduction',
    description: 'Understanding the basics of headless CMS and the Prismic model.',
    imageUrl: 'https://source.unsplash.com/random/1280x720?technology',
    isVisible: true,
  },
  {
    id: 2,
    title: 'Module 2: Setup and Configuration',
    description: 'Setting up your Prismic environment and configuring your repository.',
    imageUrl: 'https://source.unsplash.com/random/1280x720?setup',
    isVisible: true,
  },
  // More items...
];

const ChecklistItem = ({ title, description, imageUrl, isVisible, onToggleVisibility }) => {
  return (
    <div className="bg-[#E8F8F3] rounded-lg shadow p-6 flex flex-col md:flex-row items-start mb-6">
      <img
        src={imageUrl}
        alt=""
        className={`w-full md:w-1/3 h-56 object-cover rounded-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="md:ml-6 w-full">
        <h3 className="text-primary-green font-bold text-lg leading-6 my-4">{title}</h3>
        <p className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{description}</p>
        <button
          onClick={onToggleVisibility}
          className="mt-4 px-4 py-2 bg-primary-green text-white rounded-lg cursor-pointer hover:bg-secondary-green transition-colors duration-300"
        >
          {isVisible ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
    </div>
  );
};

export default function ChecklistSection() {
  const [items, setItems] = useState(checklistItems);

  const toggleItemVisibility = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, isVisible: !item.isVisible } : item
    );
    setItems(newItems);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8">
        <h1 className="text-center text-[64px] font-bold leading-none text-primary-purple mb-12">Certification Checklist</h1>
        <div className="space-y-12">
          {items.map((item) => (
            <ChecklistItem
              key={item.id}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              isVisible={item.isVisible}
              onToggleVisibility={() => toggleItemVisibility(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}