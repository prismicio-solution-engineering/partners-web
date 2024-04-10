import { Metadata } from "next";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices/resources";
import Header from "@/components/Header";
import { Content } from "@prismicio/client";
import { PageLayout } from "@/components/PageLayout";
import Footer from "@/components/Footer";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("articles");
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
      <Footer navigation={navigation} />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("articles");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
