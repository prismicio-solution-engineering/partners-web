import React from 'react';

const FeaturedPartners = () => {
  // Data for demo purposes. Actual logos and links should come from a source like an API.
  const partners = [
    { id: 1, logo: 'https://source.unsplash.com/random/200x200?sig=1', link: '#partner1' },
    { id: 2, logo: 'https://source.unsplash.com/random/200x200?sig=2', link: '#partner2' },
    { id: 3, logo: 'https://source.unsplash.com/random/200x200?sig=3', link: '#partner3' },
    { id: 4, logo: 'https://source.unsplash.com/random/200x200?sig=4', link: '#partner4' },
    { id: 5, logo: 'https://source.unsplash.com/random/200x200?sig=5', link: '#partner5' },
    { id: 6, logo: 'https://source.unsplash.com/random/200x200?sig=6', link: '#partner6' },
  ];

  return (
    <div className="bg-[#FFFFFF] px-8 py-16 md:px-28">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center font-rational text-4xl md:text-6xl font-bold text-[#151515] leading-snug mb-16">
          Featured Partners
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.link}
              className="flex justify-center items-center p-4 border border-[#EEEEEE] rounded-lg hover:shadow-lg transition-shadow"
            >
              <img
                src={partner.logo}
                alt={`Logo of partner ${partner.id}`}
                className="object-cover h-12 md:h-16"
                style={{ aspectRatio: '1 / 1' }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPartners;