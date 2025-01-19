import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import Provider from "@/lib/Provider";
import Navbar from "@/components/Navbar";

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
  openGraph: {
    title: "Vineet's Blog - Landing Page",
    description:
      "Welcome to Vineet's Blog - Dive into insights, ideas, and innovation in tech and design.",
    url: "https://blog.vineet.tech",
    siteName: "Vineet's Blog",
    images: [
      {
        url: "https://blog.vineet.tech/vineet.png", // Replace with your OpenGraph image path
        width: 1200,
        height: 630,
        alt: "Vineet's Blog Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vineet's Blog - Landing Page",
    description:
      "Welcome to Vineet's Blog - Dive into insights, ideas, and innovation in tech and design.",
    images: ["https://blog.vineet.tech/vineet.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased   min-h-screen bg-background font-sans  max-w-2xl mx-auto py-12 sm:py-24 px-6 `}
      >
        <NextTopLoader color="gray" showSpinner={false} />
        <ThemeProvider attribute="class">
          <Provider>{children}</Provider>
          <Navbar />
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
