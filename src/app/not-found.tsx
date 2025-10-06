"use client";

import AppHeroContent from "@/components/AppHeroContent";
import Container from "@/components/Container";
import TransitionLink from "@/components/TransitionLink";

const NotFoundPage = () => {
  return (
    <div className="col-center">
      <AppHeroContent title="404" />
      <Container>
        <p className="easing-text mt-28 text-center text-lg md:text-xl lg:text-[1.375rem]">
          Ooops! Something went wrong. Please go back to{" "}
          <TransitionLink
            href="/"
            className="easing-text text-accent h-underline-r relative"
          >
            homepage
          </TransitionLink>
          .
        </p>
      </Container>
    </div>
  );
};

export default NotFoundPage;
