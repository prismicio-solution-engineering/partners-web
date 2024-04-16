import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices/resources";
import Header from "@/components/Header";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import { fullArticleQuery } from "@/utils/graphQueries";
import Footer from "@/components/Footer";
import { categoryPillColor } from "@/components/CategoryPill";

type Params = { uid: string };

const serializer = {
  heading1: ({ children }) => (
    <h1 className="text-gray-darker text-4xl lg:text-5xl font-headings font-bold mb-6">
      {children}
    </h1>
  ),
};

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID<Content.ArticleDocument>("article", params.uid, {
      graphQuery: fullArticleQuery,
    })
    .catch(() => notFound());

  const navigation =
    await client.getSingle<Content.NavigationDocument>("navigation");

  return (
    <>
      <Header navigation={navigation} />
      <div className="bg-white px-4 sm:px-6 lg:px-8 my-16 max-w-screen-xl mx-auto flex flex-col gap-16">
        <div className=" flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <div
              className={`h-8 w-fit inline-flex text-center rounded-lg px-3 py-1 font-copy font-semibold text-sm mb-4 ${categoryPillColor(page.data.category.data.name)}`}
            >
              {page.data.category.data.name}
            </div>
            <PrismicRichText field={page.data.title} components={serializer} />
            <p className="font-copy text-lg text-gray-base mb-8">
              {page.data.excerpt}
            </p>
          </div>
          <div className="md:w-1/2">
            <PrismicNextImage
              field={page.data.featured_image}
              width={600}
              height={370}
              className="w-[600px] h-[370px] md:h-auto rounded-lg object-contain bg-silver-base"
            />
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div className="w-1/4">Table Of Content</div>
          <div className="w-3/4">
            <SliceZone slices={page?.data?.slices2} components={components} />
          </div>
        </div>
      </div>
      <Footer navigation={navigation} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("article", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("article");

  return pages.map((page) => {
    return {
      category: page.data.category.uid,
      uid: page.uid,
    };
  });
}
