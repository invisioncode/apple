import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { ProductHeroProps } from '../types';

const Hero: React.FC<ProductHeroProps> = ({ 
  title, 
  subtitle, 
  description,
  imageUrl, 
  textColor, 
  links,
  imagePosition,
  position = 'top' // Default text position
}) => {
  const [loadingBtnIndex, setLoadingBtnIndex] = useState<number | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } 
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    setIsImageLoaded(false);
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(true);
    if (img.complete) setIsImageLoaded(true);
  }, [imageUrl, shouldLoad]);

  const handleButtonClick = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setLoadingBtnIndex(index);
    timeoutRef.current = setTimeout(() => setLoadingBtnIndex(null), 2000);
  };
  
  const textColorClass = textColor === 'white' ? 'text-white' : 'text-[#1d1d1f]';
  
  // 2025 Design: Cleaner gradient or solid backgrounds depending on context
  const bgColorClass = textColor === 'white' ? 'bg-black' : 'bg-[#fbfbfd]';

  // Text positioning logic
  const contentPositionClass = position === 'bottom' 
    ? 'justify-end pb-12 md:pb-16' 
    : 'justify-start pt-12 md:pt-16';

  return (
    <section 
        ref={containerRef}
        className={`relative w-full h-[580px] md:h-[692px] overflow-hidden group ${bgColorClass} mb-3 md:mb-5`} // Added margin bottom for spacing between heroes
        aria-label={title}
    >
      {/* Background Image */}
      <div 
        className={`absolute inset-0 transition-transform duration-[1.5s] ease-in-out group-hover:scale-[1.01]`}
      >
        <div 
            className={`
                w-full h-full bg-cover bg-no-repeat transition-opacity duration-1000 ease-out
                ${!imagePosition ? 'bg-center' : ''} 
                ${isImageLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ 
                backgroundImage: shouldLoad ? `url(${imageUrl})` : 'none',
                backgroundPosition: imagePosition || 'center'
            }}
            role="img"
            aria-label={title + " background"}
        />
      </div>

      {/* Content Container */}
      <div className={`relative z-10 flex flex-col items-center h-full text-center px-6 w-full max-w-[1440px] mx-auto ${contentPositionClass}`}>
        <h2 className={`text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-2 ${textColorClass} animate-fade-in`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-xl sm:text-2xl md:text-3xl font-normal leading-tight mb-3 md:mb-4 max-w-2xl mx-auto ${textColorClass} animate-fade-in`} style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>
        )}
        {description && (
             <p className={`text-sm md:text-lg font-medium text-gray-500 max-w-lg mx-auto mb-6 animate-fade-in`} style={{ animationDelay: '200ms' }}>
                 {description}
             </p>
        )}
        
        <div className="flex flex-row items-center justify-center gap-4 mt-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
          {links.map((link, idx) => (
             <Button 
                key={idx} 
                label={link.label} 
                href={link.url} 
                variant={link.primary ? 'primary' : 'outline'}
                size="md" // 2025 style prefers uniform medium/large buttons
                className={`
                    !rounded-full px-6 py-2.5 
                    ${!link.primary && textColor === 'white' 
                        ? '!text-white !border-white hover:!bg-white hover:!text-black' 
                        : link.primary 
                            ? 'bg-[#0071e3] hover:bg-[#0077ed]' 
                            : 'border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white'
                    }
                `}
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