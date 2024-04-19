import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { PrismicRichText } from "@/components/PrismicRichText";
import { Container } from "@/components/Container";

export type TextProps = SliceComponentProps<Content.TextSlice>;

export default function Text({ slice }: TextProps) {
  return (
    <Container className="flex flex-col gap-4">
      <PrismicRichText field={slice.primary.text_section} />
    </Container>
  );
}
