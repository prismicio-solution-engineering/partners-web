"use client";
import { ReviewsChecklistDocumentData } from "@/prismicio-types";
import { asText } from "@prismicio/client";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { useState } from "react";
import ReviewForm from "./ReviewForm";

export function ReviewTable({ criteria }: ReviewsChecklistDocumentData) {
  const [summaryComments, setSummaryComments] = useState([]);
  const [formData, setFormData] = useState({ /* initial form data */ });

  const handleSelectChange = (e, item, idx) => {
    const status = e.target.value;
    setSummaryComments((prev) => {
      if (status === "Not validated") {
        return [...prev, { idx, item }];
      } else {
        return prev.filter((summaryComment) => summaryComment.idx !== idx);
      }
    });
  };

  const handleFormUpdate = (updatedFormData) => {
    setFormData(updatedFormData);
    console.log(formData)
    // You can also update summaryComments or other state based on the form data
};

  return (
    <>
      <div className="flex flex-row flex-wrap gap-10 p-10">
        {/* Form */}
        <ReviewForm onUpdate={handleFormUpdate} />

        {/* Table */}
        <div className="grow">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Review type, Framework, Agency, project
          </h3>
          <div className="basis-2/3 mt-6 overflow-x-scroll border rounded-lg w-full">
            <div className="w-full overflow-scroll">
              <div className="min-w-full h-96 align-middle sm:px-4 lg:px-6">
                <table className="table-fixed divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 w-[10%] py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Topic
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 w-[30%] px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 w-[5%] px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Priority
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 w-[10%] px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 w-[30%] px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Comment
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {criteria.map((item, idx) => (
                      <tr key={idx}>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {item.topic}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500">
                          <PrismicRichText field={item.name} />
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500">
                          {item.priority}
                        </td>
                        <td className="relative py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                          <select
                            id="status"
                            name="status"
                            className="mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue="Not assessed"
                            onChange={(e) => handleSelectChange(e, item, idx)}
                          >
                            <option>Not assessed</option>
                            <option>Validated</option>
                            <option>Not validated</option>
                          </select>
                        </td>
                        <td
                          className={`px-3 py-4 text-sm text-gray-500 comment-${idx}`}
                        >
                          <textarea
                            id="comment"
                            name="comment"
                            placeholder="Comment"
                            rows={2}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={""}
                          />
                          {/* <div className={`custom-comment comment-${idx}`} contentEditable="true" suppressContentEditableWarning={true}>
                          <PrismicRichText
                            field={item.comment_next}
                            components={{
                              heading2: ({ children }) => (
                                <h2 className="mt-12 mb-6 font-display text-3xl tracking-tight text-gray-900 sm:text-4xl">
                                  {children}
                                </h2>
                              ),
                              heading3: ({ children }) => (
                                <h3 className="mt-10 mb-6 font-display text-2xl tracking-tight text-gray-900 sm:text-3xl">
                                  {children}
                                </h3>
                              ),
                              heading4: ({ children }) => (
                                <h4 className="mt-10 mb-4 font-display text-xl tracking-tight text-gray-900 sm:text-2xl">
                                  {children}
                                </h4>
                              ),
                              heading5: ({ children }) => (
                                <h5 className="mt-10 mb-4 font-display text-lg tracking-tight text-gray-900 sm:text-xl">
                                  {children}
                                </h5>
                              ),
                              heading6: ({ children }) => (
                                <h6 className="mt-10 mb-4 font-display text-md tracking-tight text-gray-900 sm:text-lg">
                                  {children}
                                </h6>
                              ),
                              paragraph: ({ children }) => (
                                <p className="mb-4 prose-lg tracking-tight text-gray-700">
                                  {children}
                                </p>
                              ),
                              // preformatted: ({ node }) => (
                              //   <pre className="my-3 p-2 md:p-6 bg-[#0d1117] rounded-xl shadow-lg">
                              //     <SyntaxHighlighter style={dark} customStyle={{backgroundColor: "#0d1117", borderColor: "#0d1117"}}>
                              //       {node.text}
                              //     </SyntaxHighlighter>
                              //   </pre>
                              // ),
                              list: ({ children }) => (
                                <ul
                                  role="list"
                                  className="marker:text-vibrant-blue list-inside	list-disc prose-lg"
                                >
                                  {children}
                                </ul>
                              ),
                              listItem: ({ children }) => (
                                <li className="mb-4">{children}</li>
                              ),
                              oList: ({ children }) => (
                                <ol
                                  role="list"
                                  className="marker:text-vibrant-blue list-inside list-decimal prose-lg"
                                >
                                  {children}
                                </ol>
                              ),
                              oListItem: ({ children }) => (
                                <li className="mb-4">{children}</li>
                              ),
                              // image: ({ node }) =>
                              //   node.linkTo
                              //     ? `[![${node.alt}](${node.url})](${node.linkTo.url})\n\n`
                              //     : `![${node.alt}](${node.url})\n\n`,
                              // embed: ({ node }) => `${node.oembed.html}\n\n`,
                              embed: ({ node }) => (
                                <div
                                  data-oembed={node.oembed.embed_url}
                                  data-oembed-type={node.oembed.type}
                                  data-oembed-provider={
                                    node.oembed.provider_name
                                  }
                                  // {label(node)}
                                  dangerouslySetInnerHTML={{
                                    __html: node.oembed.html ?? "",
                                  }}
                                  className={`${
                                    node.oembed.type === "video" &&
                                    "youtube-video"
                                  } rounded`}
                                ></div>
                              ),
                              hyperlink: ({ children, node }) => (
                                <PrismicLink
                                  field={node.data}
                                  className="font-semibold text-vibrant-blue underline underline-offset-2 hover:text-light-blue"
                                >
                                  {children}
                                </PrismicLink>
                              ),
                              label: ({ node, children }) => {
                                return (
                                  <>
                                    {node.data.label === "highlight" && (
                                      <span className="text-blue-600">
                                        {children}
                                      </span>
                                    )}
                                    {node.data.label === "inline code" && (
                                      <span className="px-2 py-1 bg-[#f1f1f8] font-code rounded text-sm font-semibold text-black">
                                        {children}
                                      </span>
                                    )}
                                  </>
                                );
                              },
                            }}
                          />
                        </div> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Summary */}
        <div className="grow rounded-lg bg-gray-100 p-4 md:p-6">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Summary
          </h3>
          <ul className="prose-sm list-disc">
            {summaryComments.map(({ item }) => (
              <li key={item.idx}>
                <PrismicRichText
                  field={item.comment_next}
                  components={{
                    heading2: ({ children }) => (
                      <h2 className="mt-12 mb-6 font-display text-3xl tracking-tight text-gray-900 sm:text-4xl">
                        {children}
                      </h2>
                    ),
                    heading3: ({ children }) => (
                      <h3 className="mt-10 mb-6 font-display text-2xl tracking-tight text-gray-900 sm:text-3xl">
                        {children}
                      </h3>
                    ),
                    heading4: ({ children }) => (
                      <h4 className="mt-10 mb-4 font-display text-xl tracking-tight text-gray-900 sm:text-2xl">
                        {children}
                      </h4>
                    ),
                    heading5: ({ children }) => (
                      <h5 className="mt-10 mb-4 font-display text-lg tracking-tight text-gray-900 sm:text-xl">
                        {children}
                      </h5>
                    ),
                    heading6: ({ children }) => (
                      <h6 className="mt-10 mb-4 font-display text-md tracking-tight text-gray-900 sm:text-lg">
                        {children}
                      </h6>
                    ),
                    paragraph: ({ children }) => (
                      <p className="mb-4 prose-lg tracking-tight text-gray-700">
                        {children}
                      </p>
                    ),
                    // preformatted: ({ node }) => (
                    //   <pre className="my-3 p-2 md:p-6 bg-[#0d1117] rounded-xl shadow-lg">
                    //     <SyntaxHighlighter style={dark} customStyle={{backgroundColor: "#0d1117", borderColor: "#0d1117"}}>
                    //       {node.text}
                    //     </SyntaxHighlighter>
                    //   </pre>
                    // ),
                    list: ({ children }) => (
                      <ul
                        role="list"
                        className="marker:text-vibrant-blue list-inside	list-disc prose-lg"
                      >
                        {children}
                      </ul>
                    ),
                    listItem: ({ children }) => (
                      <li className="mb-4">{children}</li>
                    ),
                    oList: ({ children }) => (
                      <ol
                        role="list"
                        className="marker:text-vibrant-blue list-inside list-decimal prose-lg"
                      >
                        {children}
                      </ol>
                    ),
                    oListItem: ({ children }) => (
                      <li className="mb-4">{children}</li>
                    ),
                    // image: ({ node }) =>
                    //   node.linkTo
                    //     ? `[![${node.alt}](${node.url})](${node.linkTo.url})\n\n`
                    //     : `![${node.alt}](${node.url})\n\n`,
                    // embed: ({ node }) => `${node.oembed.html}\n\n`,
                    embed: ({ node }) => (
                      <div
                        data-oembed={node.oembed.embed_url}
                        data-oembed-type={node.oembed.type}
                        data-oembed-provider={node.oembed.provider_name}
                        // {label(node)}
                        dangerouslySetInnerHTML={{
                          __html: node.oembed.html ?? "",
                        }}
                        className={`${
                          node.oembed.type === "video" && "youtube-video"
                        } rounded`}
                      ></div>
                    ),
                    hyperlink: ({ children, node }) => (
                      <PrismicLink
                        field={node.data}
                        className="font-semibold text-vibrant-blue underline underline-offset-2 hover:text-light-blue"
                      >
                        {children}
                      </PrismicLink>
                    ),
                    label: ({ node, children }) => {
                      return (
                        <>
                          {node.data.label === "highlight" && (
                            <span className="text-blue-600">{children}</span>
                          )}
                          {node.data.label === "inline code" && (
                            <span className="px-2 py-1 bg-[#f1f1f8] font-code rounded text-sm font-semibold text-black">
                              {children}
                            </span>
                          )}
                        </>
                      );
                    },
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
