export interface Section {
  id: string;
  component: React.FC;
}

export interface AppImage {
  url: string;
  alt: string;
}

export interface NavigationLink {
  label: string;
  url: string;
}

export interface TechnologyItem {
  label: string;
  description: string;
  percent: number;
  category: string;
}

export interface ProjectItem {
  label: string;
  date: string;
  description: string;
  url: string;
  img: AppImage;
}

export interface ExperienceItem {
  position: string;
  company: string;
  years: string;
  description: string;
}
