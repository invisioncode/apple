import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const { Link } = ReactRouterDOM as any;

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'outline' | 'link';
  onClick?: () => void;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  isLoading?: boolean;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  'aria-haspopup'?: boolean | "dialog" | "menu" | "listbox" | "tree" | "grid";
  'aria-pressed'?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  variant = 'primary', 
  onClick, 
  href, 
  size = 'md',
  className = '',
  ariaLabel,
  disabled = false,
  isLoading = false,
  'aria-expanded': ariaExpanded,
  'aria-controls': ariaControls,
  'aria-haspopup': ariaHasPopup,
  'aria-pressed': ariaPressed,
}) => {
  const { localePrefix } = useLanguage();
  
  const baseStyles = "inline-flex items-center justify-center rounded-full transition-all duration-300 font-medium cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0071e3] disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#0071e3] text-white hover:bg-[#0077ed]",
    outline: "bg-transparent border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white",
    link: "bg-transparent text-[#0066cc] hover:underline hover:text-[#004499] !p-0 !rounded-none focus-visible:ring-0 focus-visible:underline",
  };

  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-5 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const appliedSize = variant === 'link' ? '' : sizes[size];
  const combinedClassName = `${baseStyles} ${variants[variant]} ${appliedSize} ${className} ${isLoading ? 'opacity-80 cursor-wait' : ''}`;

  const content = (
    <span className="flex items-center gap-2">
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
      <span>{label}</span>
      {!isLoading && variant === 'link' && <span className="text-xs" aria-hidden="true">›</span>}
    </span>
  );

  const commonAriaProps = {
    'aria-label': ariaLabel || label,
    'aria-disabled': (disabled || isLoading) ? true : undefined,
    'aria-busy': isLoading ? true : undefined,
  };

  const isInteractive = !disabled && !isLoading;

  if (href) {
    if (disabled) {
        return (
            <span 
                className={`${combinedClassName} opacity-50 cursor-not-allowed`} 
                role="link" 
                aria-disabled="true"
            >
                {content}
            </span>
        );
    }

    if (href.startsWith('http') || href.startsWith('#')) {
      return (
        <a 
          href={href} 
          onClick={isInteractive ? onClick : (e) => e.preventDefault()}
          className={combinedClassName}
          {...commonAriaProps}
        >
          {content}
        </a>
      );
    }

    // Apply locale prefix for internal routing
    const targetHref = `${localePrefix}${href}`;

    return (
      <Link 
        to={targetHref} 
        onClick={isInteractive ? onClick : (e) => e.preventDefault()}
        className={combinedClassName}
        {...commonAriaProps}
      >
        {content}
      </Link>
    );
  }

  return (
    <button 
      type="button"
      onClick={onClick}
      disabled={disabled || isLoading}
      className={combinedClassName}
      {...commonAriaProps}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      aria-pressed={ariaPressed}
    >
      {content}
    </button>
  );
};

export default Button;