import {
  ResourcesDocument,
} from "@/prismicio-types";

export const ResourcesLayout = (page: ResourcesDocument) => {
  return (
    <div className="flex flex-col items-center my-16">
      <h2 className="text-4xl font-headings font-bold text-gray-darker text-center mb-4">
        Reousrce page with articles, projects in list/grid form and filters
      </h2>
    </div>
  );
};
