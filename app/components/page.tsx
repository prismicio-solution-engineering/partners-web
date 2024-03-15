import { createClient } from "@/prismicio";
import Header from "@/components/Header";
import { Content } from "@prismicio/client";
import {
  ArticleCarousel,
  SlideCarouselIndicators,
  NewsletterSubscriptionForm,
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

      {/* <h2 className="mt-16 mb-4 text-center text-purple-600 text-2xl font-bold leading-7 border-t-2 pt-4 sm:truncate sm:text-3xl sm:tracking-tight">
        Article list
      </h2>
      <ArticleListComponent />
      <h2 className="text-center text-2xl">V1</h2>
      <ArticleCarousel />
      <NewsArticleListComponent /> */}
    </>
  );
}
