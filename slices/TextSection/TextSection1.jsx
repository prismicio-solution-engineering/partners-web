import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const TextSection = () => {
  return (
    <section className="p-8 bg-[#E8F8F3]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold leading-snug text-center text-[#59B5F8] lg:text-6xl mb-8">
          Engaging Rich Content
        </h2>
        <div className="prose prose-lg text-[#151515]">
          <p className="text-lg font-medium mb-6 leading-relaxed">
            Prismic is a content management system that empowers teams to build web experiences that just keep getting better. With support for rich text and all modern web formats, Prismic ensures your content is as dynamic as your vision.
          </p>
          <h3 className="text-2xl font-medium mb-4 text-[#ED6B22] lg:text-3xl">
            Start with Bullet Points
          </h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Effortless Editing</li>
            <li>Versatile Integration</li>
            <li>Scalable Architecture</li>
          </ul>
          <h3 className="text-2xl font-medium mb-4 text-[#ED6B22] lg:text-3xl">
            Numbering is Key
          </h3>
          <ol className="list-decimal pl-5 mb-6 space-y-2">
            <li>Create captivating content</li>
            <li>Design with flexibility</li>
            <li>Deliver outstanding experiences</li>
          </ol>
          <h4 className="text-xl font-medium mb-4 text-[#8E44EC] lg:text-2xl">
            Highlight with Headings
          </h4>
          <h5 className="text-lg font-medium mb-4 text-[#3BBB96] lg:text-xl">
            Medium Subheading
          </h5>
          <p className="mb-6 font-medium italic">
            Italicize to Emphasize
          </p>
          <p className="mb-6 font-medium underline">
            Underline for Importance
          </p>
          <a href="/" className="text-blue-600 font-bold hover:text-blue-800">
            Link To More
          </a>
          <p className="flex items-center mt-6">
            <FontAwesomeIcon icon={faCircle} className="mr-2 text-purple-600" />
            Complete with Icons
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextSection;