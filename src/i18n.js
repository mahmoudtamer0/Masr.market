import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationAR from "./local/ar.json"
import translationEN from "./local/en.json"
import languageDetector from "i18next-browser-languagedetector"

const langvalue = JSON.parse(localStorage.getItem("lang")) || "ar"
console.log(langvalue.language)

const resources = {
    en: {
        translation: translationEN
    },
    ar: {
        translation: translationAR
    }
};

i18n
    .use(languageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: langvalue.language,
        interpolation: {
            escapeValue: false
        },
    });

export default i18n;