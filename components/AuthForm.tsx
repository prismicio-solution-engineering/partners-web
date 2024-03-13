"use client";
import { useState } from "react";
import { Button } from "./Button";
import { NavigationDocumentData } from "@/prismicio-types";

export const AuthForm = ({ data }: NavigationDocumentData) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex flex-col items-center my-16 bg-silver-light rounded-lg p-8 max-w-screen-xl mx-auto shadow-sm">
      <h3 className="text-2xl font-sans font-bold text-gray-darker mb-6">
        {isSignUp ? "Sign Up" : "Log In"}
      </h3>
      <form className="w-full max-w-md flex flex-col items-center gap-4">
        {isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 text-gray-darker bg-white rounded-lg border-2 border-gray-darker"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 text-gray-darker bg-white rounded-lg border-2 border-gray-darker"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 text-gray-darker bg-white rounded-lg border-2 border-gray-darker"
        />
        <div className="flex flex-col gap-2">
          <Button submit color="black" variant="primary">
            {isSignUp ? "Sign Up" : "Log In"}
          </Button>
          <Button
            color="black"
            variant="link"
            button
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp
              ? "Already have an account? Log In"
              : "Dont have an account? Sign Up"}
          </Button>
        </div>
      </form>
    </div>
  );
};
