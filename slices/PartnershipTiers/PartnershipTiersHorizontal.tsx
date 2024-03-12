import { PrismicRichText } from "@/components/PrismicRichText";
import { createClient } from "@/prismicio";
import { PartnershipTierDocument } from "@/prismicio-types";
import { isFilled, type Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";

const serializer = {
  paragraph: ({ children }) => <p className="text-left text-lg">{children}</p>,
};

const PartnershipTiersHorizontal = async ({
  slice,
}: {
  slice: Content.PartnershipTiersSliceHorizontalCards;
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
    <div className="flex flex-col items-center pt-16 pb-16 my-8 bg-white mt-16 max-w-screen-xl mx-auto px-8">
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex justify-between gap-6">
          {tiers.results.map((tier, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 w-full md:w-1/3 p-6 rounded-lg overflow-hidden ${tier.data.is_featured_tier && "bg-[#E8F8F3]"} shadow-lg `}
              style={{ maxWidth: "360px" }}
            >
              <div className="flex flex-col items-start text-gray-darker">
                <h3 className="text-xl font-sans font-bold">
                  <PrismicText field={tier.data.tier_name} />
                </h3>
                <p className="text-sm mb-6 text-center text-gray-500 min-h-[40px]">
                  <PrismicText field={tier.data.tier_description} />
                </p>
                <ul className="w-full">
                  {tier.data.tier_features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center font-sans mb-[24px]"
                    >
                      <span className="mr-4 text-2xl">
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
    </div>
  );
};

export default PartnershipTiersHorizontal;
