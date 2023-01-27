export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface NavItemDropdown {
  title: string;
  items: NavItem[];
}

export interface MemberCardProps {
  name: string;
  title: string;
  description: string;
  img: string;
  links: FooterLink[];
}