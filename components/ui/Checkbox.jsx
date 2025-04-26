'use client';

import React from 'react';
import './checkbox.css'; // We'll add styles below


export const Checkbox = ({
  id,
  checked = false,
  onCheckedChange,
}) => {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
      className="custom-checkbox"
    />
  );
};
