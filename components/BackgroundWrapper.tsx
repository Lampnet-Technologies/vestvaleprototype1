"use client";
import React from "react";

interface BackgroundWrapperProps {
  children: React.ReactNode;
  backgroundUrl: string;
  className?: string;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  children,
  backgroundUrl,
  className = "",
}) => {
  return (
    <div
      className={`relative bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
