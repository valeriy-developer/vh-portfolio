"use client";

import React, { useRef } from "react";
import Container from "./Container";
import DividerNavLink from "./DividerNavLink";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/validation/contact-schema";
import { cn } from "@/lib/utils";
import { contacts } from "@/data/contacts";
import { useModal } from "@/providers/ModalsProvider";
import { toast } from "sonner";
import { usePathname } from "next/navigation";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";

const Field = ({
  as: Component = Input,
  name,
  placeholder,
  register,
  errors,
  className,
}: {
  as?: typeof Input | typeof Textarea;
  name: keyof ContactFormValues;
  placeholder: string;
  register: ReturnType<typeof useForm<ContactFormValues>>["register"];
  errors: Record<string, any>;
  className?: string;
}) => (
  <div className="relative w-full">
    <Component
      placeholder={placeholder}
      {...register(name)}
      className={className}
    />
    {errors[name] && (
      <p className="absolute -bottom-4.5 text-xs text-red-500">
        {errors[name]?.message}
      </p>
    )}
  </div>
);

const AppContact = () => {
  const { openModal } = useModal();
  const pathname = usePathname();

  const contactsRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onChange",
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const response = await fetch("https://formspree.io/f/mnngvgdd", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        openModal("submit");
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error:", error);
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
          trigger: contactsRef.current,
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
        "<",
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
        "<20%",
      );
    },
    { scope: contactsRef, dependencies: [pathname] },
  );

  return (
    <div ref={contactsRef} className="pt-20 pb-10 md:pt-37.5">
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

          <form
            data-form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="flex w-full items-center gap-6">
              <Field
                name="name"
                placeholder="Name"
                register={register}
                errors={errors}
              />
              <Field
                name="email"
                placeholder="Email"
                register={register}
                errors={errors}
              />
            </div>

            <Field
              as={Textarea}
              name="message"
              placeholder="Message..."
              register={register}
              errors={errors}
              className="h-38"
            />

            <Button
              type="submit"
              aria-label="Send message"
              disabled={isSubmitting || !isValid}
              className="h-auto w-full py-3"
            >
              Send
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AppContact;
