
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ShoppingBag, Globe, Trash2, Box, User, Heart, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getNavItems, getNavSubmenus } from '../constants';
import SmartSearch from './SmartSearch';
import AppleLogo from './AppleLogo';
import Button from './Button';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { cartItems, totalItems, removeFromCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  
  // State for submenus
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const bagRef = useRef<HTMLDivElement>(null);

  // Refs for Accessibility Focus Management
  const navLinksRef = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const submenuRef = useRef<HTMLDivElement>(null);

  const NAV_ITEMS = getNavItems(language);
  const NAV_SUBMENUS = getNavSubmenus(language);

  // Close bag on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (bagRef.current && !bagRef.current.contains(event.target as Node)) {
        setIsBagOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Keydown Handler for Escape
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (hoveredLabel) {
           const labelToFocus = hoveredLabel;
           setHoveredLabel(null);
           // Return focus to the trigger
           navLinksRef.current[labelToFocus]?.focus();
        } else if (isBagOpen) {
            setIsBagOpen(false);
        } else if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [hoveredLabel, isBagOpen, isMobileMenuOpen]);

  // Handle Desktop Hover Logic
  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredLabel(label);
    setIsBagOpen(false); // Close bag if opening submenu
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
        setHoveredLabel(null);
    }, 200);
  };

  // Handle Keyboard Navigation for Top Level Links
  const handleNavLinkKeyDown = (e: React.KeyboardEvent, label: string) => {
      if (e.key === 'ArrowDown') {
          // Check if this item has a submenu
          if (NAV_SUBMENUS[label]) {
              e.preventDefault();
              setHoveredLabel(label);
              setIsBagOpen(false);
              // Focus the first link in the submenu after it renders
              setTimeout(() => {
                  const firstLink = submenuRef.current?.querySelector('a');
                  if (firstLink) (firstLink as HTMLElement).focus();
              }, 50);
          }
      }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    // Always close menus
    setIsMobileMenuOpen(false);
    setHoveredLabel(null);
    setIsBagOpen(false);

    // Smooth scroll for hash links on the same page
    if (to.startsWith('#')) {
      e.preventDefault();
      const id = to.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 48;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const toggleBag = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsBagOpen(!isBagOpen);
      setHoveredLabel(null); // Close submenus
  };

  const activeSubMenu = hoveredLabel ? NAV_SUBMENUS[hoveredLabel] : null;

  const bagTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const formatPrice = (price: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isMobileMenuOpen || hoveredLabel || isBagOpen ? 'bg-[#161617]' : (isScrolled ? 'bg-[#161617]/80 backdrop-blur-md' : 'bg-[#161617]/90')
        }`}
        aria-label="Global"
      >
        <div className="max-w-[1024px] mx-auto px-4 h-[44px] flex items-center justify-between relative z-50">
          
          {/* Mobile Menu Button */}
          <div className="md:hidden z-50 text-[#e8e8ed]">
            <button 
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="p-2 -ml-2"
                aria-label="Menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 z-50 h-full flex items-center">
             <Link 
                to="/" 
                className="text-[#e8e8ed] hover:opacity-80 transition-opacity flex items-center h-full" 
                aria-label="Apple" 
                onClick={(e) => handleLinkClick(e, '/')}
                onMouseEnter={() => handleMouseEnter('')}
                onMouseLeave={handleMouseLeave}
             >
                <AppleLogo className="fill-current h-[44px] w-[14px]" aria-hidden="true" />
             </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex justify-between items-center w-full px-8 h-full">
            <ul className="flex justify-between items-center w-full list-none m-0 p-0 h-full">
                {NAV_ITEMS.map((item) => {
                  const hasSubmenu = !!NAV_SUBMENUS[item.label];
                  return (
                    <li 
                        key={item.label} 
                        className="h-full flex items-center"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link 
                            ref={(el) => { navLinksRef.current[item.label] = el; }}
                            to={item.href}
                            onClick={(e) => handleLinkClick(e, item.href)}
                            onKeyDown={(e) => handleNavLinkKeyDown(e, item.label)}
                            className={`
                                text-[12px] transition-all duration-300 tracking-tight px-2 hover:underline hover:underline-offset-4 decoration-white/50
                                ${hoveredLabel && hoveredLabel !== item.label ? 'text-gray-500' : 'text-[#e8e8ed]/80 hover:text-white'}
                            `}
                            aria-haspopup={hasSubmenu ? "true" : undefined}
                            aria-expanded={hasSubmenu ? hoveredLabel === item.label : undefined}
                            aria-controls={hasSubmenu ? "desktop-submenu-overlay" : undefined}
                        >
                            {item.label}
                        </Link>
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 z-50 text-[#e8e8ed]">
             {/* Desktop Language Switcher - Mini */}
             <button
                type="button"
                onClick={toggleLanguage}
                className="hidden md:flex items-center gap-1 text-[10px] uppercase font-semibold text-[#e8e8ed]/80 hover:text-white transition-colors"
                aria-label="Switch Language"
             >
               {language}
             </button>

            <button 
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="hover:opacity-80 transition-opacity p-1 group relative focus:outline-none"
                aria-label={t('search.placeholder')}
                onMouseEnter={() => handleMouseEnter('')}
                onMouseLeave={handleMouseLeave}
            >
               <Search size={18} aria-hidden="true" />
               <span 
                   className="absolute top-[120%] left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-[#1d1d1f] text-xs rounded shadow-md opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 border border-gray-100"
                   role="tooltip"
                   aria-hidden="true"
               >
                   {t('search.title')}
               </span>
            </button>

            {/* Shopping Bag Icon with Dropdown Trigger */}
            <div className="relative" ref={bagRef}>
                <button 
                    type="button"
                    className={`hover:opacity-80 transition-opacity p-1 relative ${isBagOpen ? 'opacity-50' : ''}`}
                    aria-label={t('bag.title')}
                    aria-expanded={isBagOpen}
                    aria-haspopup="true"
                    onClick={toggleBag}
                    onMouseEnter={() => handleMouseEnter('')} 
                >
                <ShoppingBag size={18} aria-hidden="true" />
                {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center pointer-events-none">
                        {totalItems}
                    </span>
                )}
                </button>

                {/* Bag Dropdown */}
                <div 
                    className={`
                        absolute top-full right-[-10px] mt-3 w-[290px] md:w-[320px] 
                        bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden
                        transition-all duration-300 origin-top-right text-apple-dark
                        ${isBagOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                    `}
                >
                    {/* Triangle Arrow */}
                    <div className="absolute -top-2 right-4 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-200"></div>

                    <div className="p-4 md:p-6 bg-white relative z-10">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-8">
                                <p className="text-gray-500 mb-4 text-sm">Giỏ hàng của bạn đang trống.</p>
                                <Link to="/store" onClick={() => setIsBagOpen(false)} className="text-apple-blue hover:underline text-sm font-medium">Mua sắm ngay</Link>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <p className="text-sm text-gray-500 font-medium text-center">Giỏ hàng</p>
                                <div className="max-h-[300px] overflow-y-auto no-scrollbar space-y-4 border-b border-gray-200 pb-4">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex gap-3 items-start">
                                            <div className="w-12 h-12 flex-shrink-0">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <Link 
                                                    to={`/store/product/${item.slug}`} 
                                                    onClick={() => setIsBagOpen(false)}
                                                    className="text-sm font-semibold text-apple-dark hover:text-apple-blue truncate block"
                                                >
                                                    {item.name}
                                                </Link>
                                                <p className="text-xs text-gray-500 mt-0.5">{formatPrice(item.price)}</p>
                                            </div>
                                            <button 
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                                aria-label="Remove item"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-sm text-gray-500">Tổng cộng:</span>
                                    <span className="text-sm font-bold">{formatPrice(bagTotal)}</span>
                                </div>
                                <Button 
                                    label="Thanh toán" 
                                    href="/store"
                                    onClick={() => setIsBagOpen(false)}
                                    className="w-full" 
                                    size="sm"
                                />
                            </div>
                        )}
                        
                        {/* Profile Links */}
                        <div className="mt-4 pt-4 border-t border-gray-100 space-y-1">
                            <Link to="/store/order-status" onClick={() => setIsBagOpen(false)} className="flex items-center gap-3 px-2 py-2 text-sm text-apple-blue hover:bg-gray-50 rounded-lg group">
                                <Box size={16} className="text-gray-400 group-hover:text-apple-blue" />
                                <span>Đơn hàng</span>
                            </Link>
                            <Link to="/saved" onClick={() => setIsBagOpen(false)} className="flex items-center gap-3 px-2 py-2 text-sm text-apple-blue hover:bg-gray-50 rounded-lg group">
                                <Heart size={16} className="text-gray-400 group-hover:text-apple-blue" />
                                <span>Mục đã lưu</span>
                            </Link>
                            <Link to="/account" onClick={() => setIsBagOpen(false)} className="flex items-center gap-3 px-2 py-2 text-sm text-apple-blue hover:bg-gray-50 rounded-lg group">
                                <User size={16} className="text-gray-400 group-hover:text-apple-blue" />
                                <span>Tài khoản</span>
                            </Link>
                            <Link to="/signin" onClick={() => setIsBagOpen(false)} className="flex items-center gap-3 px-2 py-2 text-sm text-apple-blue hover:bg-gray-50 rounded-lg group">
                                <Settings size={16} className="text-gray-400 group-hover:text-apple-blue" />
                                <span>Đăng nhập</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>

        {/* Desktop Submenu Overlay */}
        <div 
            id="desktop-submenu-overlay"
            ref={submenuRef}
            className={`
                fixed top-[44px] left-0 w-full bg-[#161617] text-white transition-all duration-300 ease-out z-50
                ${activeSubMenu && !isBagOpen ? 'opacity-100 visible max-h-[calc(100vh-44px)] overflow-y-auto border-b border-gray-700/50 shadow-2xl pb-12 pt-4' : 'opacity-0 invisible max-h-0 pt-0 pb-0 overflow-hidden'}
            `}
            onMouseEnter={() => {
                if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
            role="region"
            aria-label={hoveredLabel ? `${hoveredLabel} submenu` : 'Submenu'}
        >
            <div className="max-w-[1024px] mx-auto px-4">
                <div className="flex flex-row justify-start gap-x-12 pl-4 animate-fade-in"> 
                    {activeSubMenu && activeSubMenu.map((group, idx) => (
                        <div key={idx} className="flex flex-col gap-3 min-w-[140px]">
                            {group.title && (
                                <span className="text-[12px] text-gray-400 font-normal mb-1 block">
                                    {group.title}
                                </span>
                            )}
                            <ul className="space-y-2">
                                {group.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <Link 
                                            to={link.href}
                                            className={`
                                                block hover:text-white leading-tight focus:outline-none focus:text-white focus:underline
                                                ${group.title ? 'text-[12px] font-semibold text-[#e8e8ed]' : 'text-[24px] font-semibold text-[#e8e8ed] mb-1'} 
                                            `}
                                            onClick={(e) => handleLinkClick(e, link.href)}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Mobile Menu Content */}
        <div 
            id="mobile-menu"
            className={`
            fixed inset-0 bg-black z-40 pt-[44px] px-8 md:hidden
            transition-all duration-[600ms]
            ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}
            `}
            style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
            aria-hidden={!isMobileMenuOpen}
        >
          <div className="flex flex-col h-full pb-20 overflow-y-auto">
            <div className="flex relative items-center mt-4 mb-8">
                <Search className="absolute left-3 text-gray-500 w-5 h-5" aria-hidden="true" />
                <input 
                    type="text" 
                    placeholder={t('search.placeholder')} 
                    className="w-full bg-[#1d1d1f] text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/50"
                    aria-label={t('search.placeholder')}
                    onFocus={() => {
                        setIsMobileMenuOpen(false);
                        setIsSearchOpen(true);
                    }}
                />
            </div>
            <nav aria-label="Mobile">
                <ul key={isMobileMenuOpen ? 'open' : 'closed'} className="flex flex-col space-y-1 list-none p-0">
                {NAV_ITEMS.map((item, index) => (
                    <li key={item.label}>
                        <Link 
                        to={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className={`
                            block text-[#e8e8ed] text-[28px] font-semibold py-2 border-b border-gray-800 hover:text-white transition-colors
                            ${isMobileMenuOpen ? 'animate-fade-in' : ''}
                        `}
                        style={{ animationDelay: `${index * 50}ms`, opacity: 0, animationFillMode: 'forwards' }}
                        >
                        {item.label}
                        </Link>
                    </li>
                ))}
                </ul>
            </nav>
            
            <div 
                className={`mt-8 border-t border-gray-800 pt-8 ${isMobileMenuOpen ? 'animate-fade-in' : ''}`} 
                style={{ animationDelay: '500ms', opacity: 0, animationFillMode: 'forwards' }}
            >
                 <button 
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 text-[#e8e8ed] text-sm font-medium hover:text-white"
                 >
                    <Globe size={16} />
                    <span>{language === 'vi' ? 'English' : 'Tiếng Việt'}</span>
                 </button>
            </div>
          </div>
        </div>
        
        {/* Blur Overlay for Page Content when Menu is Open */}
        <div 
            className={`
                fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-500 pointer-events-none md:pointer-events-auto
                ${hoveredLabel || isBagOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `} 
            style={{ top: '44px', height: 'calc(100vh - 44px)' }}
            aria-hidden="true"
        />

      </nav>

      <SmartSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
