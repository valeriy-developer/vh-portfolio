import AboutSection from '@/components/sections/home/AboutSection';
import HeroSection from '@/components/sections/home/HeroSection';
import { Section } from '@/types';

export const homepageSections: Section[] = [
  { id: "hero", component: HeroSection },
  { id: "about", component: AboutSection },
];