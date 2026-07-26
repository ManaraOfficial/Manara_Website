import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // 1. Define global Google Translate initialization
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,de,ne", // English, German, Nepali
            autoDisplay: false,
          },
          "google_translate_element_hidden"
        );
      }
    };

    // 2. Load Google Translate script
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    /* Render Google's default widget hidden in DOM */
    <div id="google_translate_element_hidden" className="hidden" />
  );
};

// Helper function to trigger Google Translate from your own UI buttons
export const triggerGoogleTranslate = (langCode) => {
  // Map custom language codes to Google's standard codes (e.g. 'np' -> 'ne')
  const targetLang = langCode === "np" ? "ne" : langCode;
  
  const selectEl = document.querySelector(".goog-te-combo");
  if (selectEl) {
    selectEl.value = targetLang;
    selectEl.dispatchEvent(new Event("change"));
  }
};

export default GoogleTranslate;