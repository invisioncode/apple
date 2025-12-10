
import React, { useState } from 'react';
import { FOOTER_COLUMNS } from '../constants';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import AppleLogo from './AppleLogo';

const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const location = useLocation();

  const toggleSection = (title: string) => {
    setOpenSection(prev => prev === title ? null : title);
  };

  const getBreadcrumbName = (path: string) => {
    const map: Record<string, string> = {
      '/store': 'Cửa Hàng Apple',
      '/mac': 'Mac',
      '/ipad': 'iPad',
      '/iphone': 'iPhone',
      '/watch': 'Watch',
      '/airpods': 'AirPods',
      '/tv-home': 'TV & Nhà',
      '/entertainment': 'Giải Trí',
    };
    return map[path] || null;
  };

  const getFooterLinkUrl = (label: string): string => {
    const map: Record<string, string> = {
      'Cửa Hàng': '/store',
      'Mac': '/mac',
      'iPad': '/ipad',
      'iPhone': '/iphone',
      'Watch': '/watch',
      'AirPods': '/airpods',
      'TV & Nhà': '/tv-home',
      'AirTag': '/store/airtag',
      'Phụ Kiện': '/store/accessories',
      'Thẻ Quà Tặng': '/store/gift-cards',
      'Ví': '/wallet',
      'Apple Pay': '/apple-pay',
      'Quản Lý ID Apple': 'https://appleid.apple.com',
      'Tài Khoản Apple Store': '/account',
      'iCloud.com': 'https://www.icloud.com',
      'Apple One': '/entertainment/apple-one',
      'Apple TV+': '/entertainment/apple-tv-plus',
      'Apple Music': '/entertainment/apple-music',
      'Apple Arcade': '/entertainment/apple-arcade',
      'Apple Podcasts': '/entertainment/apple-podcasts',
      'Apple Books': '/entertainment/apple-books',
      'App Store': '/entertainment/app-store',
      'Tìm Cửa Hàng': '/store/find',
      'Genius Bar': '/store/genius-bar',
      'Today at Apple': '/store/today',
      'Trại Hè Apple': '/store/camp',
      'Ứng dụng Apple Store': 'https://apps.apple.com',
      'Tài Chính': '/store/financing',
      'Tái Chế': '/environment',
      'Tình Trạng Đơn Hàng': '/account/orders',
      'Hỗ Trợ Mua Hàng': '/store/help',
      'Apple và Doanh Nghiệp': '/business',
      'Mua Sắm Cho Doanh Nghiệp': '/business/shop',
      'Apple và Giáo Dục': '/education',
      'Mua Sắm Cho Đại Học': '/education/shop',
      'Apple trong Chăm Sóc Sức Khỏe': '/healthcare',
      'Sức Khỏe trên Apple Watch': '/watch/health',
      'Trợ Năng': '/accessibility',
      'Giáo Dục': '/education-values',
      'Môi Trường': '/environment',
      'Quyền Riêng Tư': '/privacy',
      'Trách Nhiệm Nhà Cung Cấp': '/supplier-responsibility',
      'Newsroom': '/newsroom',
      'Lãnh Đạo Apple': '/about/leadership',
      'Cơ Hội Nghề Nghiệp': '/jobs',
      'Nhà Đầu Tư': 'https://investor.apple.com',
      'Đạo Đức & Tuân Thủ': '/compliance',
      'Sự Kiện': '/events',
      'Liên Hệ Apple': '/contact',
    };
    
    // Fallback to a slug-like path for anything not explicitly mapped
    return map[label] || `/${label.toLowerCase().replace(/\s+/g, '-')}`;
  };

  const FooterLink: React.FC<{ label: string; className?: string }> = ({ label, className = "text-gray-600 hover:underline hover:text-[#1d1d1f]" }) => {
    const url = getFooterLinkUrl(label);
    const isExternal = url.startsWith('http');

    if (isExternal) {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
                {label}
            </a>
        );
    }
    return (
        <Link to={url} className={className}>
            {label}
        </Link>
    );
  };

  const currentPathName = getBreadcrumbName(location.pathname);
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
                                    <li key={link}>
                                        <FooterLink label={link} />
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
                    <li key={link} className="pl-1">
                      <FooterLink label={link} className="text-gray-600 hover:underline hover:text-[#1d1d1f] block py-1" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom */}
        <div className="pt-6 md:border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 pb-10">
          <div className="text-center md:text-left w-full">
            <p className="mb-2">Xem thêm cách để mua hàng: <Link to="/store/find" className="text-apple-blue hover:underline">Tìm cửa hàng Apple Store</Link> hoặc <Link to="/reseller" className="text-apple-blue hover:underline">nhà cung cấp khác</Link> ở gần bạn. Hoặc gọi 1800-1127.</p>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 md:mt-2 gap-4">
                <p>Copyright © 2024 Apple Inc. Bảo lưu mọi quyền.</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-xs">
                    <Link to="/legal/privacy" className="hover:underline text-gray-600">Chính Sách Quyền Riêng Tư</Link>
                    <span className="hidden md:inline text-gray-300">|</span>
                    <Link to="/legal/terms" className="hover:underline text-gray-600">Điều Khoản Sử Dụng</Link>
                    <span className="hidden md:inline text-gray-300">|</span>
                    <Link to="/legal/sales-refunds" className="hover:underline text-gray-600">Bán Hàng và Hoàn Tiền</Link>
                    <span className="hidden md:inline text-gray-300">|</span>
                    <Link to="/legal" className="hover:underline text-gray-600">Pháp Lý</Link>
                    <span className="hidden md:inline text-gray-300">|</span>
                    <Link to="/sitemap" className="hover:underline text-gray-600">Sơ Đồ Trang Web</Link>
                </div>

                <div className="md:ml-auto">
                     <span className="font-medium text-[#1d1d1f] whitespace-nowrap">Việt Nam</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
