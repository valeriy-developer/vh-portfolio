import AboutSection from '@/components/sections/home/AboutSection';
import EducationSection from '@/components/sections/home/EducationSection';
import ExperienceSection from '@/components/sections/home/ExperienceSection';
import HeroSectionHome from '@/components/sections/home/HeroSection';
import HeroSectionAbout from '@/components/sections/about/HeroSection';
import HeroSectionProjects from '@/components/sections/projects/HeroSection';
import ProjectsSectionHome from '@/components/sections/home/ProjectsSection';
import TickerSection from '@/components/sections/home/TickerSection';
import { Section } from '@/types';
import ProfileSection from '@/components/sections/about/ProfileSection';
import SkillsSection from '@/components/sections/about/SkillsSection';
import ProjectsSection from '@/components/sections/projects/ProjectsSection';

export const homepageSections: Section[] = [
  { id: "hero", component: HeroSectionHome },
  { id: "about", component: AboutSection },
  { id: "projects", component: ProjectsSectionHome },
  { id: "experience", component: ExperienceSection },
  { id: "ticker", component: TickerSection },
  { id: "education", component: EducationSection },
];

export const aboutpageSections: Section[] = [
  { id: "hero", component: HeroSectionAbout },
  { id: "profile", component: ProfileSection },
  { id: "skills", component: SkillsSection },
];

export const projectspageSections: Section[] = [
  { id: "hero", component: HeroSectionProjects },
  { id: "projects", component: ProjectsSection },
];