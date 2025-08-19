import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-2xl bg-gray-800 shadow-md border border-gray-700 overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
