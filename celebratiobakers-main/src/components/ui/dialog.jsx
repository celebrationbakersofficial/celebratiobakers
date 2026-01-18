import React from "react";

export function Dialog({ children }) {
    return (
        <div
          className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-30 backdrop-blur-sm"
          style={{ backdropFilter: "blur(3px)" }}
        >
          {children}
        </div>
      );
    }

export function DialogContent({ children }) {
  return <div className="bg-white p-6 rounded-lg shadow-lg">{children}</div>;
}

export function DialogHeader({ children }) {
  return <div className="border-b pb-2 mb-4">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}
