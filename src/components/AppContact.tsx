import React from "react";
import Container from "./Container";
import DividerNavLink from "./DividerNavLink";

const AppContact = () => {
  return (
    <section className="pt-20 md:pt-37.5">
      <Container>
        <DividerNavLink label="Contact" url="/contact" />

        <div className="mt-10 grid grid-cols-2 gap-17 md:mt-16">
          <div>
            <p className="text-lg md:text-xl lg:text-[1.375rem]">
              I&rsquo;m open to exciting opportunities, collaborations, or just
              a chat about tech. Let&rsquo;s connect!
            </p>
            <div className="mt-6 flex flex-col text-sm md:mt-9.5 md:text-base lg:text-lg">
              <a
                href="http://maps.google.com/?q=Ukraine, Kriviy Rih"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ukraine, Kriviy Rih
              </a>
              <a
                href="mailto:valeriy.gnybidenko@gmail.com"
                className="text-accent"
              >
                valeriy.gnybidenko@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/valeriy-hnybidenko-036632279"
                rel="noopener noreferrer"
                target="_blank"
                className="text-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <form>Form</form>
        </div>
      </Container>
    </section>
  );
};

export default AppContact;
