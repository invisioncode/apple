import React from 'react';
import Button from './Button';
import { GridItemProps } from '../types';

const GridItem: React.FC<GridItemProps> = ({ 
  title, 
  subtitle, 
  imageUrl, 
  imageAlt,
  textColor, 
  links, 
  logoUrl,
  large = false
}) => {
  const textColorClass = textColor === 'white' ? 'text-white' : 'text-[#1d1d1f]';
  // 2025: Stark contrast for Bento grids (pure black or off-white)
  const bgColorClass = textColor === 'white' ? 'bg-black' : 'bg-[#fbfbfd] dark:bg-[#121212]';

  return (
    <section 
        className={`
            relative w-full overflow-hidden group 
            ${large ? 'h-[500px] md:h-[600px]' : 'h-[500px] md:h-[580px]'} 
            ${bgColorClass}
            rounded-[28px] md:rounded-[32px]
            transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl
        `}
        aria-label={title}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[1.2s] ease-in-out scale-100 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
        role="img"
        aria-label={imageAlt || `${title} image`}
      />
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-12 md:pt-16 text-center px-6 h-full pointer-events-none">
        {logoUrl ? (
            <img src={logoUrl} alt={title} className="h-8 md:h-12 mb-4 object-contain animate-fade-in" />
        ) : (
            <h3 className={`text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 tracking-tight leading-tight ${textColorClass} animate-fade-in`}>
            {title}
            </h3>
        )}
        
        {subtitle && (
          <p className={`text-lg md:text-xl font-normal leading-snug mb-4 ${textColorClass} opacity-90 max-w-md animate-fade-in`} style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>
        )}

        <div className="flex gap-5 mt-3 pointer-events-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
           {links?.map((link, i) => (
               <Button 
                key={i} 
                label={link.label} 
                href={link.url} 
                variant={i === 0 ? "primary" : "link"} // Primary action + Link combo
                size="sm"
                className={`
                    ${i === 0 ? 'rounded-full px-5 py-2 !font-medium' : 'text-base hover:underline'}
                    ${i === 0 && textColor === 'white' ? '!bg-white !text-black hover:!bg-gray-100 border-none' : ''}
                    ${i > 0 && textColor === 'white' ? '!text-white' : ''}
                `}
                ariaLabel={`${link.label} ${title}`}
               />
           ))}
        </div>
      </div>
    </section>
  );
};

export default GridItem;