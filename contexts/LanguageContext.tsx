import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  'search.placeholder': {
    vi: 'Tìm kiếm trên apple.com',
    en: 'Search apple.com'
  },
  'search.title': {
    vi: 'Tìm kiếm',
    en: 'Search'
  },
  'search.heading': {
    vi: 'Tìm kiếm trên Apple.com',
    en: 'Search Apple.com'
  },
  'search.quickLinks': {
    vi: 'Liên kết nhanh',
    en: 'Quick Links'
  },
  'bag.title': {
    vi: 'Giỏ hàng',
    en: 'Shopping Bag'
  },
  'footer.country': {
    vi: 'Việt Nam',
    en: 'Vietnam'
  },
  'footer.copyright': {
    vi: 'Copyright © 2024 Apple Inc. Bảo lưu mọi quyền.',
    en: 'Copyright © 2024 Apple Inc. All rights reserved.'
  },
  'footer.privacy': {
    vi: 'Chính Sách Quyền Riêng Tư',
    en: 'Privacy Policy'
  },
  'footer.terms': {
    vi: 'Điều Khoản Sử Dụng',
    en: 'Terms of Use'
  },
  'footer.sales': {
    vi: 'Bán Hàng và Hoàn Tiền',
    en: 'Sales and Refunds'
  },
  'footer.legal': {
    vi: 'Pháp Lý',
    en: 'Legal'
  },
  'footer.sitemap': {
    vi: 'Sơ Đồ Trang Web',
    en: 'Site Map'
  },
  'footer.findStore': {
    vi: 'Tìm cửa hàng Apple Store',
    en: 'Find an Apple Store'
  },
  'footer.otherRetailer': {
    vi: 'nhà cung cấp khác',
    en: 'other retailer'
  },
  'footer.waysToBuy': {
    vi: 'Xem thêm cách để mua hàng:',
    en: 'More ways to shop:'
  },
  'footer.nearYou': {
    vi: 'ở gần bạn.',
    en: 'near you.'
  },
  'footer.orCall': {
    vi: 'Hoặc gọi',
    en: 'Or call'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  useEffect(() => {
    const savedLang = localStorage.getItem('app-language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('app-language', lang);
  };

  const toggleLanguage = () => {
    handleSetLanguage(language === 'vi' ? 'en' : 'vi');
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
