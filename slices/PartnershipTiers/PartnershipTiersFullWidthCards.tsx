import { PrismicRichText } from "@/components/PrismicRichText";
import { createClient } from "@/prismicio";
import { PartnershipTierDocument } from "@/prismicio-types";
import { isFilled, type Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";

const serializer = {
  paragraph: ({ children }) => <p className="text-left text-lg">{children}</p>,
};

const PartnershipTiersFullWidthCards = async ({
  slice,
}: {
  slice: Content.PartnershipTiersSliceFullWidthCards;
}) => {
  const client = createClient();

  const tiersUids: string[] = slice.items.map((item) => {
    if (isFilled.contentRelationship(item.tier)) {
      return item.tier.uid!;
    }
    return "";
  });

  const tiers = await client.getByUIDs<PartnershipTierDocument>(
    "partnership_tier",
    tiersUids
  );

  return (
    <>
      <div className="flex flex-col items-center pt-16 pb-16 my-16 bg-white">
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
        <div className="w-full max-w-screen-xl mx-auto">
          {tiers.results.map((tier, idx) => (
            <div
              key={idx}
              className={`flex ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center mb-10 gap-12 p-10 md:p-16 last:mb-0 rounded-lg overflow-hidden ${tier.data.is_featured_tier && "bg-[#E8F8F3]"} shadow-lg`}
            >
              <div className="md:w-3/5 px-12">
                <div className="bg-white border-2 border-gray-darker p-9 rounded-lg">
                  <PrismicNextImage
                    className="w-full h-80 rounded-lg object-cover"
                    field={tier.data.tier_image}
                  />
                </div>
              </div>
              <div
                className={`flex-1 p-6 text-gray-darker ${idx % 2 === 0 ? "pl-12" : "pr-12"}`}
              >
                <h3 className="text-xl font-sans font-bold">
                  <PrismicText field={tier.data.tier_name} />
                </h3>
                <p className="text-sm mb-6 text-silver-darker">
                  <PrismicText field={tier.data.tier_description} />
                </p>
                <ul>
                  {tier.data.tier_features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-4">
                      <span className="mr-2 text-2xl">
                        {/* Icons - To refactor with https://github.com/prismicio/prismic-web/blob/8a1689682955fdea9d7d90bebcfa1ffe58d5f8cd/slices/default/FeatureGrid/index.tsx#L152 and https://github.com/prismicio/prismic-web/blob/efc754969588be55651a849e19aeaf1e25764941/componentsV2/ui/Icon.tsx#L55 */}
                        <PrismicNextImage
                          field={feature.feature_icon}
                          width={32}
                          height={32}
                        />
                      </span>
                      <PrismicRichText
                        field={feature.feature_description}
                        components={serializer}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PartnershipTiersFullWidthCards;
