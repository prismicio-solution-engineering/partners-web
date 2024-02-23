import { createClient } from "@/prismicio";
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
  PartnershipProcessComponentVerticalTimeline,
  PartnershipProcessComponent,
  PrismicSlice,
  TimelineComponent,
  CallToActionSection,
  CallToActionTwoColumns,
  CallToActionTwoColumnsMultipleCtas,
  CallToActionSectionWithBackgroundImage,
  FeatureSliceComponentTwoColumns,
  FeatureSliceComponentCentered,
  FeatureSliceComponent,
  PartnershipProcessComponentAsymmetric,
  PrismicCta,
  FAQSection,
  AccordionComponent,
  AccordionComponentWithImage,
  AccordionComponentTwoColumns,
  TestimonialsSlider,
  TestimonialSingle,
  SlidesComponent,
  SlidesComponentAlternated,
  SlidesComponentSimple,
  SlidesComponentSlider,
  SlidesCarouselComponent,
  SlideCarousel,
  SlideCarouselIndicators,
  NewsletterSubscriptionForm,
  AuthForm,
  ArticleListComponent,
  NewsArticleListComponent,
} from "@/components/generated";

export default async function Page() {
  const client = createClient();
  const navigation =
    await client.getSingle<Content.NavigationDocument>("navigation");

  return (
    <>
      <Header navigation={navigation} />

      <h2 className="mt-16 mb-4 text-center text-purple-600 text-2xl font-bold leading-7 border-t-2 pt-4 sm:truncate sm:text-3xl sm:tracking-tight">
        Hero banners
      </h2>
      <HeroBanner />

      <h2 className="mt-16 mb-4 text-center text-purple-600 text-2xl font-bold leading-7 border-t-2 pt-4 sm:truncate sm:text-3xl sm:tracking-tight">
        CTAs
      </h2>
      <CallToActionTwoColumnsMultipleCtas />
      <CallToActionTwoColumns />
      {/* New slice */}
      <CallToActionSection />
      {/* New slice */}
      <CallToActionSectionWithBackgroundImage />
      <PrismicCta />

      <h2 className="mt-16 mb-4 text-center text-purple-600 text-2xl font-bold leading-7 border-t-2 pt-4 sm:truncate sm:text-3xl sm:tracking-tight">
        Timelines
      </h2>
      <TimelineComponent />
      <PartnershipProcessComponentVerticalTimeline />
      <PartnershipProcessComponent />
      <PartnershipProcessComponentAsymmetric />

      <h2 className="mt-16 mb-4 text-center text-purple-600 text-2xl font-bold leading-7 border-t-2 pt-4 sm:truncate sm:text-3xl sm:tracking-tight">
        Partnership Tiers
      </h2>
      <PartnershipTiersComponentTwo />
      {/* New slice */}
      <PartnershipTiersComponent />

      <h2 className="mt-16 mb-4 text-center text-purple-600 text-2xl font-bold leading-7 border-t-2 pt-4 sm:truncate sm:text-3xl sm:tracking-tight">
        Features
      </h2>
      {/* New slice */}
      <FeatureSliceComponentTwoColumns />
      {/* New slice */}
      <FeatureSliceComponent />

      <h2 className="mt-16 mb-4 text-center text-purple-600 text-2xl font-bold leading-7 border-t-2 pt-4 sm:truncate sm:text-3xl sm:tracking-tight">
        Featured partners / Logo cloud
      </h2>
      {/* New slice */}
      <PartnerLogoCarousel />

      <h2 className="mt-16 mb-4 text-center text-purple-600 text-2xl font-bold leading-7 border-t-2 pt-4 sm:truncate sm:text-3xl sm:tracking-tight">
        FAQ Acordion
      </h2>
      <FAQSection />
      <AccordionComponent />
      <AccordionComponentWithImage />
      <AccordionComponentTwoColumns />

      <h2 className="mt-16 mb-4 text-center text-purple-600 text-2xl font-bold leading-7 border-t-2 pt-4 sm:truncate sm:text-3xl sm:tracking-tight">
        Testimonials
      </h2>
      <TestimonialsSlider />
      <TestimonialSingle />

      <h2 className="mt-16 mb-4 text-center text-purple-600 text-2xl font-bold leading-7 border-t-2 pt-4 sm:truncate sm:text-3xl sm:tracking-tight">
        Slides
      </h2>
      <SlideCarouselIndicators />

      {/* <SlidesComponentSimple /> */}
      {/* <SlidesComponent/> Like the video and images */}
      {/* <SlidesComponentAlternated/>
      <SlidesComponentSlider/>
      <SlidesCarouselComponent/>
      <SlideCarousel /> */}

      <h2 className="mt-16 mb-4 text-center text-purple-600 text-2xl font-bold leading-7 border-t-2 pt-4 sm:truncate sm:text-3xl sm:tracking-tight">
        Forms
      </h2>
      <NewsletterSubscriptionForm />
      <AuthForm />

      <h2 className="mt-16 mb-4 text-center text-purple-600 text-2xl font-bold leading-7 border-t-2 pt-4 sm:truncate sm:text-3xl sm:tracking-tight">
        Article list
      </h2>
      <ArticleListComponent />      
      <h2 className="text-center text-2xl">V1</h2>
      <ArticleCarousel />

      <NewsArticleListComponent/>
      {/* Make it a news and article list component */}
      <FeaturesSlice />

      <h2 className="text-center text-2xl">Prismic slices</h2>
      <PrismicSlice />
    </>
  );
}
