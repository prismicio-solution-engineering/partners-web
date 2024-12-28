import clsx from "clsx";
// import { useState } from "react";
import Plan from "./Plan";
import { PricingPlanDocument } from "@/prismicio-types";

export const Plans = ({ plans }: PricingPlanDocument[] ) => {
  // const [isYearlyPricing, setIsYearlyPricing] = useState(true);

  return (
    <div className="flow-root bg-white pb-24 sm:pb-32">
      <div className="-mt-80">
        <div className="w-full flex justify-center gap-6 mb-6">
          <button
            type="button"
            className={clsx(
              "transition-opacity",
              // isYearlyPricing && "opacity-50",
              "text-white"
            )}
            // onClick={() => setIsYearlyPricing(false)}
          >
            {/* {slice.primary.monthly_label} */} Monthly
          </button>
          <button
            type="button"
            className="h-10 w-20 rounded-full bg-white p-1"
            // onClick={() => setIsYearlyPricing(!isYearlyPricing)}
          >
            <span
              className={clsx(
                "block h-8 w-8 rounded-full bg-light-blue transition-transform duration-150",
                // isYearlyPricing && "translate-x-10 transform"
              )}
            />
            <span className="sr-only">Toggle monthly/yearly pricing</span>
          </button>
          <button
            type="button"
            className={clsx(
              "transition-opacity",
              // !isYearlyPricing && "opacity-50",
              "text-white"
            )}
            // onClick={() => setIsYearlyPricing(true)}
          >
            {/* {slice.primary.yearly_label} */} Yearly
          </button>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={clsx(
              "mx-auto grid max-w-md grid-cols-1 gap-8",
              plans?.length === 1
                ? "lg:max-w-4xl lg:grid-cols-1 lg:justify-items-center"
                : plans?.length === 3
                  ? "lg:max-w-5xl lg:grid-cols-3"
                  : "lg:max-w-4xl lg:grid-cols-2"
            )}
          >
            {/* {plans.map((plan) => {
              console.log(plan.data.name);
            })} */}

            {/* Erreur boucle infinie */}
            {/* {plans.map((plan, index) => {
              return (
                // <Plan
                //   key={"plan" + plan.data.name + index}
                //   name={plan.data.name}
                //   price={
                //     isYearlyPricing ? plan.data.price_yearly : plan.data.price
                //   }
                //   description={plan.data.description}
                //   link={plan.data.link}
                //   features={plan.data.features}
                //   lightTheme
                // />
                <div key={index}>toto</div>
              );
            })} */}
            <div
              className={clsx(
                "flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 bg-white ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:flex-row lg:items-center",
                plans?.length === 3 ? "lg:col-span-3" : "lg:col-span-2 "
              )}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
