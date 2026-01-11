import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    'nav.features': 'Возможности',
    'nav.download': 'Скачать',
    'nav.reviews': 'Отзывы',
    'nav.contact': 'Контакты',
    'nav.login': 'Войти',
    'hero.badge': '🎉 100% БЕСПЛАТНО',
    'hero.title': 'Интернет без границ',
    'hero.subtitle': 'Свободный доступ к любым сайтам. Быстро, безопасно, анонимно.',
    'hero.free': 'Бесплатно навсегда. Без подписок.',
    'hero.download': 'Скачать сейчас',
    'hero.learn': 'Узнать больше',
    'comparison.title': 'Запрет vs Платные VPN',
    'comparison.subtitle': 'Почему платить, если можно пользоваться бесплатно?',
    'features.title': 'Почему Запрет?',
    'features.subtitle': 'Надёжная защита и свобода в сети',
    'stats.title': 'Запрет в цифрах',
    'stats.subtitle': 'Нам доверяют тысячи пользователей',
    'faq.title': 'Частые вопросы',
    'faq.subtitle': 'Всё что нужно знать о Запрет',
    'contact.title': 'Поддержка',
    'contact.subtitle': 'Нужна помощь? Напишите нам!',
    'footer.idea': 'Идея проекта',
    'footer.rights': '© 2026 Запрет. Все права защищены.'
  },
  en: {
    'nav.features': 'Features',
    'nav.download': 'Download',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'hero.badge': '🎉 100% FREE',
    'hero.title': 'Internet Without Borders',
    'hero.subtitle': 'Free access to any websites. Fast, secure, anonymous.',
    'hero.free': 'Free forever. No subscriptions.',
    'hero.download': 'Download Now',
    'hero.learn': 'Learn More',
    'comparison.title': 'Zapret vs Paid VPNs',
    'comparison.subtitle': 'Why pay when you can use it for free?',
    'features.title': 'Why Zapret?',
    'features.subtitle': 'Reliable protection and freedom online',
    'stats.title': 'Zapret in Numbers',
    'stats.subtitle': 'Trusted by thousands of users',
    'faq.title': 'FAQ',
    'faq.subtitle': 'Everything you need to know about Zapret',
    'contact.title': 'Support',
    'contact.subtitle': 'Need help? Write to us!',
    'footer.idea': 'Project Idea',
    'footer.rights': '© 2026 Zapret. All rights reserved.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ru] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
