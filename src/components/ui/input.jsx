// src/components/ui/input.jsx
import React from "react";

export function Input({ type = "text", placeholder, value, onChange, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border p-2 rounded-md w-full ${className}`}
    />
  );
}
