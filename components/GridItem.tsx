
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
  const bgColorClass = textColor === 'white' ? 'bg-black' : 'bg-[#f5f5f7]';

  return (
    <section 
        className={`relative w-full ${large ? 'h-[600px]' : 'h-[500px] md:h-[580px]'} overflow-hidden group ${bgColorClass}`}
        aria-label={title}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[1500ms] ease-in-out group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
        role="img"
        aria-label={imageAlt || `${title} image`}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-12 text-center px-6 h-full">
        {logoUrl ? (
            <img src={logoUrl} alt={title} className="h-10 md:h-12 mb-4 object-contain" />
        ) : (
            <h3 className={`text-3xl md:text-4xl font-semibold mb-2 ${textColorClass}`}>
            {title}
            </h3>
        )}
        
        {subtitle && (
          <p className={`text-base md:text-xl mb-4 ${textColorClass} max-w-xs md:max-w-md`}>
            {subtitle}
          </p>
        )}

        <div className="flex gap-4 mt-2">
           {links?.map((link, i) => (
               <Button 
                key={i} 
                label={link.label} 
                href={link.url} 
                variant="link" 
                className={textColor === 'white' ? '!text-white hover:!text-gray-200' : ''}
                ariaLabel={`${link.label} ${title}`}
               />
           ))}
        </div>
      </div>
    </section>
  );
};

export default GridItem;
