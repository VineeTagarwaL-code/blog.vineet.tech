import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import Provider from "@/utils/Provider";
import { Heading } from "@/components/Heading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs written by vineet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NextTopLoader color="gray" showSpinner={false} />
        <ThemeProvider attribute="class">
          <Provider>{children}</Provider>
          <Heading classname="bg-gradient-to-b from-neutral-800 to-neutral-600 text-4xl  md:text-7xl">
            <span>VINEET.TECH</span>
          </Heading>
        </ThemeProvider>
        <Script
          defer
          src="https://unmani-vercel.vercel.app/script.js"
          data-website-id="8606e195-da59-401f-bde2-8b6837618dc1"
        ></Script>
      </body>
    </html>
  );
}
