import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fr from './Locales/fr.json'
import en from './Locales/en.json'

const resources = {
  fr: { translation: fr },
  en: { translation: en },
} as const

const savedLanguage = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage === 'en' ? 'en' : 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
