import { languages, defaultLanguage } from "../i18n/config";

export function getSortedLangsData() {
  return languages;
}

export function getAllLanguageSlugs() {
  return languages.map((lang: string) => {
    return { params: { lang: lang } };
  });
}

export function getLanguage(lang: string) {
  return languages.includes(lang) ? lang : defaultLanguage;
}
