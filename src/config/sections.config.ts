import { Section } from '@/types';
import HomeAbout from '@/components/sections/home/About';
import HomeProjects from '@/components/sections/home/Projects';
import HomeExperience from '@/components/sections/home/Experience';
import HomeTicker from '@/components/sections/home/Ticker';
import HomeEducation from '@/components/sections/home/Education';
import AboutProfile from '@/components/sections/about/Profile';
import AboutSkills from '@/components/sections/about/Skills';
import HomeHero from '@/components/sections/home/Hero';
import AboutHero from '@/components/sections/about/Hero';
import ProjectsHero from '@/components/sections/projects/Hero';
import ProjectsSection from '@/components/sections/projects/Projects';
import ExperienceHero from '@/components/sections/experience/Hero';
import ExperienceSection from '@/components/sections/experience/Experience';
import EducationHero from '@/components/sections/education/Hero';
import EducationSection from '@/components/sections/education/Education';
import EducationTicker from '@/components/sections/education/Ticker';

export const homePageSections: Section[] = [
  { id: "hero", component: HomeHero },
  { id: "about", component: HomeAbout },
  { id: "projects", component: HomeProjects },
  { id: "experience", component: HomeExperience },
  { id: "ticker", component: HomeTicker },
  { id: "education", component: HomeEducation },
];

export const aboutPageSections: Section[] = [
  { id: "hero", component: AboutHero },
  { id: "profile", component: AboutProfile },
  { id: "skills", component: AboutSkills },
];

export const projectsPageSections: Section[] = [
  { id: "hero", component: ProjectsHero },
  { id: "projects", component: ProjectsSection },
];

export const experiencePageSections: Section[] = [
  { id: "hero", component: ExperienceHero },
  { id: "experience", component: ExperienceSection },
];

export const educationPageSections: Section[] = [
  { id: "hero", component: EducationHero },
  { id: "education", component: EducationSection },
  { id: "ticker", component: EducationTicker },
];