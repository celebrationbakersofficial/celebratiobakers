// src/components/ui/Button.jsx
import React from 'react';

export const Button = ({ children, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
