import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translation_en from "../lang/en-us.json";
import translation_ja from "../lang/ja-jp.json";
import translation_zh from "../lang/zh-tw.json";

const resources = {
    zh: {
        translation: translation_zh
    },
    ja: {
        translation: translation_ja
    },
    en: {
        translation: translation_en
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "zh",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
