import type { Metadata } from "next";
import { Big_Shoulders_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utills";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";

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
        className={cn(
          "flex min-h-dvh flex-col antialiased",
          bigShoulders.variable,
          dmSans.variable,
        )}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
