import { translations } from "./translations";

type Lang = "es" | "en";
type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang = "es") {
  return translations[key]?.[lang] || key;
}