"use client";

import AppHeroContent from "@/components/AppHeroContent";
import Container from "@/components/Container";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="col-center">
      <AppHeroContent title="404" />
      <Container>
        <p className="easing-text mt-28 text-center text-lg md:text-xl lg:text-[1.375rem]">
          Ooops! Something went wrong. Please go back to{" "}
          <Link
            href="/"
            className="easing-text text-accent h-underline-r relative"
          >
            homepage
          </Link>
          .
        </p>
      </Container>
    </div>
  );
};

export default NotFoundPage;
