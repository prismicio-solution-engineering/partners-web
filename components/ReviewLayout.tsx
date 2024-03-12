"use client";

import { ReviewChecklist } from "./ReviewChecklist";
import { Content } from "@prismicio/client";
import { Tab } from "@headlessui/react";

const tabs = [
  { name: "Slice Library", current: true },
  { name: "Full project", current: false },
];

export default function ReviewLayout({
  criteria,
}: Content.ReviewsChecklistDocumentData) {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a Review
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <Tab.Group>
        <Tab.List className="flex space-x-1 bg-white p-1">
          {tabs.map((tab, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                `
                  w-1/4 border-b-2 py-4 px-1 text-center text-xl
                  ${
                    selected
                      ? "border-primary-blue text-primary-blue font-bold"
                      : "border-transparent text-silver-darker hover:border-silver-dark hover:text-gray-base"
                  }
                `
              }
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {tabs.map((tab, idx) => (
            <Tab.Panel key={idx}>
              <ReviewChecklist
                criteria={
                  tab.name === "Slice Library"
                    ? criteria.filter((item) => item.is_slice_library)
                    : criteria.filter((item) => item.is_full_project)
                }
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
