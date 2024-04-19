"use client";
import { NavigationDocument } from "@/prismicio-types";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";

export default function Footer({
  navigation,
}: {
  navigation: NavigationDocument;
}) {
  return (
    <footer className="w-full bg-silver-light p-6 text-sm text-gray-dark border-t border-silver-base">
      <nav className="flex lg:items-center space-x-4 relative justify-between">
        <PrismicText field={navigation.data.copyright} />
        <ul className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {navigation.data.links.map((link, idx) => (
            <li key={idx}>
              <PrismicNextLink field={link.link}>
                {link.link_label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
