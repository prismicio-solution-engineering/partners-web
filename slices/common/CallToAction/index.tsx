import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import CtaDefault from "./CtaDefault";
import CtaTwoColumns from "./CtaTwoColumns";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  switch (slice.variation) {
    case "default":
      return <CtaDefault slice={slice} />;
    case "twoColumns":
      return <CtaTwoColumns slice={slice} />;
  }
};

export default CallToAction;
