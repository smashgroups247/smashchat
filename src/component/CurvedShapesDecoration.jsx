import React from 'react';

export default function CurvedShapesDecoration({ className = "" }) {
  return (
    <img 
      src="/curved-shapes-decoration.png" 
      alt="curved-shapes-decoration" 
      className={`absolute pointer-events-none ${className}`}
    />
  );
}