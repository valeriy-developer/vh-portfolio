"use client";

import React, { useRef } from "react";
import Container from "./Container";
import DividerNavLink from "./DividerNavLink";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/validation/contact-schema";
import { cn } from "@/lib/utils";
import { contacts } from "@/data/contacts";
import { useGSAP, SplitText, gsap } from "@/lib/gsap";
import { usePathname } from "next/navigation";

const FormFieldInput = ({
  name,
  placeholder,
  control,
}: {
  name: keyof ContactFormValues;
  placeholder: string;
  control: Control<ContactFormValues>;
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <Input placeholder={placeholder} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const AppContact = () => {
  const pathname = usePathname();
  const sectionRef = useRef<HTMLElement>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onChange",
  });

  const onSubmit = (values: ContactFormValues) => {
    try {
      console.log("Form submitted:", values);
    } catch (error) {
      console.error("Failed to submit:", error);
    }
  };

  useGSAP(
    () => {
      const splitTitle = SplitText.create("[data-title]", {
        type: "chars",
        mask: "chars",
      });
      const splitText = SplitText.create("[data-text]", {
        type: "lines",
        mask: "lines",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      tl.from(splitTitle.chars, {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.inOut",
      });
      tl.from(
        "[data-line]",
        {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<20%",
      );
      tl.from(
        splitText.lines,
        {
          y: 40,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.inOut",
        },
        "<70%",
      );
      tl.from(
        "[data-contacts]",
        {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.inOut",
        },
        "<40%",
      );
      tl.from(
        "[data-form]",
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "<50%",
      );
    },
    { scope: sectionRef, dependencies: [pathname] },
  );

  return (
    <section ref={sectionRef} className="pt-20 pb-10 md:pt-37.5">
      <Container>
        <DividerNavLink label="Contact" url="/contact" />

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-17">
          <div>
            <p
              data-text
              className="text-lg max-md:max-w-[60%] max-sm:max-w-[100%] md:text-xl lg:text-[1.375rem]"
            >
              I&rsquo;m open to exciting opportunities, collaborations, or just
              a chat about tech. Let&rsquo;s connect!
            </p>
            <div
              data-contacts
              className="mt-6 flex flex-col gap-1 text-sm md:mt-9.5 md:text-base lg:text-lg"
            >
              {contacts
                .filter(({ id }) =>
                  ["email", "location", "linkedin"].includes(id),
                )
                .map(({ href, label, external, id }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className={cn(
                      "w-fit transition-colors duration-300",
                      id === "location" && "hover:text-accent",
                      id !== "location" && "text-accent h-underline-r relative",
                    )}
                  >
                    {label}
                  </a>
                ))}
            </div>
          </div>

          <Form {...form}>
            <form
              data-form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="flex w-full items-center gap-6">
                <FormFieldInput
                  name="name"
                  placeholder="Name"
                  control={form.control}
                />
                <FormFieldInput
                  name="email"
                  placeholder="Email"
                  control={form.control}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Message..."
                        className="h-38"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                aria-label="Send message"
                disabled={
                  form.formState.isSubmitting || !form.formState.isValid
                }
                className="h-auto w-full py-3"
              >
                Send
              </Button>
            </form>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default AppContact;
