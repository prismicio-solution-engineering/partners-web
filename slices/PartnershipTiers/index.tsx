import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PartnershipTiers`.
 */
export type PartnershipTiersProps =
  SliceComponentProps<Content.PartnershipTiersSlice>;

/**
 * Component for "PartnershipTiers" Slices.
 */
const PartnershipTiers = ({ slice }: PartnershipTiersProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for partnership_tiers (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PartnershipTiers;
