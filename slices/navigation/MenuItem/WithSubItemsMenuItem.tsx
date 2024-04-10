"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `MenuItem`.
 */
export type MenuItemProps = SliceComponentProps<Content.MenuItemSlice>;

/**
 * Component for "MenuItem" Slices.
 */
const WithSubItemsMenuItem = ({
  slice,
  isMobileMenu,
}: {
  slice: Content.MenuItemSliceWithSubMenu;
  isMobileMenu: boolean;
}): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(isMobileMenu);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {isMobileMenu ? (
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full text-gray-base hover:text-gray-darker py-2"
          >
            {slice.primary.label}
            <ChevronDownIcon
              className={`${
                isDropdownOpen ? "transform rotate-180" : ""
              } w-5 h-5`}
            />
          </button>
          <div className={`${isDropdownOpen ? "block" : "hidden"}`}>
            {slice.items.map((item, idx) => (
              <PrismicNextLink
                field={item.sub_menu_item_link}
                className="block px-4 py-2 text-sm text-gray-base"
              >
                {item.sub_menu_item_label}
              </PrismicNextLink>
            ))}
          </div>
        </div>
      ) : (
        <Menu as="div" className="relative">
          <div
            onMouseOver={() => setIsMobileMenuOpen(true)}
            onMouseLeave={() => setIsMobileMenuOpen(false)}
          >
            <Menu.Button className="text-gray-base hover:text-gray-darker flex items-center">
              {slice.primary.label}
              <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
            <Transition
              as={Fragment}
              show={isMobileMenuOpen}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right right-0 absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {slice.items.map((item, idx) => (
                    <Menu.Item key={idx}>
                      {({ active }) => (
                        <PrismicNextLink
                          field={item.sub_menu_item_link}
                          className={clsx(
                            "block px-4 py-2 text-sm",
                            active ? "bg-silver-light" : "text-gray-base"
                          )}
                        >
                          {item.sub_menu_item_label}
                        </PrismicNextLink>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </div>
        </Menu>
      )}
    </>
  );
};

export default WithSubItemsMenuItem;
