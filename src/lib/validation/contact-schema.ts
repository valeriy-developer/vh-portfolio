import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Enter at least 2 chars" }),
  email: z.string().email({ message: "Invalid email" }),
  message: z.string().min(2, { message: "Enter at least 2 chars" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
