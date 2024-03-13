"use client";
import { useState } from "react";
import { Button } from "./Button";
import { NavigationDocumentData } from "@/prismicio-types";
import * as prismic from "@prismicio/client";

type AuthProps = {
  data: NavigationDocumentData;
};

export const AuthForm = ({ data }: AuthProps) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex flex-col items-center my-16 bg-silver-light rounded-lg p-8 max-w-screen-xl mx-auto shadow-sm">
      <h3 className="text-2xl font-sans font-bold text-gray-darker mb-6">
        {isSignUp ? data.sign_up_title : data.sign_in_title}
      </h3>
      <form className="w-full max-w-md flex flex-col gap-6">
        {isSignUp && (
          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium leading-6 text-gray-darker"
            >
              {prismic.isFilled.keyText(data.name_field_label)
                ? data.name_field_label
                : "Michel"}
            </label>
            <input
              type="text"
              placeholder={
                prismic.isFilled.keyText(data.name_field_placeholder)
                  ? data.name_field_placeholder
                  : "Michel"
              }
              className="w-full p-4 text-gray-darker bg-white rounded-lg border-2 border-gray-darker"
            />
          </div>
        )}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-darker"
          >
            {prismic.isFilled.keyText(data.email_field_placeholder)
              ? data.email_field_placeholder
              : "Email"}
          </label>
          <input
            type="email"
            placeholder={
              prismic.isFilled.keyText(data.email_field_placeholder)
                ? data.email_field_placeholder
                : "Email"
            }
            className="w-full p-4 text-gray-darker bg-white rounded-lg border-2 border-gray-darker"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-darker"
          >
            {prismic.isFilled.keyText(data.password_field_placeholder)
              ? data.password_field_placeholder
              : "Password"}
          </label>
          <input
            type="password"
            placeholder={
              prismic.isFilled.keyText(data.password_field_placeholder)
                ? data.password_field_placeholder
                : "Password"
            }
            className="w-full p-4 text-gray-darker bg-white rounded-lg border-2 border-gray-darker"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Button submit color="black" variant="primary">
            {isSignUp ? data.sign_up_button_label : data.sign_in_button_label}
          </Button>
          <Button variant="link" button onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp
              ? data.switch_to_sign_in_text
              : data.switch_to_sign_up_text}
          </Button>
        </div>
      </form>
    </div>
  );
};
