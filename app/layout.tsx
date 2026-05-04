import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const BASE_URL = "https://travel-check.info";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Travel Check",
    template: "%s | Travel Check"
  },
  description: "SEO-first travel guides with country, city, and region booking intelligence.",
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
