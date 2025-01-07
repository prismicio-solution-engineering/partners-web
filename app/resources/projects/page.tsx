import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices/resources";
import Header from "@/components/Header";
import { Content, isFilled } from "@prismicio/client";
import { PageLayout } from "@/components/PageLayout";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { projectQuery } from "@/utils/graphQueries";
import { categoryPillColor } from "@/components/CategoryPill";
import { Button } from "@/components/Button";
import Footer from "@/components/Footer";
import { PrismicRichText } from "@/components/PrismicRichText";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("projects");
  const navigation =
    await client.getSingle<Content.NavigationDocument>("navigation");
  const projects = await client.getAllByType<
    Content.ProjectDocument & {
      data: {
        category: {
          data: Pick<Content.ProjectCategoryDocument["data"], "category_name">;
        };
      };
    }
  >("project", {
    graphQuery: projectQuery,
  });

  return (
    <>
      <Header navigation={navigation} />
      <PageLayout title={page.data.title} description={page.data.description} />
      <SliceZone slices={page?.data?.slices} components={components} />
      <div className="max-w-screen-xl mx-auto my-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg max-w-[350px] hover:-translate-y-6 ease-in-out duration-300"
            >
              <PrismicNextLink field={project.data.live_project_link}>
                {isFilled.image(project.data.featured_image) ? (
                  <PrismicNextImage
                    className="object-contain w-full border border-silver-base rounded-t-lg"
                    field={
                      isFilled.imageThumbnail(
                        project.data.featured_image.thumbnail
                      )
                        ? project.data.featured_image.thumbnail
                        : project.data.featured_image
                    }
                    width={320}
                    height={720}
                  />
                ) : (
                  <img
                    src="https://images.prismic.io/prismic-partners-web/65e19e9027237c2bb829b42b_illu-library_double-question-marks.png?auto=format,compress"
                    className="w-[350px] h-[200px] object-cover"
                  />
                )}
              </PrismicNextLink>
              <div className="px-8 py-8 flex flex-col grow justify-between">
                <div className="flex flex-col gap-2">
                  <span
                    className={`h-8 w-fit inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium ${categoryPillColor(project.data.category.data.category_name)}`}
                  >
                    {project.data.category.data.category_name}
                  </span>
                  <span className="text-xl font-copy font-bold text-gray-darker mt-2">
                    {project.data.project_name}
                  </span>
                  <div className="h-20 line-clamp-3">
                    <PrismicRichText
                      field={project.data.project_description}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="font-copy text-base text-gray-base">
                            {children}
                          </p>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex flex-row justify-between">
                    <Button
                      field={project.data.source_code_link}
                      variant="link"
                    >
                      Source Code
                    </Button>
                    <Button
                      field={project.data.live_project_link}
                      variant="link"
                    >
                      Live project
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer navigation={navigation} />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("projects");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
