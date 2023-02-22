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

export interface Midia {
  src: string;
  alt: string;
}

export interface YoutubeVideo {
  title: string;
  videoId: string;
}
export interface TimelineItem {
  year: string;
  items: string[];
}

export interface PublicationItem {
  title: string;
  description: string;
  date: string;
  url: string;
  tag?: 'tutorial' | 'paper';
}