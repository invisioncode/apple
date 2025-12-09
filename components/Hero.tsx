import React from 'react';
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
  const textColorClass = textColor === 'white' ? 'text-white' : 'text-[#1d1d1f]';
  const overlayClass = textColor === 'white' ? 'bg-gradient-to-t from-black/20 to-transparent' : '';

  return (
    <section 
        className="relative w-full h-[650px] md:h-[750px] overflow-hidden group"
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
      <div className="relative z-10 flex flex-col items-center justify-start pt-16 md:pt-24 h-full text-center px-4 w-full">
        <h2 className={`text-4xl md:text-6xl font-semibold tracking-tight mb-2 ${textColorClass} animate-fade-in`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-xl md:text-3xl font-normal mb-3 ${textColorClass} animate-fade-in opacity-90`} style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>
        )}
        {description && (
             <p className={`text-lg md:text-xl max-w-lg mx-auto mb-4 ${textColor === 'white' ? 'text-gray-200' : 'text-gray-600'} animate-fade-in`} style={{ animationDelay: '200ms' }}>
                 {description}
             </p>
        )}
        
        <div className="flex flex-col md:flex-row items-center gap-4 mt-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
          {links.map((link, idx) => (
             <Button 
                key={idx} 
                label={link.label} 
                href={link.url} 
                variant={link.primary ? 'primary' : 'outline'}
                className={!link.primary && textColor === 'white' ? '!text-white !border-white hover:!bg-white hover:!text-black' : ''}
                ariaLabel={`${link.label} ${title}`}
             />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;