// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en_translate from "./locales/en/translation.json";
import it_translate from "./locales/it/translation.json"; // Corrected path and variable name

i18n.use(initReactI18next).init({
  fallbackLng: "it", // Fallback to English if the desired language is not available
  detection: {
    order: [
      "localStorage",
      "cookie",
      "querystring",
      "sessionStorage",
      "navigator",
      "htmlTag",
    ],
    caches: ["localStorage", "cookie"],
  },
  resources: {
    en: {
      translation: en_translate,
    },
    it: {
      translation: it_translate,
    },
  },
  react: {
    useSuspense: false,
  },
});

i18n.on("loaded", (loaded) => {
  console.log("Loaded languages:", loaded);
});

i18n.on("failedLoading", (lng, ns, msg) => {
  console.error(`Failed loading ${lng}/${ns}: ${msg}`);
});

export default i18n;
