import type { Metadata } from "next";
import { Big_Shoulders_Display, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";
import { SmoothScroll } from "@/components/dynamic";
import Providers from "@/providers";
import ThemeRevealer from "@/components/ThemeRevealer";
import Loader from "@/components/Loader";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P8X4FW98');
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "scrollbar antialiased",
          bigShoulders.variable,
          dmSans.variable,
        )}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8X4FW98"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Providers>
          <Loader />
          <SmoothScroll>
            <div id="app" className="flex min-h-dvh flex-col">
              <Header />
              <Main>{children}</Main>
              <Footer />
            </div>
            <Toaster />
          </SmoothScroll>
          <ThemeRevealer />
        </Providers>
      </body>
    </html>
  );
}
