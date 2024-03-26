import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { PrismicRichText } from "@/components/PrismicRichText";

export type TextProps = SliceComponentProps<Content.TextSlice>;

export default function Text({ slice }: TextProps) {
  return (
    <section className="max-w-screen-xl px-6 mx-auto flex flex-col gap-4">
      <PrismicRichText field={slice.primary.text_section} />
    </section>
  );
}
