import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import PartnershipTiersHorizontal from "./PartnershipTiersHorizontal";
import Table from "./Table";

/**
 * Props for `PartnershipTiers`.
 */
export type PartnershipTiersProps = SliceComponentProps<Content.PartnershipTiersSlice>;

/**
 * Component for "PartnershipTiers" Slices.
 */
export default function PartnershipTiers({ slice }: PartnershipTiersProps) {
  switch (slice.variation) {
    case "horizontalCards":
      return <PartnershipTiersHorizontal slice={slice} />;
    case "table":
      return <Table slice={slice} />;
  }
}
