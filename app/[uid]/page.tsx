import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components as commonComponents } from "@/slices/common";
import { components as navComponents } from "@/slices/navigation";
import { components as resourcesComponents } from "@/slices/resources";
import { components as slidesComponents } from "@/slices/slides";
import Header from "@/components/Header";
import { Content } from "@prismicio/client";
import { PageLayout } from "@/components/PageLayout";
import Footer from "@/components/Footer";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());
  const navigation =
    await client.getSingle<Content.NavigationDocument>("navigation");
  return (
    <>
      <Header navigation={navigation} />
      <PageLayout
        title={page?.data?.title}
        description={page?.data?.description}
      />
      <SliceZone
        slices={page?.data?.slices}
        components={{
          ...commonComponents,
          ...navComponents,
          ...resourcesComponents,
          ...slidesComponents,
        }}
      />
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
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return {
    title: page?.data?.meta_title,
    description: page?.data?.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
