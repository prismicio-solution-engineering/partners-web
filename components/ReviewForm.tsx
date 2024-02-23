"use-client";

import { useState } from "react";

export default function ReviewForm({ onUpdate }) {
  const [formData, setFormData] = useState({
    agencyName: "",
    mainContactEmail: "",
    accountManager: "Noor",
    communicationChannel: "Slack",
    solutionEngineer: "Dianka",
    projectName: "",
    projectLocation: "Git",
    codeFramework: "Next",
    reviewType: "Slice lilbrary"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "codeFramework" || "reviewType") {
      setFormData((prevFormData) => {
        const updatedFormData = { ...prevFormData, [name]: value };
        onUpdate(updatedFormData); // Call the callback function
        return updatedFormData;
      });
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to send data to the database
    // For example, using fetch or Axios to make a POST request
    console.log("Form Data:", formData);
    // You can replace this console.log with your actual logic to send data
  };

  return (
    <form
      className="basis-full pb-10 border-b border-gray-900/10"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="pb-12 sm:col-span-1 border-r border-gray-900/10 sm:pr-6">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            General Information
          </h3>
          {/* Agency data */}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label
                htmlFor="agency-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Agency name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="agencyName"
                  id="agency-name"
                  value={formData.agencyName}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="main-contact-email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Main contact email address
              </label>
              <div className="mt-2">
                <input
                  id="main-contact-email"
                  name="mainContactEmail"
                  type="email"
                  value={formData.mainContactEmail}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          {/* Account management */}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label
                htmlFor="account-manager"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Account manager
              </label>
              <div className="mt-2">
                <select
                  id="account-manager"
                  name="accountManager"
                  value={formData.accountManager}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="Noor">Noor</option>
                  <option value="Charlie">Charlie</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="communication-channel"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Main communication channel
              </label>
              <div className="mt-2">
                <select
                  id="communication-channel"
                  name="communicationChannel"
                  value={formData.communicationChannel}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="Slack">Slack</option>
                  <option value="Email">Email</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Review management */}
        <div className="pb-12 sm:col-span-1 sm:pl-6">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Review Information
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label
                htmlFor="solution-engineer"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Solution Engineer
              </label>
              <div className="mt-2">
                <select
                  id="solution-engineer"
                  name="solutionEngineer"
                  value={formData.solutionEngineer}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="Alexandre">Alexandre</option>
                  <option value="Dianka">Dianka</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="project-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Project name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="projectName"
                  id="project-name"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8">
            <fieldset className="sm:col-span-1">
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Project location
              </legend>
              <div className="mt-2 flex flex-row gap-x-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="project-location-git"
                    name="projectLocation"
                    type="radio"
                    checked={formData.projectLocation === "Git"}
                    onChange={handleInputChange}
                    value="Git"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="project-location-git"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Git
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="project-location-slack"
                    name="projectLocation"
                    type="radio"
                    checked={formData.projectLocation === "Slack"}
                    onChange={handleInputChange}
                    value="Slack"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="project-location-slack"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Slack
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="project-location-email"
                    name="projectLocation"
                    type="radio"
                    checked={formData.projectLocation === "Email"}
                    onChange={handleInputChange}
                    value="Email"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="project-location-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset className="sm:col-span-1">
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Framework
              </legend>
              <div className="mt-2 flex flex-row gap-x-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="code-framework-next"
                    name="codeFramework"
                    type="radio"
                    checked={formData.codeFramework === "Next"}
                    onChange={handleInputChange}
                    value="Next"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="code-framework-next"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Next
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="code-framework-nuxt"
                    name="codeFramework"
                    type="radio"
                    checked={formData.codeFramework === "Nuxt"}
                    onChange={handleInputChange}
                    value="Nuxt"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="code-framework-nuxt"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nuxt
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="code-framework-sveltekit"
                    name="codeFramework"
                    type="radio"
                    checked={formData.codeFramework === "SvelteKit"}
                    onChange={handleInputChange}
                    value="SvelteKit"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="code-framework-sveltekit"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    SvelteKit
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="code-framework-other"
                    name="codeFramework"
                    type="radio"
                    checked={formData.codeFramework === "Other"}
                    onChange={handleInputChange}
                    value="Other"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="code-framework-other"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Other
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </form>
  );
}
