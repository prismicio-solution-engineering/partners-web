import { Grid } from "@/components/Articles/Grid";
import { HorizontalScroll } from "@/components/Articles/HorizontalScroll";
import { List } from "@/components/Articles/List";
import { PrismicRichText } from "@/components/PrismicRichText";
import { getArticles } from "@/utils/getArticles";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Articles`.
 */
export type ArticlesProps = SliceComponentProps<Content.ArticlesSlice>;

/**
 * Component for "Articles" Slices.
 */
const Articles = async ({ slice }: ArticlesProps): JSX.Element => {

  
  return (
    <>
      <div className="flex flex-col items-center my-16">
        <PrismicRichText field={slice.primary.title} />
        <div className="w-full mx-auto">
          {slice.variation ===
            ("autoHorizontalScroll" || "horizontalScroll") && (
            <HorizontalScroll slice={slice} />
          )}
          {slice.variation === "autoFilterableGrid" && (
            <Grid slice={slice} />
          )}
          {/* {slice.variation === ("autoList" || "list") && (
            <List slice={slice} data={await getArticles(articleQuery, slice.primary.number_of_articles ? slice.primary.number_of_articles : 100)} />
          )} */}
        </div>
      </div>
    </>
  );
};

export default Articles;
