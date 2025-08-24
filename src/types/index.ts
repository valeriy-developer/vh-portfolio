export interface Section {
  id: string;
  component: React.FC;
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
