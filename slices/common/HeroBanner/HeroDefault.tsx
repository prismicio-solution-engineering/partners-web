import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";

const serializer = {
  heading1: ({ children }) => (
    <h1 className="text-black text-4xl text-center lg:text-5xl font-headings font-bold">
      {children}
    </h1>
  ),
  paragraph: ({ children }) => (
    <p className="text-silver-darker text-xl text-center">{children}</p>
  ),
};

const HeroDefault = ({ slice }: { slice: Content.HeroBannerSliceDefault }) => {
  return (
    <Container className="md:my-24">
      <div className="flex flex-col items-center gap-6 w-full">
        <PrismicRichText field={slice.primary.title} components={serializer} />
        <PrismicRichText
          field={slice.primary.description}
          components={serializer}
        />
        <div className="flex gap-10">
          {slice.items.map((item, idx) => (
            <Button
              key={idx}
              field={item.cta_link}
              variant={item.cta_type}
              color="black"
            >
              {item.cta_label}
            </Button>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HeroDefault;
