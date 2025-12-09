import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ShoppingBag, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS, NAV_SUBMENUS } from '../constants';
import SmartSearch from './SmartSearch';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // State for submenus
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Handle Desktop Hover Logic
  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredLabel(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
        setHoveredLabel(null);
    }, 150); // Slight delay to allow moving mouse from link to submenu
  };

  const activeSubMenu = hoveredLabel ? NAV_SUBMENUS[hoveredLabel] : null;

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isMobileMenuOpen || hoveredLabel ? 'bg-[#161617]' : (isScrolled ? 'bg-[#161617]/80 backdrop-blur-md' : 'bg-[#161617]/90')
        }`}
        aria-label="Global"
        onMouseLeave={handleMouseLeave}
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
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 z-50">
             <Link 
                to="/" 
                className="text-[#e8e8ed] hover:opacity-80 transition-opacity" 
                aria-label="Apple" 
                onClick={closeMobileMenu}
                onMouseEnter={() => handleMouseEnter('')} // Close submenu when hovering logo
             >
                <Apple size={20} className="fill-current" aria-hidden="true" />
             </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex justify-between items-center w-full px-8 h-full">
            <ul className="flex justify-between items-center w-full list-none m-0 p-0 h-full">
                {NAV_ITEMS.map((item) => (
                <li 
                    key={item.label} 
                    className="h-full flex items-center"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                >
                    <Link 
                        to={item.href}
                        className={`
                            text-[12px] transition-colors duration-300 tracking-tight px-2
                            ${hoveredLabel && hoveredLabel !== item.label ? 'text-gray-500' : 'text-[#e8e8ed]/80 hover:text-white'}
                        `}
                    >
                        {item.label}
                    </Link>
                </li>
                ))}
            </ul>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 z-50 text-[#e8e8ed]">
            <button 
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="hover:opacity-80 transition-opacity p-1"
                aria-label="Search apple.com"
                onMouseEnter={() => handleMouseEnter('')} // Close submenu
            >
               <Search size={18} aria-hidden="true" />
            </button>
            <Link 
                to="/store" 
                className="hover:opacity-80 transition-opacity p-1" 
                aria-label="Shopping Bag"
                onMouseEnter={() => handleMouseEnter('')} // Close submenu
            >
               <ShoppingBag size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Desktop Submenu Overlay */}
        <div 
            className={`
                absolute top-full left-0 w-full bg-[#161617] text-white overflow-hidden transition-all duration-500 ease-in-out
                ${activeSubMenu ? 'opacity-100 visible max-h-[500px] border-b border-gray-700/50 shadow-2xl' : 'opacity-0 invisible max-h-0'}
            `}
            onMouseEnter={() => {
                if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
        >
            <div className="max-w-[1024px] mx-auto px-4 py-10">
                <div className="flex flex-row justify-start gap-12">
                    {activeSubMenu && activeSubMenu.map((group, idx) => (
                        <div key={idx} className="flex flex-col gap-3 min-w-[120px]">
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
                                            className="text-[20px] font-semibold text-[#e8e8ed] hover:text-white block leading-tight"
                                            onClick={() => setHoveredLabel(null)}
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
            fixed inset-0 bg-black z-40 pt-[44px] px-8 transition-all duration-500 ease-in-out md:hidden
            ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible'}
            `}
            aria-hidden={!isMobileMenuOpen}
        >
          <div className="flex flex-col h-full pb-20 overflow-y-auto">
            <div className="flex relative items-center mt-4 mb-8">
                <Search className="absolute left-3 text-gray-500 w-5 h-5" aria-hidden="true" />
                <input 
                    type="text" 
                    placeholder="Tìm kiếm trên apple.com" 
                    className="w-full bg-[#1d1d1f] text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/50"
                    aria-label="Search apple.com"
                    onFocus={() => {
                        setIsMobileMenuOpen(false);
                        setIsSearchOpen(true);
                    }}
                />
            </div>
            <nav aria-label="Mobile">
                <ul className="flex flex-col space-y-1 list-none p-0">
                {NAV_ITEMS.map((item, index) => (
                    <li key={item.label}>
                        <Link 
                        to={item.href}
                        onClick={closeMobileMenu}
                        className="block text-[#e8e8ed] text-[28px] font-semibold py-2 border-b border-gray-800 hover:text-white transition-colors animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                        >
                        {item.label}
                        </Link>
                    </li>
                ))}
                </ul>
            </nav>
          </div>
        </div>
        
        {/* Blur Overlay for Page Content when Menu is Open */}
        <div 
            className={`
                fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-500 pointer-events-none md:pointer-events-auto
                ${hoveredLabel ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `} 
            style={{ top: '44px', height: 'calc(100vh - 44px)' }}
            aria-hidden="true"
        />

      </nav>

      {/* Smart Search Modal */}
      <SmartSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;