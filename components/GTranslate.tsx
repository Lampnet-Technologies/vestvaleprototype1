"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtranslateInitialized?: boolean;
  }
}

const GTranslate = () => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (window.gtranslateInitialized) return;

    (window as any).gtranslateSettings = {
      default_language: "en",
      languages: ["en", "ru", "zh-CN", "it", "ar"],
      wrapper_selector: ".gtranslate_wrapper",
      auto_translate: false,
      detect_browser_language: false,
    };

    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    script.async = true;
    document.body.appendChild(script);
    scriptRef.current = script;

    (window as any).gtranslateInitialized = true;
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .gtranslate_wrapper select.gt_selector {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-color: white;
        color: #361B06;
        border: 2px solid #9D6B53;
        padding: 8px 12px;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .gtranslate_wrapper select.gt_selector:hover {
        background-color: #f7f1ed;
        border-color: #7a4d36;
      }

      .gtranslate_wrapper select.gt_selector:focus {
        outline: none;
        border-color: #9D6B53;
        box-shadow: 0 0 0 3px rgba(157, 107, 83, 0.3);
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="gtranslate_wrapper relative z-50" />
  );
};

export default GTranslate;
