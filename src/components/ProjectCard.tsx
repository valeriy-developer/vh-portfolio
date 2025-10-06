import { ProjectItem } from "@/types";
import React from "react";

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  return (
    <li data-items className="group relative h-60 overflow-hidden lg:h-80">
      <a href={project.url} rel="noopener noreferrer" target="_blank">
        <img
          src={project.img.url}
          alt={project.img.alt}
          className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/60" />
        <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]" />
        <div className="bg-accent text-primary absolute bottom-0 left-0 max-w-[80%] rounded-tr-2xl px-6 py-3 text-lg font-bold tracking-[-0.02em] transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100 lg:translate-x-[-100%] lg:px-8 lg:py-5 lg:opacity-0">
          {project.label}
        </div>
      </a>
    </li>
  );
};

export default ProjectCard;
