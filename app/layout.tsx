import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lenx Tech Enterprise",
    template: "%s | Lenx Tech Enterprise",
  },

  description:
    "Lenx Tech Enterprise - Trusted distributor of electronic components, semiconductors, sensors, embedded solutions, industrial electronics and global sourcing services.",

  keywords: [
    "Electronic Components",
    "Semiconductors",
    "Sensors",
    "Power Electronics",
    "Embedded Systems",
    "Industrial Electronics",
    "PCB Solutions",
    "Electronic Component Distributor",
    "Global Component Sourcing",
    "Lenx Tech Enterprise",
  ],

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],

    apple: "/apple-touch-icon.png",

    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}