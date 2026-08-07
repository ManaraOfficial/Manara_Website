import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import de from "./locales/de.json";
import ne from "./locales/ne.json";

const STORAGE_KEY = "manara-language";

// Normalize legacy values (e.g. "np" from older code) to valid i18next codes
const getStoredLanguage = () => {
  if (typeof window === "undefined") return "en";
  // const stored = localStorage.getItem(STORAGE_KEY);
  const stored = "";
  if (stored === "np") return "ne";
  return stored || "en";
};

const savedLanguage = getStoredLanguage();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
    ne: { translation: ne },
  },
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes output
  },
});

// Keep localStorage + <html lang> in sync whenever the language changes
i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lng);
    document.documentElement.setAttribute("lang", lng);
  }
});

// Sync the initial language on first load
if (typeof document !== "undefined") {
  document.documentElement.setAttribute("lang", savedLanguage);
}

export default i18n;
