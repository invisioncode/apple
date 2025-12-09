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
}

export interface GridItemProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  textColor: 'black' | 'white';
  links?: { label: string; url: string }[];
  logoUrl?: string;
  large?: boolean;
}

export interface FooterSection {
  title: string;
  links: string[];
}