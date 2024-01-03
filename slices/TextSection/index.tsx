import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { SliceComponentProps } from '@prismicio/react';
import { Content } from '@prismicio/client';

/**
 * Props for `TextSection`.
 */
export type TextSectionProps = SliceComponentProps<Content.TextSectionSlice>;

/**
 * Component for "TextSection" Slices.
 */
const TextSection = ({ slice }: TextSectionProps): JSX.Element => {

  // Check if the slice variation is 'twoColumn'
  const isTwoColumn = slice.variation === 'twoColumn';

  return (
    <section className={`p-8 bg-[#E8F8F3]`}>
      <div className={`max-w-5xl mx-auto  ${isTwoColumn ? 'md:grid md:grid-cols-2 md:gap-4 md:space-x-4' : ''}`}>
        <PrismicRichText
          field={slice.primary.content}
          components={{
            heading2: ({ children }) => <h2 className="text-4xl font-display font-bold leading-snug text-center text-[#59B5F8] lg:text-6xl mb-8">{children}</h2>,
            heading3: ({ children }) => <h3 className="text-2xl font-display font-medium mb-4 text-[#ED6B22] lg:text-3xl">{children}</h3>,
            heading4: ({ children }) => <h4 className="text-xl font-display font-medium mb-4 text-[#8E44EC] lg:text-2xl">{children}</h4>,
            heading5: ({ children }) => <h5 className="text-lg font-display font-medium mb-4 text-[#3BBB96] lg:text-xl">{children}</h5>,
            paragraph: ({ children }) => <p className="prose-lg text-lg font-medium mb-6 text-gray-500 leading-relaxed">{children}</p>,
            list: ({ children }) => <ul className="list-disc pl-5 mb-6 text-gray-500 space-y-2">{children}</ul>,
            oList: ({ children }) => <ol className="list-decimal pl-5 mb-6 text-gray-500 space-y-2">{children}</ol>,
            listItem: ({ children }) => <li>{children}</li>,
            oListItem: ({ children }) => <li>{children}</li>,
            strong: ({ children }) => <strong>{children}</strong>,
            em: ({ children }) => <em>{children}</em>,
            hyperlink: ({ children, node }) => (
              <a href={node.data.url} className="text-blue-600 font-bold hover:text-blue-800">
                {children}
              </a>
            ),
          }}
        />
      </div>
    </section>
  );
};

export default TextSection;