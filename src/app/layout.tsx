import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HelloDoc - Complete Digital Solutions for Doctors & Clinics",
  description: "From appointment scheduling and online payments to SEO-optimized, custom websites. We build everything your medical practice needs to thrive online.",
  keywords: ["medical website", "doctor website", "healthcare", "web development", "medical practice", "digital solutions", "SEO optimization"],
  authors: [{ name: "HelloDoc" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "HelloDoc - Complete Digital Solutions for Doctors & Clinics",
    description: "From appointment scheduling and online payments to SEO-optimized, custom websites. We build everything your medical practice needs to thrive online.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
