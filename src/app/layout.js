import { Inter } from "next/font/google";

import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/next";
import "./reset.css";
import "./globals.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Header from "@/Components/Header/index";
import Footer from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"], style: "normal", variable: "--font-inter" });

export const metadata = {
  title: "Rebelde Boats | Split Island-Hopping Day Trips & Exclusive Charters",
  description: "Private boat tours in Split, Croatia. Rebelde boats offers luxury island-hopping experiences.",
  keywords: ["Rebelde", "Boat Tours Split", "Croatia Private Tour", "Island Hopping", "Hvar", "Blue Cave", "Blue lagoon"],
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" as="image" href="/logo/break-vect-white-mobile.svg" type="image/svg+xml" />
      </head>
      <body className={inter.variable}>
        <Header />
        <ReactLenis root>
          {children}
          <Analytics />
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
