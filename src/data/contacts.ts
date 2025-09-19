interface Contact {
  id: string;
  href: string;
  label: string;
  external?: boolean;
  className?: string;
}

export const contacts: Contact[] = [
  {
    id: "location",
    href: "http://maps.google.com/?q=Ukraine, Kriviy Rih",
    label: "Ukraine, Kriviy Rih",
    external: true,
  },
  {
    id: "email",
    href: "mailto:valeriy.gnybidenko@gmail.com",
    label: "valeriy.gnybidenko@gmail.com",
    className: "text-accent h-underline-r relative",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/valeriy-hnybidenko-036632279",
    label: "LinkedIn",
    external: true,
    className: "text-accent h-underline-r relative",
  },
];
