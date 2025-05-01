import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
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
        url: "https://rebelde.hr/favicons/og-image.jpg",
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
    images: ["https://rebelde.hr/favicons/og-image.jpg"],
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/favicons/favicon-192x192.png' />
        <link rel='icon' type='image/png' sizes='512x512' href='/favicons/favicon-512x512.png' />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        {/* <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#000000' /> */}
        <meta name='msapplication-TileColor' content='#2b5797' />
        <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
        <meta name='theme-color' content='#ffffff' />
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
