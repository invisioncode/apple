
export interface NavItem {
  label: string;
  href: string;
}

export interface ProductHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl: string;
  textColor: 'black' | 'white';
  links: { label: string; url: string; primary?: boolean }[];
  position?: 'top' | 'bottom' | 'center';
  imagePosition?: string;
}

export interface GridItemProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt?: string; // Added for accessibility
  textColor: 'black' | 'white';
  links?: { label: string; url: string }[];
  logoUrl?: string;
  large?: boolean;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLinkItem[];
}

// New Types for Submenus
export interface SubMenuLink {
  label: string;
  href: string;
}

export interface SubMenuGroup {
  title?: string; // e.g., "Explore Mac", "Shop Mac"
  links: SubMenuLink[];
}

export interface SubMenuData {
  [key: string]: SubMenuGroup[]; // key matches the NavItem label (e.g., "Mac")
}

export type Language = 'vi' | 'en' | 'ar';
