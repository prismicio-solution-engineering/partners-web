import * as prismic from "@prismicio/client";
import clsx from "clsx";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

function CheckIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        "h-6 w-6 flex-none fill-current stroke-current",
        className
      )}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Plan({
  name,
  price,
  description,
  link,
  features,
  featured = false,
}: {
  name: prismic.KeyTextField;
  price: prismic.KeyTextField;
  description: prismic.RichTextField;
  link: prismic.LinkField;
  features: prismic.GroupField;
  featured?: boolean;
}) {
  return (
    <section
      className={clsx(
        "flex flex-col rounded-3xl px-6 sm:px-8 lg:max-w-md",
        featured
          ? "order-first bg-white border-2 border-gray-dark py-8 lg:order-none"
          : "lg:py-8 border-2 border-light-blue-70"
      )}
    >
      <h3 className={clsx("mt-5 font-display text-lg", "text-slate-800")}>
        {name}
      </h3>
      <PrismicRichText
        field={description}
        components={{
          paragraph: ({ children }) => (
            <p
              className={clsx(
                "mt-2 text-base",
                featured ? "text-gray-dark" : "text-gray-base"
              )}
            >
              {children}
            </p>
          ),
        }}
      />
      <p
        className={clsx(
          "order-first font-display text-5xl font-light tracking-tight",
          "text-slate-800"
        )}
      >
        {price}
      </p>
      <div className="mt-4">
        <ul>
          {features.map((feature, idx) => (
            <li key={idx} className="flex flex-col py-2">
              <div className="flex">
                <CheckIcon className="text-primary-green" />
                <span className="ml-4 text-gray-darker">
                  {feature.feature_name}
                </span>
              </div>
              {prismic.isFilled.richText(feature.feature_description) && (
                <div className="ml-10">
                  <PrismicRichText
                    field={feature.feature_description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-sm text-gray-base">{children}</p>
                      ),
                    }}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <PrismicNextLink
        className="mt-8 bg-black group inline-flex items-center justify-center rounded-lg py-3 px-6 text-lg font-bold font-copy focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2bg-gray-darker text-white hover:bg-gray-base transition duration-500 ease-in-out"
        field={link}
      />
    </section>
  );
}
