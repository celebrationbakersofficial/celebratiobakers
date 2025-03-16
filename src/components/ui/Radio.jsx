// src/components/ui/Radio.jsx
import React from 'react';
import './radio.css'
const Radio = ({ name, value, checked, onChange, label }) => {
  return (
    <div className="radio">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default Radio;
