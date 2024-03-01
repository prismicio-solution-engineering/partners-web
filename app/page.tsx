import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { Content } from "@prismicio/client";
import {
  ArticleCarousel,
  FeaturedPartners,
  FeaturesSlice,
  HeroBanner,
  PartnerLogoCarousel,
  PartnershipTiersComponent,
  PartnershipTiersComponentTwo,
  PrismicSlice,
  TimelineComponent,
  CallToActionSection,
  CallToActionTwoColumns,
  CallToActionTwoColumnsMultipleCtas,
  CallToActionSectionWithBackgroundImage,
  FeatureSliceComponentTwoColumns,
  FeatureSliceComponentCentered,
  FeatureSliceComponent,
  FeatureSliceComponentReversed
} from "@/components/generated";

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
      <SliceZone slices={page?.data?.slices} components={components} />
      <HeroBanner/>
      <FeatureSliceComponentTwoColumns/>
      <TimelineComponent/>
      <CallToActionTwoColumnsMultipleCtas/>
      <PartnershipTiersComponentTwo/>
      <FeatureSliceComponentReversed/>
      <FeatureSliceComponent/>
      <CallToActionTwoColumns/>
      <PartnerLogoCarousel/>
      <CallToActionSection/>
      <h2 className="text-center text-2xl">V1</h2>
      <ArticleCarousel />
      <h2 className="text-center text-2xl">Prismic slices</h2>
      <PrismicSlice/>
      <h2 className="text-center text-2xl">New slices</h2>
      <PartnershipTiersComponent/>
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
