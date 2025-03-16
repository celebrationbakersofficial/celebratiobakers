import { useState } from "react";

export function Switch({ checked, onCheckedChange }) {
  return (
    <button
      onClick={() => onCheckedChange(!checked)}
      className={`relative w-12 h-6 bg-gray-300 rounded-full transition ${
        checked ? "bg-green-500" : "bg-gray-400"
      }`}
    >
      <div
        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
          checked ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
