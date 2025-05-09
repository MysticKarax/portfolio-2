import { createI18n } from 'vue-i18n'
import enMessages from './locales/en.json'

// Create i18n instance with lazy loading of locale messages
export const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'en', // Default locale
  fallbackLocale: 'en',
  messages: {
    en: enMessages // Load English by default
  }
})

// Lazy loading of other languages
export async function loadLanguageAsync(locale) {
  // If the language was already loaded
  if (Array.from(i18n.global.availableLocales).includes(locale)) {
    i18n.global.locale.value = locale
    return
  }

  // Dynamically load the language file
  try {
    const messages = await import(`./locales/${locale}.json`)
    // Add the messages to the i18n instance
    i18n.global.setLocaleMessage(locale, messages.default)
    // Set the locale
    i18n.global.locale.value = locale
    document.querySelector('html').setAttribute('lang', locale)
    
    // If using dark mode with class strategy
    if (locale === 'zh') {
      document.documentElement.classList.add('zh')
    } else {
      document.documentElement.classList.remove('zh')
    }
    
    return locale
  } catch (error) {
    console.error(`Could not load locale ${locale}:`, error)
    return i18n.global.locale.value
  }
}

// Function to get available languages
export function getAvailableLanguages() {
  return [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'zh', name: '中文' }
  ]
}

