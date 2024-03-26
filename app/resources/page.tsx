import { Metadata } from "next";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Header from "@/components/Header";
import { Content } from "@prismicio/client";
import { PageLayout } from "@/components/PageLayout";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("resources");
  const navigation =
    await client.getSingle<Content.NavigationDocument>("navigation");
  const articlesCategories = await client.getAllByType("article_category");

  return (
    <>
      <Header navigation={navigation} />
      <PageLayout
        title={page.data.page_title}
        description={page.data.description}
      />
      <SliceZone slices={page?.data?.slices} components={components} />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("resources");

  return {
    title: page.data.meta_title ? (
      page.data.meta_title
    ) : (
      <PrismicText field={page.data.page_title} />
    ),
    description: page.data.meta_description ? (
      page.data.meta_description
    ) : (
      <PrismicText field={page.data.description} />
    ),
  };
}
