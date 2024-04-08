import { Button } from "@/components/Button";
import { categoryPillColor, categoryColor } from "@/components/CategoryPill";
import { ProjectDocument } from "@/prismicio-types";
import { getProjectByUid } from "@/utils/getProjectByUid";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

const FullWidthCard = async ({
  slice,
}: {
  slice: Content.ProjectSliceFullWidthCard;
}) => {
  const projectUid: string = isFilled.contentRelationship(slice.primary.project)
    ? slice.primary.project.uid
    : "";

  const project: ProjectDocument =
    projectUid && (await getProjectByUid(projectUid));

  return (
    <div className="w-full mx-auto my-16">
      <div
        className={`flex flex-col md:flex-row gap-12 items-center mb-10 last:mb-0 bg-white rounded-lg max-w-screen-xl mx-auto px-4`}
      >
        <div className="md:w-3/5 mb-8 md:mb-0">
          <PrismicNextImage
            field={project.data.featured_image}
            className={`w-full h-48 md:h-80 rounded-lg object-contain border shadow-lg border-silver-base`}
          />
        </div>
        <div className="md:w-2/5">
          <span
            className={`h-8 w-fit inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium ${categoryPillColor(project.data.category.data.category_name)}`}
          >
            {project.data.category.data.category_name}
          </span>
          <h3 className="text-xl font-sans font-bold text-gray-darker mt-2 mb-4">
            {project.data.project_name}
          </h3>
          <div className="flex items-center mt-4">
            <div className="flex flex-row gap-2">
              <Button field={project.data.source_code_link} variant="link">
                Source Code
              </Button>
              <Button field={project.data.live_project_link} variant="link">
                Live project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthCard;
