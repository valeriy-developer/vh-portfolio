import Container from "@/components/Container";
import ProfileCard from "@/components/ProfileCard";
import React from "react";

const AboutProfile = () => {
  return (
    <section className="pt-16 md:pt-25">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start">
          <ProfileCard className="shrink-0" />
          <div className="flex-1 text-sm md:text-base lg:max-w-[440px] lg:text-lg">
            <p className="text-secondary-50 text-lg md:text-xl lg:text-[1.375rem]">
              Hi, I&rsquo;m Valeriy — a frontend developer passionate about
              building applications that are not only functional but also
              enjoyable to use. For me, frontend development is the perfect mix
              of logic, creativity, and problem-solving.
            </p>
            <div className="mt-8 space-y-2">
              <p>
                I specialize in React, Next.js, and modern state management
                tools, with a strong focus on performance and clean,
                maintainable code. Over the past years, I&rsquo;ve worked on
                projects ranging from e-commerce platforms to trading systems,
                always striving to make the user&rsquo;s experience smooth and
                intuitive.
              </p>
              <p>
                I love exploring new technologies and improving workflows.
                Outside of coding, I find inspiration in continuous learning and
                creative hobbies, which often bring fresh ideas into my
                development work.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutProfile;
