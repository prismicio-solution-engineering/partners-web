"use client";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavigationDocumentData } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices/navigation";
import Modal from "./Modal";

export default function Header({ navigation }: NavigationDocumentData) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white p-4 shadow">
      <div
        className={`${isMobileMenuOpen ? "pt-4 mx-auto flex flex-wrap justify-between" : "container mx-auto flex items-center justify-between"}`}
      >
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-darker w-40">
          <PrismicNextImage
            field={navigation.data.logo}
            fallbackAlt=""
            width={250}
          />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-800 md:hidden w-6"
        >
          {isMobileMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav
          className={`${isMobileMenuOpen ? "block md:hidden w-full" : "hidden md:flex items-center space-x-4"} relative flex justify-between z-100`}
        >
          <div className="flex items-center md:gap-x-12">
            {navigation.data.slices1 && (
              <SliceZone
                slices={navigation.data.slices1}
                components={components}
                context={isMobileMenuOpen}
              />
            )}
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            {/* Search Bar */}
            <div className="flex items-center p-1 mt-4 md:mt-0">
              {/* <input
                type="text"
                className="block w-full border-none py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder={navigation.data.search_bar_placeholder}
              /> */}
              <button
                type="button"
                className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg lg:ml-8"
                onClick={() => setOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center p-1 mt-4 md:mt-0">
              <Modal data={navigation.data} />
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {/* <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <nav className="bg-white p-4">
          <div className="flex items-center border-2 border-gray-300 p-1 mt-4 w-full">
            <input
              type="text"
              className="bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none"
              placeholder="Search"
            />
            <SearchIcon className="h-5 w-5 text-gray-700" />
          </div>
        </nav>
      </div> */}
    </header>
  );
}
