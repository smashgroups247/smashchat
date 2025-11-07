import React from 'react';

export default function StarsDecoration({ className = "" }) {
  return (
    <img 
      src="/stars-decoration.png" 
      alt="stars-decoration" 
      className={`absolute pointer-events-none ${className}`}
    />
  );
}