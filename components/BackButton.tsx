
"use client";

import React from 'react';

// Arrow left SVG component
const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

interface BackButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  topOffset?: number;
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ 
  className = '', 
  size = 'md', 
  topOffset = 4, 
  onClick 
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior: go back to previous page
      window.history.back();
    }
  };

  // Size variants
  const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };

  const buttonStyle: React.CSSProperties = {
    top: `${topOffset}px`
  };

  return (
    <button
      onClick={handleClick}
      className={`
        fixed left-4 z-50
        ${sizeClasses[size]}
        bg-white hover:bg-gray-50 
        border border-gray-200 
        rounded-full 
        shadow-md hover:shadow-lg
        flex items-center justify-center
        transition-all duration-200 ease-in-out
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${className}
      `}
      style={buttonStyle}
      aria-label="Go back"
    >
      <ArrowLeftIcon className="w-1/2 h-1/2 text-gray-600" />
    </button>
  );
};
export default BackButton;
