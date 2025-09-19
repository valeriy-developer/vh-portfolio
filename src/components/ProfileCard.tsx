import React from "react";
import Logo from "../components/icons/Logo";
import Linkedin from "./icons/socials/Linkedin";
import Github from "./icons/socials/Github";
import { contacts } from "@/data/contacts";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const ProfileCard = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "relative h-[454px] w-full max-w-[325px] md:h-[536px] md:max-w-[370px]",
        className,
      )}
    >
      <img
        className="relative z-10 h-[380px] w-full max-w-[278px] rounded-lg object-cover md:h-[480px] md:max-w-[336px]"
        src="/images/vh-photo.png"
        alt="VH Photo"
      />
      <Logo className="easing text-accent absolute top-2 right-4 z-10 h-[60px] w-[60px] md:top-0 md:-right-5 md:h-[100px] md:w-[100px]" />
      <div className="bg-accent text-primary absolute right-0 bottom-0 flex h-[75%] w-full max-w-[278px] items-end justify-center gap-5 rounded-lg px-16.5 py-6 transition-[background] duration-300 ease-in md:max-w-[336px] md:py-4">
        {contacts
          .filter(({ id }) => ["linkedin", "github"].includes(id))
          .map(({ id, href, label }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-primary-50 easing"
            >
              {id === "linkedin" && <Linkedin />}
              {id === "github" && <Github />}
            </a>
          ))}
      </div>
    </div>
  );
};

export default ProfileCard;
