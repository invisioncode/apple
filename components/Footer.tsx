import React, { useState } from 'react';
import { getFooterColumns } from '../constants';
import { ChevronDown, ChevronRight, Globe } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';
import AppleLogo from './AppleLogo';
import { useLanguage } from '../contexts/LanguageContext';

const { useLocation, Link } = ReactRouterDOM as any;

const Footer: React.FC = () => {
  const { language, t, dir, localePrefix } = useLanguage();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const location = useLocation();

  const toggleSection = (title: string) => {
    setOpenSection(prev => prev === title ? null : title);
  };

  const getBreadcrumbName = (path: string) => {
    if (path === '/' || path === '/vn' || path === '/om-ar') return null;
    const segments = path.split('/').filter(Boolean);
    // Remove locale segment if present
    const cleanSegments = segments.filter(s => s !== 'vn' && s !== 'om-ar');
    if (cleanSegments.length === 0) return null;
    
    // Capitalize first letter of last segment as fallback
    const last = cleanSegments[cleanSegments.length - 1];
    return last.charAt(0).toUpperCase() + last.slice(1);
  };

  const FooterLink: React.FC<{ label: string; href: string; className?: string }> = ({ label, href, className = "text-gray-600 hover:underline hover:text-[#1d1d1f]" }) => {
    const isExternal = href.startsWith('http');

    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {label}
            </a>
        );
    }
    return (
        <Link to={`${localePrefix}${href}`} className={className}>
            {label}
        </Link>
    );
  };

  const currentPathName = getBreadcrumbName(location.pathname);
  const FOOTER_COLUMNS = getFooterColumns(language);
  const mobileSections = FOOTER_COLUMNS.flat();

  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f] text-xs font-sans" dir={dir}>
      <div className="max-w-[1024px] mx-auto px-4">
        
        {/* Footnotes */}
        <section aria-label="Footnotes" className="pt-8 border-b border-gray-300 pb-6 mb-4 text-gray-500 space-y-2">
            <p>1. iPhone 16 Pro và iPhone 16 có khả năng chống tia nước, chống nước và chống bụi. Sản phẩm đã qua kiểm nghiệm trong điều kiện phòng thí nghiệm.</p>
            <p>2. Màn hình có các góc bo tròn. Khi tính theo hình chữ nhật chuẩn, kích thước màn hình theo đường chéo là 6,12 inch.</p>
            <p>* Một số tính năng không khả dụng ở tất cả các quốc gia hoặc khu vực.</p>
        </section>

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 py-4 mb-4 text-gray-500 border-b border-gray-300 md:border-b-0 h-[50px]">
            <Link to={`${localePrefix}/`} className="text-gray-800 hover:text-black" aria-label="Apple Home">
                <AppleLogo className="fill-current h-[44px] w-[14px]" />
            </Link>
            {currentPathName && (
                <>
                    {dir === 'rtl' ? <ChevronRight size={14} className="text-gray-400 rotate-180" /> : <ChevronRight size={14} className="text-gray-400" />}
                    <span className="text-gray-800 font-normal">{currentPathName}</span>
                </>
            )}
        </nav>

        {/* Directory Columns (Desktop) */}
        <nav aria-label="Directory" className="hidden md:grid md:grid-cols-5 gap-x-4 pb-8">
            {FOOTER_COLUMNS.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-6">
                    {column.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-[12px] font-semibold text-[#1d1d1f] mb-2">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <FooterLink label={link.label} href={link.href} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </nav>

        {/* Directory (Mobile) */}
        <nav aria-label="Directory Mobile" className="md:hidden pb-8">
            {mobileSections.map((section, idx) => (
                <div key={`${section.title}-${idx}`} className="border-b border-gray-300">
                    <button 
                        onClick={() => toggleSection(section.title)}
                        className="w-full flex items-center justify-between py-3 text-[#1d1d1f] hover:text-black outline-none"
                        aria-expanded={openSection === section.title}
                    >
                        <span className="font-semibold">{section.title}</span>
                        <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-300 ${openSection === section.title ? 'rotate-180' : ''}`} 
                        />
                    </button>
                    <div 
                        className={`overflow-hidden transition-all duration-300 ${openSection === section.title ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
                    >
                        <ul className="space-y-2 pl-2">
                            {section.links.map((link) => (
                                <li key={link.label}>
                                    <FooterLink label={link.label} href={link.href} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </nav>

        {/* Bottom Section */}
        <section className="pt-8 pb-10 border-t border-gray-300 md:border-t-0 md:pt-2 flex flex-col md:flex-row-reverse md:justify-between gap-4">
             <div className="flex items-center gap-2 mb-2 md:mb-0 whitespace-nowrap">
                 <p className="text-gray-500">{t('footer.waysToBuy')} <Link to={`${localePrefix}/store/find`} className="text-apple-blue hover:underline">{t('footer.findStore')}</Link> {t('footer.nearYou')} {t('footer.orCall')} <span className="text-apple-blue">1800-1192</span>.</p>
             </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row justify-between gap-4 pb-10 border-t border-gray-300 pt-4">
             <div className="flex flex-col md:flex-row gap-4 md:items-center">
                 <p className="text-gray-500">{t('footer.copyright')}</p>
                 <div className="flex flex-wrap gap-2 md:gap-4 text-gray-600">
                     <Link to={`${localePrefix}/privacy`} className="hover:underline border-r border-gray-400 pr-2 md:pr-4 last:border-0">{t('footer.privacy')}</Link>
                     <Link to={`${localePrefix}/legal`} className="hover:underline border-r border-gray-400 pr-2 md:pr-4 last:border-0">{t('footer.terms')}</Link>
                     <Link to={`${localePrefix}/legal/sales`} className="hover:underline border-r border-gray-400 pr-2 md:pr-4 last:border-0">{t('footer.sales')}</Link>
                     <Link to={`${localePrefix}/legal/web`} className="hover:underline border-r border-gray-400 pr-2 md:pr-4 last:border-0">{t('footer.legal')}</Link>
                     <Link to={`${localePrefix}/sitemap`} className="hover:underline border-r border-gray-400 pr-2 md:pr-4 last:border-0">{t('footer.sitemap')}</Link>
                 </div>
             </div>
             <div className="flex items-center gap-2 whitespace-nowrap">
                 <Link to="/choose-country-region" className="text-gray-600 hover:underline flex items-center gap-1">
                     <span className="font-medium text-[#1d1d1f]">{t('footer.country')}</span>
                 </Link>
             </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;