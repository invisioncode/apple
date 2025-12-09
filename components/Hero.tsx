import React, { useState, useEffect } from 'react';
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
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
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
        className={`relative w-full h-[550px] sm:h-[650px] md:h-[750px] overflow-hidden group ${bgColorClass}`}
        aria-label={title}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
        role="img"
        aria-label={title + " background"}
      />
      <div className={`absolute inset-0 ${overlayClass}`} aria-hidden="true" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-14 sm:pt-16 md:pt-24 h-full text-center px-6 md:px-4 w-full">
        <h2 className={`text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-1 sm:mb-2 ${textColorClass} animate-fade-in`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg sm:text-2xl md:text-3xl font-normal mb-3 sm:mb-4 ${textColorClass} animate-fade-in opacity-90`} style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>
        )}
        {description && (
             <p className={`text-sm sm:text-lg md:text-xl max-w-xs sm:max-w-lg mx-auto mb-4 sm:mb-6 ${textColor === 'white' ? 'text-gray-200' : 'text-gray-600'} animate-fade-in`} style={{ animationDelay: '200ms' }}>
                 {description}
             </p>
        )}
        
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 sm:mt-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
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