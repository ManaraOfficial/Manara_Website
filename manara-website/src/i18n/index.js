import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";

const STORAGE_KEY = "manara-language";

// Normalize legacy values (e.g. "np" from older code) to valid i18next codes
const getStoredLanguage = () => {
  if (typeof window === "undefined") return "en";
  // const stored = localStorage.getItem(STORAGE_KEY);
  const stored = "";
  if (stored === "np") return "ne";
  return stored || "en";
};

export const savedLanguage = getStoredLanguage();

// German and Nepali translation JSON (~115KB combined) only ship to visitors who actually
// switch to them, instead of loading on every visit regardless of chosen language.
const lazyLocaleLoaders = {
  de: () => import("./locales/de.json"),
  ne: () => import("./locales/ne.json"),
};

const loadedLanguages = new Set(["en"]);

export const ensureLanguageLoaded = async (lng) => {
  if (loadedLanguages.has(lng) || !lazyLocaleLoaders[lng]) return;
  const { default: resources } = await lazyLocaleLoaders[lng]();
  i18n.addResourceBundle(lng, "translation", resources, true, true);
  loadedLanguages.add(lng);
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
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
