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
    <footer className="w-full bg-silver-light p-6 text-sm text-gray-base border-t border-silver-base">
      <nav className="md:flex items-center space-x-4 relative flex justify-between">
        <PrismicText field={navigation.data.copyright} />
        <div className="flex items-center md:gap-x-12">
          <ul className="flex flex-row gap-10">
            {navigation.data.links.map((link, idx) => (
              <li key={idx}>
                <PrismicNextLink field={link.link}>
                  {link.link_label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </footer>
  );
}
