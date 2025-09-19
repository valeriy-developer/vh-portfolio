import AboutSection from '@/components/sections/home/AboutSection';
import EducationSection from '@/components/sections/home/EducationSection';
import ExperienceSection from '@/components/sections/home/ExperienceSection';
import HeroSectionHome from '@/components/sections/home/HeroSection';
import HeroSectionAbout from '@/components/sections/about/HeroSection';
import ProjectsSection from '@/components/sections/home/ProjectsSection';
import TickerSection from '@/components/sections/home/TickerSection';
import { Section } from '@/types';
import ProfileSection from '@/components/sections/about/ProfileSection';

export const homepageSections: Section[] = [
  { id: "hero", component: HeroSectionHome },
  { id: "about", component: AboutSection },
  { id: "projects", component: ProjectsSection },
  { id: "experience", component: ExperienceSection },
  { id: "ticker", component: TickerSection },
  { id: "education", component: EducationSection },
];

export const aboutpageSections: Section[] = [
  { id: "hero", component: HeroSectionAbout },
  { id: "profile", component: ProfileSection },
];