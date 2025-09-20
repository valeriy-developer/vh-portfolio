"use client";

import { contactPageSections } from "@/config/sections.config";

const ContactPage = () => {
  return (
    <>
      {contactPageSections.map(({ id, component: Component }) => (
        <Component key={id} />
      ))}
    </>
  );
};

export default ContactPage;
