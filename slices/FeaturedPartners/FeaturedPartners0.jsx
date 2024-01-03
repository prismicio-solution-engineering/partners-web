import React from 'react';
// import { FaArrowRight } from 'react-icons/fa';

// Mock list of partner logos with links to their pages
const partners = [
  { name: 'Partner 1', link: '#', logo: 'https://source.unsplash.com/random/100x100?sig=1' },
  { name: 'Partner 2', link: '#', logo: 'https://source.unsplash.com/random/100x100?sig=2' },
  { name: 'Partner 3', link: '#', logo: 'https://source.unsplash.com/random/100x100?sig=3' },
  { name: 'Partner 4', link: '#', logo: 'https://source.unsplash.com/random/100x100?sig=4' },
  { name: 'Partner 5', link: '#', logo: 'https://source.unsplash.com/random/100x100?sig=5' },
  { name: 'Partner 6', link: '#', logo: 'https://source.unsplash.com/random/100x100?sig=6' },
];

const FeaturedPartners = () => {
  return (
    <div className="py-24 px-8 bg-white text-center">
      <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-12 text-black">
        Featured Partners
      </h2>
      <div className="flex justify-center flex-wrap gap-12 mb-12">
        {partners.map((partner, index) => (
          <a
            href={partner.link}
            key={`partner-${index}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-20 object-cover"
              style={{ aspectRatio: '1 / 1' }}
            />
          </a>
        ))}
      </div>
      <div className="text-left inline-block">
        <button className="text-lg sm:text-xl font-semibold tracking-tighter text-white bg-[#50d71e] py-4 px-8 rounded-lg hover:bg-[#45c11a] transition duration-300 ease-in-out flex items-center">
          See all partners
          {/* <FaArrowRight className="ml-2" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-2">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
          </svg>

        </button>
      </div>
    </div>
  );
};

export default FeaturedPartners;