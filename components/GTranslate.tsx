"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtranslateInitialized?: boolean;
  }
}

const GTranslate = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.gtranslateInitialized) return;

    (window as any).gtranslateSettings = {
      default_language: "en",
      languages: ["en", "ru", "zh-CN", "it"],
      wrapper_selector: ".gtranslate_wrapper",
      flag_style: "3d", // or 'flat'
      flag_size: 18,
      auto_translate: false,
      detect_browser_language: false,
    };

    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    script.async = true;
    document.body.appendChild(script);

    window.gtranslateInitialized = true;
  }, []);

  return <div className="gtranslate_wrapper relative z-50" ref={wrapperRef} />;
};

export default GTranslate;
