"use client";

import React from "react";
import Container from "./Container";
import DividerNavLink from "./DividerNavLink";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/validation/contact-schema";
import { cn } from "@/lib/utils";

const contacts = [
  {
    href: "http://maps.google.com/?q=Ukraine, Kriviy Rih",
    label: "Ukraine, Kriviy Rih",
    external: true,
  },
  {
    href: "mailto:valeriy.gnybidenko@gmail.com",
    label: "valeriy.gnybidenko@gmail.com",
    className: "text-accent h-underline-r relative",
  },
  {
    href: "https://www.linkedin.com/in/valeriy-hnybidenko-036632279",
    label: "LinkedIn",
    external: true,
    className: "text-accent h-underline-r relative",
  },
];

const FormFieldInput = ({
  name,
  placeholder,
  control,
}: {
  name: keyof ContactFormValues;
  placeholder: string;
  control: any;
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

  return (
    <section className="pt-20 pb-10 md:pt-37.5">
      <Container>
        <DividerNavLink label="Contact" url="/contact" />

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-17">
          <div>
            <p className="text-lg max-md:max-w-[60%] max-sm:max-w-[100%] md:text-xl lg:text-[1.375rem]">
              I&rsquo;m open to exciting opportunities, collaborations, or just
              a chat about tech. Let&rsquo;s connect!
            </p>
            <div className="mt-6 flex flex-col gap-1 text-sm md:mt-9.5 md:text-base lg:text-lg">
              {contacts.map(({ href, label, external, className }) => (
                <a
                  key={label}
                  href={href}
                  rel={external ? "noopener noreferrer" : undefined}
                  target={external ? "_blank" : undefined}
                  className={cn(
                    "w-fit transition-colors duration-300",
                    className,
                  )}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
