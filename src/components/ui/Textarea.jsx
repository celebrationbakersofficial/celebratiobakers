// src/components/ui/Textarea.jsx
import React from 'react';

const Textarea = ({ value, onChange, placeholder }) => {
  return (
    <textarea value={value} onChange={onChange} placeholder={placeholder}></textarea>
  );
};

export default Textarea;
