import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Header from "@/components/Header";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@/components/PrismicRichText";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("projects");
  const navigation =
    await client.getSingle<Content.NavigationDocument>("navigation");
  return (
    <>
      <Header navigation={navigation} />
      <PrismicRichText field={page.data.title} />
      <PrismicRichText field={page.data.description} />
      <SliceZone slices={page?.data?.slices} components={components} />
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
