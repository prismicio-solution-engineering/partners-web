import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { Content } from "@prismicio/client";
import { Container } from "@/components/Container";
import { ReviewTable } from "@/components/ReviewTable";

export default async function Page() {
  const client = createClient();
  const checklist = await client.getSingle("reviews_checklist");
  const navigation =
    await client.getSingle<Content.NavigationDocument>("navigation");

  return (
    <>
      <Header navigation={navigation} />
      <ReviewTable criteria={checklist?.data?.criteria} />
    </>
  );
}
