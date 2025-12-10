import React, { useState } from 'react';
import { getFooterColumns } from '../constants';
import { ChevronDown, ChevronRight, Globe } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import AppleLogo from './AppleLogo';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const location = useLocation();

  const toggleSection = (title: string) => {
    setOpenSection(prev => prev === title ? null : title);
  };

  const getBreadcrumbName = (path: string) => {
    // Simple mock mapping for breadcrumbs, realistically would need full route map or simple path splitting
    const segments = path.split('/').filter(Boolean);
    if (segments.length === 0) return null;
    
    // Capitalize first letter of last segment as fallback
    const last = segments[segments.length - 1];
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
        <Link to={href} className={className}>
            {label}
        </Link>
    );
  };

  const currentPathName = getBreadcrumbName(location.pathname);
  const FOOTER_COLUMNS = getFooterColumns(language);
  const mobileSections = FOOTER_COLUMNS.flat();

  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f] text-xs font-sans">
      <div className="max-w-[1024px] mx-auto px-4">
        
        {/* Footnotes */}
        <section aria-label="Footnotes" className="pt-8 border-b border-gray-300 pb-6 mb-4 text-gray-500 space-y-2">
            <p>1. iPhone 16 Pro và iPhone 16 có khả năng chống tia nước, chống nước và chống bụi. Sản phẩm đã qua kiểm nghiệm trong điều kiện phòng thí nghiệm.</p>
            <p>2. Màn hình có các góc bo tròn. Khi tính theo hình chữ nhật chuẩn, kích thước màn hình theo đường chéo là 6,12 inch.</p>
            <p>* Một số tính năng không khả dụng ở tất cả các quốc gia hoặc khu vực.</p>
        </section>

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 py-4 mb-4 text-gray-500 border-b border-gray-300 md:border-b-0 h-[50px]">
            <Link to="/" className="text-gray-800 hover:text-black" aria-label="Apple Home">
                <AppleLogo className="fill-current h-[44px] w-[14px]" />
            </Link>
            {currentPathName && (
                <>
                    <ChevronRight size={14} className="text-gray-400" />
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

        {/* Directory Accordion (Mobile) */}
        <nav aria-label="Directory Mobile" className="md:hidden pb-8">
          {mobileSections.map((section, index) => (
            <div key={section.title} className="border-b border-gray-300 last:border-none">
              <h3 className="text-[12px] font-semibold text-[#1d1d1f]">
                <button 
                    type="button"
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full py-3 text-left focus:outline-none"
                    aria-expanded={openSection === section.title}
                    aria-controls={`footer-section-${index}`}
                >
                    <span className="flex-1">{section.title}</span>
                    <ChevronDown 
                        className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${openSection === section.title ? 'rotate-180' : ''}`} 
                        aria-hidden="true"
                    />
                </button>
              </h3>
              
              <div 
                id={`footer-section-${index}`}
                className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${openSection === section.title ? 'max-h-[1000px] opacity-100 pb-4' : 'max-h-0 opacity-0'}
                `}
              >
                <ul className="list-none p-0 m-0 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label} className="pl-1">
                      <FooterLink label={link.label} href={link.href} className="text-gray-600 hover:underline hover:text-[#1d1d1f] block py-1" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom */}
        <div className="pt-6 md:border-t border-gray-300 flex flex-col justify-between items-start gap-4 text-gray-500 pb-10">
          <div className="w-full">
            <p className="mb-2">
                {t('footer.waysToBuy')} <Link to="/store/find" className="text-apple-blue hover:underline">{t('footer.findStore')}</Link> hoặc <Link to="/reseller" className="text-apple-blue hover:underline">{t('footer.otherRetailer')}</Link> {t('footer.nearYou')} {t('footer.orCall')} 1800-1127.
            </p>
            
            <div className="w-full h-px bg-gray-300 my-4 md:hidden" />

            <div className="flex flex-col-reverse md:flex-row md:items-center justify-between mt-4 md:mt-2 gap-4">
                
                <div className="flex flex-col md:flex-row gap-4 md:items-center">
                    <p>{t('footer.copyright')}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
                        <Link to="/legal/privacy" className="hover:underline text-gray-600">{t('footer.privacy')}</Link>
                        <span className="hidden md:inline text-gray-300">|</span>
                        <Link to="/legal/terms" className="hover:underline text-gray-600">{t('footer.terms')}</Link>
                        <span className="hidden md:inline text-gray-300">|</span>
                        <Link to="/legal/sales-refunds" className="hover:underline text-gray-600">{t('footer.sales')}</Link>
                        <span className="hidden md:inline text-gray-300">|</span>
                        <Link to="/legal" className="hover:underline text-gray-600">{t('footer.legal')}</Link>
                        <span className="hidden md:inline text-gray-300">|</span>
                        <Link to="/sitemap" className="hover:underline text-gray-600">{t('footer.sitemap')}</Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                     {/* Footer Language Switcher */}
                     <button 
                        onClick={toggleLanguage} 
                        className="flex items-center gap-1 hover:underline text-[#1d1d1f]"
                        aria-label="Change Language"
                     >
                        <span className="font-medium whitespace-nowrap">{t('footer.country')}</span>
                        <span className="text-gray-400">|</span>
                        <Globe size={14} className="text-gray-500" />
                        <span className="text-gray-500">{language === 'vi' ? 'English' : 'Tiếng Việt'}</span>
                     </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
