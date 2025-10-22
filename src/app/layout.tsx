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
  title: "HelloDoc - Build Your Medical Practice Website",
  description: "Professional, HIPAA-compliant websites designed specifically for doctors and medical practices. Launch in days, not months.",
  keywords: ["medical website", "doctor website", "healthcare", "HIPAA compliant", "medical practice"],
  authors: [{ name: "HelloDoc" }],
  openGraph: {
    title: "HelloDoc - Build Your Medical Practice Website",
    description: "Professional, HIPAA-compliant websites designed specifically for doctors and medical practices.",
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
