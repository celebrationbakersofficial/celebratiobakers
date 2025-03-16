// src/components/ui/select.jsx
import React from "react";

export function Select({ children, onValueChange, className }) {
  return (
    <select onChange={(e) => onValueChange(e.target.value)} className={`border p-2 rounded-md ${className}`}>
      {children}
    </select>
  );
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
