import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";

const fieldType = (field: prismic.RichTextField | prismic.KeyTextField) => {
  if (prismic.isFilled.richText(field)) {
    return "richText";
  } else if (prismic.isFilled.keyText(field)) {
    return "keyText";
  }
};

export function PageLayout({
  title,
  description,
  featuredImage,
}: {
  title?: prismic.RichTextField;
  description?: prismic.RichTextField;
  featuredImage?: prismic.ImageField;
}) {
  return (
    <>
      <div className="mx-auto max-w-screen-xl mt-16">
        {prismic.isFilled.image(featuredImage) && (
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          />
        )}
        <div>
          {title ? (
            <h1 className="text-5xl font-sans font-bold text-gray-darker text-center">
              {prismic.isFilled.richText(title) ? (
                <PrismicText field={title} />
              ) : null}
            </h1>
          ) : null}
          {description ? (
            <p className="mb-4 text-center text-gray-base font-sans text-lg">
              {prismic.isFilled.richText(description) ? (
                <PrismicText field={description} />
              ) : null}
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
}
