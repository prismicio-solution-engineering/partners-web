import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@/components/PrismicRichText";

/**
 * Props for `FormSection`.
 */
export type FormSectionProps = SliceComponentProps<Content.FormSectionSlice>;

/**
 * Component for "FormSection" Slices.
 */
const FormSection = ({ slice }: FormSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-[#F5E6FF] py-[64px] flex justify-center"
    >
      <div className="w-full max-w-[1440px] px-[84px] space-y-[48px]">
        <div className="text-center">
          <PrismicRichText
            field={slice.primary.section_title}
            components={{
              heading1: ({ children }) => (
                <h1 className="font-bold text-[64px] leading-[72px] tracking-[-0.03em] text-[#8E44EC] mb-[24px]">
                  {children}
                </h1>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.section_description}
            components={{
              paragraph: ({ children }) => (
                <p className="font-medium text-[22px] leading-[32px] tracking-[-0.01em] text-[#151515]">
                  {children}
                </p>
              ),
            }}
          />
        </div>
        <form className="mx-auto max-w-[640px] space-y-[24px]">
          {slice.items.map((item, index) => (
            <div key={index} className="flex flex-col">
              <label
                htmlFor={item.input_name}
                className="mb-[8px] font-medium text-[16px] text-[#151515]"
              >
                {item.input_label}
              </label>
              {item.input_type === "textarea" ? (
                <textarea
                  id={item.input_name}
                  name={item.input_name}
                  className="w-full px-[16px] py-[12px] text-[18px] leading-[28px] border-2 border-[#8E44EC] rounded-[8px] focus:outline-none focus:border-[#3BBB96]"
                  rows="5"
                  required={item.input_required}
                />
              ) : (
                <input
                  type={item.input_type}
                  id={item.input_name}
                  name={item.input_name}
                  className="w-full px-[16px] py-[12px] text-[18px] leading-[28px] border-2 border-[#8E44EC] rounded-[8px] focus:outline-none focus:border-[#3BBB96]"
                  required={item.input_required}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full px-[16px] py-[12px] text-white bg-[#8E44EC] rounded-[16px] font-bold text-[18px] leading-[24px] hover:bg-[#B382F2] transition-all ease-in-out duration-300"
          >
            {/* Not using FontAwesomeIcon as icon styles/classes are from Prismic */}
            {/* <FontAwesomeIcon icon={faPaperPlane} className="mr-[8px]" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-[8px]"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>

            {slice.primary.submit_button_text}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
