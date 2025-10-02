"use client";

import React from "react";
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
  const form = useForm<ContactFormValues>({
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
        console.log("Message sent successfully");
        form.reset();
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="pt-20 pb-10 md:pt-37.5">
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
