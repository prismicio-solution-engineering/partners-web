import { CheckIcon, XIcon } from "@heroicons/react/outline";
import { asText, type Content } from "@prismicio/client";
import { Fragment } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TiersTable({
  tiers,
  rows,
}: {
  tiers: Content.PartnershipTierDocument[];
  rows: Content.TierTableItemDocument[];
}) {
  const sectionOrder = [
    "Eligibility",
    "Enablement",
    "Enterprise Sales",
    "Marketing",
    "Support",
  ];

  // Helper function to group rows by category
  const groupItemsByCategory = (rows: Content.TierTableItemDocument[]) => {
    return rows.reduce((acc, row) => {
      const category:
        | "Eligibility"
        | "Enablement"
        | "Enterprise Sales"
        | "Marketing"
        | "Support" = row.data.category.data.name;
      if (!acc[category]) acc[category] = [];
      acc[category].push({
        id: row.id,
        name: row.data.name,
        description: row.data.description,
      });
      return acc;
    }, {});
  };

  // Transform data into sections and features
  const transformDataForTable = (
    tiers: Content.PartnershipTierDocument[],
    rows: Content.TierTableItemDocument[]
  ) => {
    const groupedItems = groupItemsByCategory(rows);

    // Create sections with features
    let sections = Object.keys(groupedItems).map((categoryName) => {
      const features = groupedItems[categoryName].map((item) => {
        const tiersMapping = tiers.reduce((acc, tier) => {
          const tierItem = tier.data.table_items.find(
            (tierItem) => tierItem.item.id === item.id
          );
          acc[tier.data.tier_name[0].text] = tierItem
            ? tierItem.is_checked && !tierItem.description
              ? { is_checked: true }
              : { description: tierItem.description }
            : false;
          return acc;
        }, {});
        return {
          name: item.name,
          description: item.description,
          tiers: tiersMapping,
        };
      });

      return { name: categoryName, features };
    });

    // Sort sections
    sections = sections.sort((a, b) => {
      const indexA = sectionOrder.indexOf(a.name);
      const indexB = sectionOrder.indexOf(b.name);
      return indexA - indexB;
    });

    // Map tier names for the header
    const tierNames = tiers.map((tier) => ({
      id: tier.id,
      name: asText(tier.data.tier_name),
    }));

    return { sections, tiers: tierNames };
  };

  const { sections, tiers: tierNames } = transformDataForTable(tiers, rows);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* xs to lg */}
        <section
          aria-labelledby="mobile-comparison-heading"
          className="lg:hidden"
        >
          <h2 id="mobile-comparison-heading" className="sr-only">
            Tiers comparison table
          </h2>

          <div className="mx-auto max-w-2xl space-y-16">
            {tiers.map((tier) => (
              <div key={tier.id} className="border-t border-gray-900/10">
                <div
                  className={
                    "border-transparent -mt-px w-72 border-t-2 pt-10 md:w-80"
                  }
                >
                  <h3 className={"text-gray-darker text-lg font-semibold"}>
                    {asText(tier.data.tier_name)}
                  </h3>
                </div>

                <div className="mt-10 space-y-10">
                  {sections.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="text-base font-semibold text-gray-900">
                        {section.name}
                      </h4>
                      <div className="relative mt-6">
                        <div
                          className={
                            "ring-1 ring-gray-900/10 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0"
                          }
                        >
                          <dl className="divide-y divide-gray-200 text-base">
                            {section.features.map(
                              (feature, featureIdx: number) => (
                                <div
                                  key={featureIdx}
                                  className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                                >
                                  <dt className="pr-4 text-gray-dark">
                                    {feature.name}
                                    <div className="pr-4 text-silver-darker">
                                      {feature.description}
                                    </div>
                                  </dt>
                                  <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                    {typeof feature.tiers[
                                      asText(tier.data.tier_name)
                                    ] === "string" ? (
                                      <span className="text-gray-900">
                                        {
                                          feature.tiers[
                                            asText(tier.data.tier_name)
                                          ]
                                        }
                                      </span>
                                    ) : (
                                      <>
                                        {feature.tiers[
                                          asText(tier.data.tier_name)
                                        ]?.description ? (
                                          <div className="text-center text-base text-gray-dark">
                                            {
                                              feature.tiers[
                                                asText(tier.data.tier_name)
                                              ]?.description
                                            }
                                          </div>
                                        ) : feature.tiers[
                                            asText(tier.data.tier_name)
                                          ]?.is_checked ? (
                                          <CheckIcon
                                            aria-hidden="true"
                                            className="h-6 w-6 mx-auto text-primary-green"
                                          />
                                        ) : (
                                          <XIcon
                                            aria-hidden="true"
                                            className="h-6 w-6 mx-auto text-primary-orange"
                                          />
                                        )}

                                        <span className="sr-only">
                                          {feature.tiers[
                                            asText(tier.data.tier_name)
                                          ]?.is_checked
                                            ? "Included"
                                            : "Not included"}{" "}
                                          in {asText(tier.data.tier_name)}
                                        </span>
                                      </>
                                    )}
                                  </dd>
                                </div>
                              )
                            )}
                          </dl>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* lg+ */}
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            <table className="w-full table-auto border-separate border-spacing-x-4 text-left relative">
              <caption className="sr-only">Tiers comparison table</caption>
              {/* <colgroup> with table-fixed
                <col className="w-2/6" />
                <col className="w-1/6" />
                <col className="w-1/6" />
                <col className="w-1/6" />
                <col className="w-1/6" />
              </colgroup> */}
              <thead className="text-center bg-white sticky top-0 z-20">
                <tr>
                  <td />
                  {tierNames.map((tier) => (
                    <th
                      key={tier.id}
                      scope="col"
                      className="px-6 pt-6 xl:px-8 xl:pt-8"
                    >
                      <div className="text-lg font-semibold text-gray-darker">
                        {tier.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sections.map((section, idx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={tierNames.length + 1}
                        className={classNames(
                          idx === 0 ? "pt-8" : "pt-16",
                          "pb-4 font-copy text-lg text-gray-base"
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-4 mt-4 h-px bg-gray-dark/20" />
                      </th>
                    </tr>
                    {section.features.map((feature, featureIdx: number) => (
                      <tr key={featureIdx}>
                        <th scope="row" className="py-4 font-semibold">
                          <div className="font-copy text-base text-gray-base">
                            {feature.name}
                          </div>
                          <div className="mt-1 text-sm text-gray-500">
                            {feature.description}
                          </div>
                          <div className="absolute inset-x-4 mt-4 h-px bg-silver-darker/20" />
                        </th>
                        {tiers.map((tier) => (
                          <td
                            key={tier.id}
                            className="px-6 py-4 xl:px-8 text-center mx-auto"
                          >
                            {typeof feature.tiers[
                              asText(tier.data.tier_name)
                            ] === "string" ? (
                              <div className="text-center text-sm/6 text-gray-500">
                                {feature.tiers[asText(tier.data.tier_name)]}
                              </div>
                            ) : (
                              <>
                                {feature.tiers[asText(tier.data.tier_name)]
                                  ?.description ? (
                                  <div className="text-center text-base text-gray-dark">
                                    {
                                      feature.tiers[asText(tier.data.tier_name)]
                                        ?.description
                                    }
                                  </div>
                                ) : feature.tiers[asText(tier.data.tier_name)]
                                    ?.is_checked ? (
                                  <CheckIcon
                                    aria-hidden="true"
                                    className="h-8 w-8 flex-none mx-auto text-primary-green"
                                  />
                                ) : (
                                  ""
                                )}

                                <span className="sr-only">
                                  {feature.tiers[asText(tier.data.tier_name)]
                                    ?.is_checked
                                    ? "Included"
                                    : "Not included"}{" "}
                                  in {asText(tier.data.tier_name)}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
