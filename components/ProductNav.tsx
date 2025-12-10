
import React from 'react';
import { Link } from 'react-router-dom';

export interface ProductNavItem {
  id: string;
  label: string;
  image: string;
  url: string;
  isNew?: boolean;
}

interface ProductNavProps {
  items: ProductNavItem[];
  dark?: boolean;
}

const ProductNav: React.FC<ProductNavProps> = ({ items, dark = false }) => {
  return (
    <div className={`sticky top-[44px] z-30 w-full backdrop-blur-md border-b border-gray-200/50 transition-colors duration-300 ${dark ? 'bg-black/80 text-white' : 'bg-white/80 text-gray-900'}`}>
      <div className="max-w-[1024px] mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex items-start justify-start md:justify-center min-w-max gap-8 md:gap-12 py-4">
          {items.map((item) => (
            <Link 
              key={item.id} 
              to={item.url}
              className="group flex flex-col items-center gap-2 min-w-[60px]"
            >
              <div className="h-10 w-auto flex items-end justify-center">
                 <img 
                    src={item.image} 
                    alt="" 
                    className="h-full object-contain filter group-hover:brightness-90 transition-all" 
                 />
              </div>
              <span className={`text-[11px] font-medium leading-tight whitespace-pre-wrap text-center group-hover:text-apple-blue transition-colors ${dark ? 'text-gray-300' : 'text-gray-900'}`}>
                {item.label}
                {item.isNew && <span className="block text-[9px] text-orange-500 font-normal mt-0.5">Mới</span>}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductNav;
