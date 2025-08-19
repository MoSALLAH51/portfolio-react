import React from "react";

export function Button({ children, variant = "solid", size = "md", className = "", ...props }) {
  const baseClass = "rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center";

  const sizeClass = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  }[size] || "px-4 py-2 text-base";

  const variantClass =
    variant === "outline"
      ? "border border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-purple-500"
      : "bg-purple-600 text-white hover:bg-purple-700";

  return (
    <button className={`${baseClass} ${sizeClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
