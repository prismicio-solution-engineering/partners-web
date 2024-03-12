import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

const FeaturedPartners = () => {
  // Assuming logosList is the array of partner logos URLs and names that you would normally fetch from a backend.
  const logosList = [
    { name: "Partner One", link: "#", logo: "https://source.unsplash.com/random/200x200?sig=1" },
    { name: "Partner Two", link: "#", logo: "https://source.unsplash.com/random/200x200?sig=2" },
    { name: "Partner Three", link: "#", logo: "https://source.unsplash.com/random/200x200?sig=3" },
  ];

  return (
    <section className="bg-silver-base">
      <div className="max-w-screen-xl mx-auto py-12 px-6 sm:px-8 lg:py-24">
        <h2 className="text-center text-[48px] leading-[52px] md:text-[64px] md:leading-[72px] font-bold tracking-[-0.03em] text-[#151515] mb-12">
          Featured Partners
        </h2>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {logosList.map((partner, index) => (
              <a href={partner.link} key={`partner-logo-${index}`} className="transition-transform hover:scale-105">
                <div className="bg-white p-4 rounded-lg h-24 flex justify-center items-center shadow-sm">
                  <img
                    src={partner.logo}
                    alt={`Logo of ${partner.name}`}
                    className="max-h-full max-w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-[#50d71e] text-white px-8 py-2 rounded-md font-semibold tracking-[-0.01em] inline-flex items-center transition-colors hover:bg-[#35b314]">
            See all partners
            <ChevronRightIcon className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPartners;