import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import { Navbar } from "@/components/navbar";
import { WidthWrapper } from "@/components/width-wrapper";
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
          <WidthWrapper className="select-none">
            <Navbar />
            {children}
            {/* <Footer /> */}
          </WidthWrapper>
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
