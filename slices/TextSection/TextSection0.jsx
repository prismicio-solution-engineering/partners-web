import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';

const TextSection = () => {
  return (
    <section className="py-20 px-8 bg-[#E8F8F3]">
      <div className="max-w-6xl mx-auto">
        <article className="prose prose-green max-w-none">
          <h2 className="text-[48px] leading-[52px] tracking-[-3%] font-bold text-primary-purple mb-8 md:text-[64px] md:leading-[72px]">
            Rich Text Formatting
          </h2>
          <h3 className="text-[32px] leading-[36px] tracking-[-3%] font-medium text-primary-green">
            Headings for Clarity
          </h3>
          <h4 className="text-[24px] leading-[30px] tracking-[-3%] font-medium text-primary-blue">
            Subheadings for Emphasis
          </h4>
          <h5 className="text-[20px] leading-[26px] tracking-[-3%] font-medium text-primary-pink">
            Additional Information
          </h5>
          <h6 className="text-[18px] leading-[24px] tracking-[-3%] font-semibold text-primary-orange">
            Minor Details
          </h6>

          <p className="text-[22px] leading-[32px] tracking-[-1%] text-[#151515] md:text-[28px] md:leading-[42px]">
            The ability <strong>to format rich text</strong> is <em>vital</em> to create engaging content.
            We can use all the styles: <span className="font-bold text-gray-darker">bold</span>, <span className="italic text-gray-dark">italic</span>, and
            even <a href="#0" className="text-primary-orange no-underline hover:underline">links</a>.
          </p>

          <ul className="list-disc pl-8 text-[18px] leading-[28px] tracking-[-1%] text-gray-base md:text-[22px] md:leading-[32px]">
            <li>Intuitive bullet points</li>
            <li>Informative list items</li>
            <li>Organized content</li>
          </ul>

          <ol className="list-decimal pl-8 text-[18px] leading-[28px] tracking-[-1%] text-gray-base md:text-[22px] md:leading-[32px]">
            <li>First, understand your audience</li>
            <li>Secondly, provide them with value</li>
            <li>Lastly, keep them engaged</li>
          </ol>

          <button className="mt-8 flex items-center text-primary-pink bg-quaternary-pink hover:bg-tertiary-pink font-bold py-2 px-6 border-none rounded-md transition-colors">
            Discover More <ArrowRightIcon className="ml-2 h-6 w-6" />
          </button>
        </article>
      </div>
    </section>
  )
}

export default TextSection;