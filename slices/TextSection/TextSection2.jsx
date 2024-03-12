import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';

const TextSection = () => {
  return (
    <div className="flex flex-col items-center px-[84px] py-[96px] bg-white min-h-screen text-gray-darker">
      {/* Content Container */}
      <div className="w-full max-w-screen-xl">
        {/* Rich Text Section */}
        <div className="prose prose-xl text-left">
          <h2 className="font-bold text-[48px] leading-[52px] text-primary-purple mb-8">
            Building for the future
          </h2>
          <p className="text-[22px] leading-[32px] mb-8">
            Prismic is committed to helping you create web experiences that stand the test of time. With the flexibility of a headless CMS and our powerful editing tools, content creation is effortless.
          </p>

          <h3 className="text-[32px] leading-[36px] my-8">
            Simplicity at its Peak
          </h3>
          <p className="text-[18px] leading-[28px] mb-8">
            Our approach combines a sleek design with an intuitive interface to ensure a frictionless user experience.
          </p>

          <h4 className="text-[24px] leading-[30px] mt-8 mb-4">
            Key Features
          </h4>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            <li className="text-[18px] leading-[28px]">Iterative Development</li>
            <li className="text-[18px] leading-[28px]">Scalability and Performance</li>
            <li className="text-[18px] leading-[28px]">Intuitive Content Management</li>
          </ul>

          <h5 className="text-[20px] leading-[26px] my-4">
            Seamless Integration
          </h5>
          <ol className="list-decimal pl-5 space-y-2 mb-8">
            <li className="text-[18px] leading-[28px]">API-First Approach</li>
            <li className="text-[18px] leading-[28px]">Framework Agnostic</li>
          </ol>

          <p className="text-[18px] leading-[28px] mb-8 italic">
            Delivering content-rich websites has never been so straightforward.
          </p>

          <a href="#more-info" className="text-[18px] leading-[28px] text-primary-blue underline mb-16">
            Learn more about our approach
          </a>
        </div>

        {/* Dropdown */}
        <div className="relative w-full mb-8">
          <select className="block w-full appearance-none bg-white border border-silver-base text-[#151515] py-4 px-6 rounded-[8px] leading-tight focus:outline-none focus:ring-2 focus:ring-secondary-purple focus:border-transparent" id="grid-state">
            <option>Choose an option</option>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </select>
          <FontAwesomeIcon icon={faChevronDown} className="pointer-events-none absolute right-6 top-5" aria-hidden="true" />
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-primary-purple text-white font-bold py-4 px-8 rounded-[8px] hover:bg-secondary-purple transition-colors duration-200">
            Get Started
          </button>
          <button className="bg-silver-base text-gray-darker font-bold py-4 px-8 rounded-[8px] hover:bg-silver-light transition-colors duration-200">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextSection;