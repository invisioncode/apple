
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  'search.placeholder': {
    vi: 'Tìm kiếm trên apple.com',
    en: 'Search apple.com',
    ar: 'البحث في apple.com'
  },
  'search.title': {
    vi: 'Tìm kiếm',
    en: 'Search',
    ar: 'بحث'
  },
  'search.heading': {
    vi: 'Tìm kiếm trên Apple.com',
    en: 'Search Apple.com',
    ar: 'البحث في Apple.com'
  },
  'search.quickLinks': {
    vi: 'Liên kết nhanh',
    en: 'Quick Links',
    ar: 'روابط سريعة'
  },
  'bag.title': {
    vi: 'Giỏ hàng',
    en: 'Shopping Bag',
    ar: 'حقيبة التسوق'
  },
  'footer.country': {
    vi: 'Việt Nam',
    en: 'Vietnam',
    ar: 'الإمارات العربية المتحدة (العربية)'
  },
  'footer.copyright': {
    vi: 'Copyright © 2024 Apple Inc. Bảo lưu mọi quyền.',
    en: 'Copyright © 2024 Apple Inc. All rights reserved.',
    ar: 'علامة تجارية وجميع الحقوق محفوظة. © 2024 Apple Inc'
  },
  'footer.privacy': {
    vi: 'Chính Sách Quyền Riêng Tư',
    en: 'Privacy Policy',
    ar: 'سياسة الخصوصية'
  },
  'footer.terms': {
    vi: 'Điều Khoản Sử Dụng',
    en: 'Terms of Use',
    ar: 'شروط الاستخدام'
  },
  'footer.sales': {
    vi: 'Bán Hàng và Hoàn Tiền',
    en: 'Sales and Refunds',
    ar: 'المبيعات والاسترداد'
  },
  'footer.legal': {
    vi: 'Pháp Lý',
    en: 'Legal',
    ar: 'المسائل القانونية'
  },
  'footer.sitemap': {
    vi: 'Sơ Đồ Trang Web',
    en: 'Site Map',
    ar: 'خريطة الموقع'
  },
  'footer.findStore': {
    vi: 'Tìm cửa hàng Apple Store',
    en: 'Find an Apple Store',
    ar: 'العثور على متجر Apple'
  },
  'footer.otherRetailer': {
    vi: 'nhà cung cấp khác',
    en: 'other retailer',
    ar: 'بائع تجزئة آخر'
  },
  'footer.waysToBuy': {
    vi: 'Xem thêm cách để mua hàng:',
    en: 'More ways to shop:',
    ar: 'طرق أخرى للشراء:'
  },
  'footer.nearYou': {
    vi: 'ở gần bạn.',
    en: 'near you.',
    ar: 'بالقرب منك.'
  },
  'footer.orCall': {
    vi: 'Hoặc gọi',
    en: 'Or call',
    ar: 'أو اتصل بـ'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  useEffect(() => {
    const savedLang = localStorage.getItem('app-language') as Language;
    if (savedLang) {
      handleSetLanguage(savedLang);
    } else {
      handleSetLanguage('vi');
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('app-language', lang);
    
    // Handle Direction (RTL/LTR)
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    if (language === 'vi') handleSetLanguage('en');
    else if (language === 'en') handleSetLanguage('ar');
    else handleSetLanguage('vi');
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage, t, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
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
