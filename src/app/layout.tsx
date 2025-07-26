import type { Metadata } from "next";
import { Big_Shoulders_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utills";

const bigShoulders = Big_Shoulders_Display({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VH Portfolio",
  description: "Created by Valeriy H",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", bigShoulders.variable, dmSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
