"use client";

import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { PricingPlanDocument } from "@/prismicio-types";
import Plan from "./Plan";
import clsx from "clsx";

/**
 * Props for `Pricing`.
 */
export type PricingProps = SliceComponentProps<Content.PricingSlice>;

/**
 * Component for "Pricing" Slices.
 */
const Pricing = async ({ slice }: PricingProps) => {
  const client = createClient();

  const plansData = slice.primary.plans?.map((item) => ({
    uid: isFilled.contentRelationship(item.plan) ? item.plan.uid! : "",
    isFeatured: item.is_featured || false,
  }));

  const uids = plansData?.map((plan) => plan.uid) || [];

  // const uids: string[] = slice.primary.plans?.map((item) => {
  //   if (isFilled.contentRelationship(item.plan)) {
  //     return item.plan.uid!;
  //   }

  //   return "";
  // });

  const plans = await client
    .getByUIDs<PricingPlanDocument>("pricing_plan", uids, {
      graphQuery: `
      {
        pricing_plan {
          ...pricing_planFields
        }
      }
      `,
    })
    .catch(() => {
      return { results: [] };
    });

  const combinedPlans = plans.results.map((plan) => {
    const matchingData = plansData?.find((p) => p.uid === plan.uid) || {};
    return {
      ...plan.data,
      isFeatured: matchingData.isFeatured || false,
    };
  });

  return (
    <section aria-label="Pricing">
      <div className="relative overflow-hidden">
        <div className="w-full flex flex-col">
          <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="font-display text-3xl tracking-tight text-gray-darker sm:text-4xl">
                    {children}
                  </h2>
                ),
              }}
            />
            <PrismicRichText
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => (
                  <p className="mt-4 text-lg text-gray-base">{children}</p>
                ),
              }}
            />
          </div>
          <div className="flow-root bg-white pb-24 sm:pb-32">
            <div className="-mt-80">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                  className={clsx(
                    "mx-auto grid max-w-md grid-cols-1 gap-8",
                    slice.primary.plans?.length === 1
                      ? "lg:max-w-4xl lg:grid-cols-1 lg:justify-items-center"
                      : slice.primary.plans?.length === 3
                        ? "lg:max-w-5xl lg:grid-cols-3"
                        : "lg:max-w-4xl lg:grid-cols-2"
                  )}
                >
                  {combinedPlans?.map((plan, idx) => (
                    <Plan
                      key={"plan" + plan.name + idx}
                      name={plan.name}
                      price={plan.price}
                      description={plan.description}
                      link={plan.link}
                      features={plan.features}
                      featured={plan.isFeatured}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
