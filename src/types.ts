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