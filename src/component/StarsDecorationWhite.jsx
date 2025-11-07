import React from 'react';

export default function StarsDecoration({ className = "" }) {
  return (
    <img 
      src="/stars-decoration-white.png" 
      alt="stars-decoration-white" 
      className={`absolute pointer-events-none ${className}`}
    />
  );
}