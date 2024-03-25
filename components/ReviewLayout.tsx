"use client";

import { ReviewChecklist } from "./ReviewChecklist";
import { BooleanField, Content, ContentRelationshipField, KeyTextField, RichTextField, SelectField, asText } from "@prismicio/client";
import { Tab } from "@headlessui/react";

export type ChecklistProps = {
  name: RichTextField;
  category: ContentRelationshipField;
  comment_next: RichTextField;
  comment_nuxt: RichTextField;
  comment_sveltkit: RichTextField;
  priority: SelectField;
  is_slice_library: BooleanField;
  is_full_project: BooleanField;
};

export type CategoryProps = {
  category_name: KeyTextField;
};

export default function ReviewLayout({
  criteria,
  page,
}: {
  criteria: ChecklistProps;
  page: Content.ReviewsDocumentData;
}) {
  const tabs = [
    {
      name: "Sample project",
      description: asText(page.sample_project_description),
      current: true,
    },
    {
      name: "Full project",
      description: asText(page.full_project_description),
      current: false,
    },
  ];

  const categories: CategoryProps[] = [
    ...new Set(criteria.map((e) => e.category.data.category_name)),
  ];

  return (
    <div className="max-w-screen-xl mx-auto">

      <Tab.Group>
        <Tab.List className="flex space-x-1 bg-white p-1">
          {tabs.map((tab, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                `
                  w-1/4 border-b-2 py-4 px-1 text-center text-xl outline-0 
                  ${
                    selected
                      ? "border-gray-dark text-gray-dark font-bold"
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
              {tab.description}
              <ReviewChecklist
                criteria={
                  tab.name === "Sample project"
                    ? criteria.filter((item) => item.is_slice_library)
                    : criteria.filter((item) => item.is_full_project)
                }
                categories={categories}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
