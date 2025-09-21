import React from "react";
import AppContact from "../AppContact";
import Marquee from "react-fast-marquee";
import { contacts } from "@/data/contacts";
import Sparkle from "../icons/Sparkle";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 md:gap-10">
      <AppContact />

      <Marquee speed={120} autoFill pauseOnHover>
        <div className="mr-14 flex items-center gap-14 md:mr-18 md:gap-18">
          {contacts
            .filter(({ id }) => ["facebook", "github", "linkedin"].includes(id))
            .map(({ href, label, id, shortId }) => (
              <div key={id} className="flex items-center gap-14 md:gap-18">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-accent font-big-shoulders hover:text-secondary easing-text group relative text-[15rem] leading-[1em] font-black uppercase max-md:leading-[1.2em] md:text-[20rem]"
                >
                  <span className="bg-accent group-hover:bg-secondary transition-[background-color, width] absolute top-1/2 left-1/2 block h-8 w-0 -translate-1/2 duration-200 ease-in group-hover:w-[120%]" />
                  {shortId}
                </a>
                <Sparkle className="text-secondary/10 h-11 w-11 md:h-14 md:w-14" />
              </div>
            ))}
        </div>
      </Marquee>
    </footer>
  );
};

export default Footer;
