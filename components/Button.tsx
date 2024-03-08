import clsx from "clsx";
import { PrismicLink } from "@prismicio/react";
import type * as prismic from "@prismicio/client";
import type * as clsxT from "clsx";

const baseStyles: clsxT.ClassDictionary = {
  primary:
    "group inline-flex items-center justify-center rounded-lg py-3 px-6 text-lg font-bold font-sans focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  secondary:
    "group inline-flex ring-1 items-center justify-center rounded-lg py-2 px-4 text-lg focus:outline-none font-sans font-bold text-lg border-2 py-3 px-6 rounded-lg",
  link: "font-sans font-bold text-base underline underline-offset-8 hover:underline-offset-4 mt-4 transition-all duration-300 ease-in-out",
};

const variantStyles: clsxT.ClassDictionary = {
  primary: {
    purple:
      "bg-[#8E44EC] text-white hover:bg-[#B382F2] transition duration-500 ease-in-out",
    black:
      "bg-[#171717] text-white hover:bg-[#505050] transition duration-500 ease-in-out",
    white:
      "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white transition duration-500 ease-in-out",
  },
  secondary: {
    purple:
      "ring-slate-200 hover:ring-slate-300 bg-transparent text-[#8E44EC] border-[#8E44EC] hover:bg-[#8E44EC] hover:text-white transition duration-500 ease-in-out",
    black:
      "ring-slate-200 hover:ring-slate-300 bg-transparent text-[#171717] border-[#171717] hover:bg-[#171717] hover:text-white transition duration-500 ease-in-out",
    white:
      "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white transition duration-500 ease-in-out",
  },
  link: {
    black: "text-[#171717]",
    white: "text-white",
  },
};

export function Button({
  variant = "primary",
  color = "purple",
  className,
  href = "#",
  field,
  submit,
  button,
  ...props
}: {
  variant?: string;
  color?: string;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  field?: prismic.LinkField;
  submit?: boolean;
  button?: boolean;
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );

  if (submit) {
    return <button type="submit" className={className} {...props} />;
  }

  if (button) {
    return <button type="button" className={className} {...props} />;
  }

  return field ? (
    // <Link href={href} className={className} {...props} />
    <PrismicLink className={className} {...props} field={field} />
  ) : (
    // <button className={className} {...props} />
    <PrismicLink className={className} {...props} href={href} />
  );
}
