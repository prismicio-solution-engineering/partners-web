"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `MenuItem`.
 */
export type MenuItemProps = SliceComponentProps<Content.MenuItemSlice>;

/**
 * Component for "MenuItem" Slices.
 */
const DefaultMenuItem = ({
  slice,
  isMobileMenu,
}: {
  slice: Content.MenuItemSliceDefault;
  isMobileMenu: boolean;
}): JSX.Element => {
  return (
    <>
      {isMobileMenu ? (
        <PrismicNextLink
          field={slice.primary.link}
          className="block text-gray-base hover:text-gray-darker py-2"
        >
          {slice.primary.label}
        </PrismicNextLink>
      ) : (
        <PrismicNextLink
          field={slice.primary.link}
          className="text-gray-base hover:text-gray-darker block mt-4 md:mt-0"
        >
          {slice.primary.label}
        </PrismicNextLink>
      )}
    </>
  );
};

export default DefaultMenuItem;
