import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'outline' | 'link';
  onClick?: () => void;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  variant = 'primary', 
  onClick, 
  href, 
  size = 'md',
  className = '',
  ariaLabel
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full transition-all duration-300 font-medium cursor-pointer";
  
  const variants = {
    primary: "bg-[#0071e3] text-white hover:bg-[#0077ed]",
    outline: "bg-transparent border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white",
    link: "bg-transparent text-[#0066cc] hover:underline hover:text-[#004499] !p-0 !rounded-none",
  };

  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-5 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  // Link variant ignores size usually, but we keep it safe
  const appliedSize = variant === 'link' ? '' : sizes[size];

  const content = (
    <span className="flex items-center gap-1">
      {label}
      {variant === 'link' && <span className="text-xs">›</span>}
    </span>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('#')) {
      return (
        <a 
          href={href} 
          className={`${baseStyles} ${variants[variant]} ${appliedSize} ${className}`}
          aria-label={ariaLabel || label}
        >
          {content}
        </a>
      );
    }
    return (
      <Link 
        to={href} 
        className={`${baseStyles} ${variants[variant]} ${appliedSize} ${className}`}
        aria-label={ariaLabel || label}
      >
        {content}
      </Link>
    );
  }

  return (
    <button 
      type="button"
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${appliedSize} ${className}`}
      aria-label={ariaLabel || label}
    >
      {content}
    </button>
  );
};

export default Button;