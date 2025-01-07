import { Container } from "@/components/Container";
import { PrismicRichText } from "@/components/PrismicRichText";
import { createClient } from "@/prismicio";
import { isFilled, type Content } from "@prismicio/client";
import TiersTable from "./TiersTable";

const Table = async ({
  slice,
}: {
  slice: Content.PartnershipTiersSliceTable;
}) => {
  const client = createClient();

  const tiersUids: string[] = slice.primary.tiers.map((item) => {
    if (isFilled.contentRelationship(item.tier)) {
      return item.tier.uid!;
    }
    return "";
  });

  // returns errors
  const tiers = await client.getByUIDs<Content.PartnershipTierDocument>(
    "partnership_tier",
    tiersUids,
    {
      graphQuery: `
      {
        partnership_tier {
          tier_name
          tier_description
          table_items {
            description
            is_checked
            item
          }
        }
      }
      `,
    }
  );

  const tableItems = await client.getAllByType("tier_table_item", {
    graphQuery: `
    {
      tier_table_item {
        ...tier_table_itemFields
        category {
          ...ontier_table_category {
            name
          }
        }
      }
    }
    `,
  });

  return (
    <Container className="flex flex-col items-center bg-white">
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
      <div className="w-full">
        <TiersTable tiers={tiers.results} rows={tableItems} />
      </div>
    </Container>
  );
};

export default Table;
