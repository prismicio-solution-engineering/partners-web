import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices/common";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { Content } from "@prismicio/client";
import ReviewLayout from "@/components/ReviewLayout";
import { PrismicRichText } from "@/components/PrismicRichText";
import { reviewsQuery } from "@/utils/graphQueries";
import Footer from "@/components/Footer";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("reviews").catch(() => notFound());
  const checklist = await client
    .getSingle("reviews_checklist", {graphQuery: reviewsQuery})
    .catch(() => notFound());
  const navigation =
    await client.getSingle<Content.NavigationDocument>("navigation");

  return (
    <>
      <Header navigation={navigation} />
      <div className="text-center mx-auto max-w-screen-xl">
        <PrismicRichText field={page.data.page_title} />
        <PrismicRichText field={page.data.description} />
      </div>
      <SliceZone slices={page?.data?.slices} components={components} />;
      <ReviewLayout criteria={checklist.data.criteria} page={page} />
      <Footer navigation={navigation} />
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
