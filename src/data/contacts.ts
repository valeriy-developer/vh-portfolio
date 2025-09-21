interface Contact {
  id: string;
  shortId?: string;
  href: string;
  label: string;
  external?: boolean;
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
  },
  {
    id: "linkedin",
    shortId: "LI",
    href: "https://www.linkedin.com/in/valeriy-hnybidenko-036632279",
    label: "LinkedIn",
    external: true,
  },
  {
    id: "github",
    shortId: "GH",
    href: "https://github.com/valeriy-developer",
    label: "Github",
    external: true,
  },
  {
    id: "facebook",
    shortId: "FB",
    href: "https://www.facebook.com/profile.php?id=61580835017810",
    label: "Facebook",
    external: true,
  },
];
