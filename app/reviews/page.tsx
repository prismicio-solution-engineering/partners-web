import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { Content } from "@prismicio/client";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("reviews").catch(() => notFound());
  const navigation = await client.getSingle<Content.NavigationDocument>("navigation");

  return (
    <>
      <Header navigation={navigation} />
      <SliceZone slices={page?.data?.slices} components={components} />;
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("reviews");

  return {
    title: page?.data?.meta_title,
    description: page?.data?.meta_description,
  };
}
