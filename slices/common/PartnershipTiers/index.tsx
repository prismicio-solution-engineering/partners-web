import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import PartnershipTiersHorizontal from "./PartnershipTiersHorizontal";

/**
 * Props for `PartnershipTiers`.
 */
export type PartnershipTiersProps =
  SliceComponentProps<Content.PartnershipTiersSlice>;

/**
 * Component for "PartnershipTiers" Slices.
 */
const PartnershipTiers = ({ slice }: PartnershipTiersProps): JSX.Element => {
  switch (slice.variation) {
    case "horizontalCards":
      return <PartnershipTiersHorizontal slice={slice} />;
  }
};

export default PartnershipTiers;
