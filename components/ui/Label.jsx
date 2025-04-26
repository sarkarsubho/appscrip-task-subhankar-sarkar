'use client';

import React from 'react';

export const Label= ({
  htmlFor,
  className,
  children,
}) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};
