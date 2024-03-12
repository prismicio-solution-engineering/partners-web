import React, { useState } from 'react';
// Importing Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const ChecklistItem = ({ id, title, description, onToggle, showDetails }) => (
  <div className="flex flex-col my-8">
    <div className="flex items-center justify-between">
      <h3 className="text-primary-purple font-medium text-h3-desktop md:text-h3-mobile leading-tight">
        {title}
      </h3>
      <button onClick={() => onToggle(id)} aria-label="Toggle Details">
        <FontAwesomeIcon
          icon={showDetails ? faToggleOn : faToggleOff}
          className="text-3xl text-primary-purple"
        />
      </button>
    </div>
    {showDetails && (
      <div className="mt-4">
        <p className="text-p-regular-desktop md:text-p-regular-mobile leading-normal mb-4">
          {description}
        </p>
        <div className="w-full overflow-hidden" style={{ maxHeight: '200px' }}>
          <img
            src={`https://source.unsplash.com/random/800x600/?office`}
            alt=""
            className="object-cover w-full h-48"
          />
        </div>
      </div>
    )}
  </div>
);

const Checklist = ({ items }) => {
  const [detailsVisibility, setDetailsVisibility] = useState({});

  const toggleDetails = (id) => {
    setDetailsVisibility((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-12 px-8 md:px-4 bg-[#E8F8F3]">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-primary text-6xl mb-4" />
          <h2 className="text-h2-desktop md:text-h2-mobile text-green-primary font-bold leading-tight">
            Certification Checklist
          </h2>
        </div>
        {items.map((item) => (
          <ChecklistItem
            key={item.id}
            {...item}
            onToggle={toggleDetails}
            showDetails={detailsVisibility[item.id]}
          />
        ))}
      </div>
    </section>
  );
};

export default Checklist;