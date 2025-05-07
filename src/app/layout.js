import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Inter } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "./reset.css";
import "./globals.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], style: "normal", variable: "--font-inter" });

export const metadata = {
  title: "Rebelde boats",
  description: "Private boat tours in Split, Croatia. Rebelde boats offers luxury island-hopping experiences.",
  keywords: ["Rebelde", "Boat Tours Split", "Croatia Private Tour", "Island Hopping", "Hvar", "Blue Cave", "Blue lagoon"],
  authors: [{ name: "FANTAZ" }],
  openGraph: {
    type: "website",
    url: "https://rebelde.hr/",
    title: "Rebelde boats - Private Boat Tours in Split, Croatia",
    description: "Luxury boat tours from Split to Hvar, Blue Cave, Blue lagoon, Vis & more. Unforgettable Adriatic experiences.",
    images: [
      {
        url: "https://rebelde.hr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rebelde boats luxury boat at sea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebelde boats - Private Boat Tours in Split, Croatia",
    description: "Luxury boat tours from Split to Hvar, Blue Cave, Blue lagoon, Vis & more. Unforgettable Adriatic experiences.",
    images: ["https://rebelde.hr/og-image.jpg"],
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* <!-- Favicon for Google Search --> */}
        <link rel='icon' href='/favicon.ico' />

        {/* <!-- Optional SVG favicon --> */}
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />

        {/* <!-- Dark/light theme favicons --> */}
        <link rel='icon' type='image/png' href='/favicon-light.png' media='(prefers-color-scheme: light)' />
        <link rel='icon' type='image/png' href='/favicon-dark.png' media='(prefers-color-scheme: dark)' />

        {/* <!-- PNG favicons --> */}
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='48x48' href='/favicon-48x48.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/favicon-192x192.png' />
        <link rel='icon' type='image/png' sizes='512x512' href='/favicon-512x512.png' />

        {/* <!-- Apple-specific --> */}
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <meta name='apple-mobile-web-app-title' content='Rebelde Boats' />

        {/* <!-- PWA --> */}
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='preload' as='image' href='/logo/break-vect-white-mobile.svg' type='image/svg+xml' />
      </head>
      <body className={inter.variable}>
        <ReactLenis root>
          <Header />
          {children}
          <Analytics />
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
