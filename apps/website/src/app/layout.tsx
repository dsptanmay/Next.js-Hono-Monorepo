import type { Metadata } from "next";
import { Geist as DM_Sans } from "next/font/google";
import "./globals.css";

const font = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js x Hono MonoRepo",
  description:
    "A monorepo as a starting point for making applications with Next.js and Hono",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
