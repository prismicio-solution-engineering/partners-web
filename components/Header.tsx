"use client";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavigationDocument } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices/navigation";
import Modal from "./Modal";

export default function Header({
  navigation,
}: {
  navigation: NavigationDocument;
}) {
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
          <div
            className={`flex ${isMobileMenuOpen ? "flex-col" : "items-center md:gap-x-12"}`}
          >
            {navigation.data.slices1 && (
              <SliceZone
                slices={navigation.data.slices1}
                components={components}
                context={isMobileMenuOpen}
              />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
