import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { ProductHeroProps } from '../types';

const Hero: React.FC<ProductHeroProps> = ({ 
  title, 
  subtitle, 
  description,
  imageUrl, 
  textColor, 
  links 
}) => {
  const [loadingBtnIndex, setLoadingBtnIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !parallaxRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only animate if element is in view (with some buffer)
      if (rect.bottom > 0 && rect.top < windowHeight) {
        // Calculate offset: 
        // When rect.top is 0 (top of viewport), offset is 0.
        // As element scrolls up (rect.top becomes negative), we move bg down (positive translateY)
        // to create the "slower movement" effect.
        const speed = 0.15;
        const offset = rect.top * speed * -1;
        parallaxRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleButtonClick = (index: number) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setLoadingBtnIndex(index);

    // Reset loading state after a delay to ensure it doesn't spin forever
    // if navigation is instant or if it's a hash link that doesn't unmount the component.
    timeoutRef.current = setTimeout(() => {
      setLoadingBtnIndex(null);
    }, 2000);
  };
  
  const textColorClass = textColor === 'white' ? 'text-white' : 'text-[#1d1d1f]';
  const overlayClass = textColor === 'white' ? 'bg-gradient-to-t from-black/20 to-transparent' : '';
  const bgColorClass = textColor === 'white' ? 'bg-black' : 'bg-[#f5f5f7]';

  return (
    <section 
        ref={containerRef}
        className={`relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[750px] overflow-hidden group ${bgColorClass}`}
        aria-label={title}
    >
      {/* Background Image Wrapper for Parallax */}
      {/* Height is 120% and top is -10% to allow space for movement */}
      <div 
        ref={parallaxRef}
        className="absolute w-full left-0 h-[120%] -top-[10%] pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
            role="img"
            aria-label={title + " background"}
        />
      </div>

      <div className={`absolute inset-0 ${overlayClass}`} aria-hidden="true" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-10 sm:pt-14 md:pt-20 h-full text-center px-4 sm:px-6 w-full max-w-[1440px] mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-2 ${textColorClass} animate-fade-in`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-snug mb-3 sm:mb-4 max-w-[90%] sm:max-w-2xl mx-auto ${textColorClass} animate-fade-in opacity-90`} style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>
        )}
        {description && (
             <p className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-[280px] xs:max-w-xs sm:max-w-md md:max-w-lg mx-auto mb-4 sm:mb-6 ${textColor === 'white' ? 'text-gray-200' : 'text-gray-600'} animate-fade-in`} style={{ animationDelay: '200ms' }}>
                 {description}
             </p>
        )}
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-4 animate-fade-in w-full sm:w-auto" style={{ animationDelay: '300ms' }}>
          {links.map((link, idx) => (
             <Button 
                key={idx} 
                label={link.label} 
                href={link.url} 
                variant={link.primary ? 'primary' : 'outline'}
                className={!link.primary && textColor === 'white' ? '!text-white !border-white hover:!bg-white hover:!text-black' : ''}
                ariaLabel={`${link.label} ${title}`}
                onClick={() => handleButtonClick(idx)}
                isLoading={loadingBtnIndex === idx}
             />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;