import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components as commonComponents } from "@/slices/common";
import { components as resourcesComponents } from "@/slices/resources";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { Content } from "@prismicio/client";

export default async function Page() {
  const client = createClient();
  const page = await client
    .getSingle<Content.HomeDocument>("home")
    .catch(() => notFound());
  const navigation =
    await client.getSingle<Content.NavigationDocument>("navigation");

  return (
    <>
      <Header navigation={navigation} />
      <SliceZone
        slices={page?.data?.slices}
        components={{
          ...commonComponents,
          ...resourcesComponents,
        }}
      />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page?.data?.meta_title,
    description: page?.data?.meta_description,
  };
}
