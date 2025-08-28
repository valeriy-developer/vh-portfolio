import AboutSection from '@/components/sections/home/AboutSection';
import ExperienceSection from '@/components/sections/home/ExperienceSection';
import HeroSection from '@/components/sections/home/HeroSection';
import ProjectsSection from '@/components/sections/home/ProjectsSection';
import TickerSection from '@/components/sections/home/TickerSection';
import { Section } from '@/types';

export const homepageSections: Section[] = [
  { id: "hero", component: HeroSection },
  { id: "about", component: AboutSection },
  { id: "projects", component: ProjectsSection },
  { id: "experience", component: ExperienceSection },
  { id: "ticker", component: TickerSection },
];