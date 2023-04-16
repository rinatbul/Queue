import {initReactI18next} from "react-i18next";
import i18n from 'i18next'
import kz from './assets/i18n/kz.json'
import ru from './assets/i18n/ru.json'
import en from './assets/i18n/en.json'

const resources = {
    en: {
        translation: en
    },
    ru: {
        translation: ru
    },
    kz: {
        translation: kz
    }
}

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources,
        detection: {
            order: ['htmlTag', 'localStorage', 'cookie', 'path', 'subdomain'],
            caches: ['localStorage'],
        },
        react: {useSuspense: false},
        interpolation: {
            escapeValue: false
        },
    });