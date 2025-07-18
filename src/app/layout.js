import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { Inter } from "next/font/google";

import { ReactLenis } from "lenis/react";
import Script from "next/script";

import "./reset.css";
import "./globals.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

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
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />

        {/* GTM script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body className={inter.variable}>
        {/* GTM no‑script fallback */}
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>

        <Header />
        <ReactLenis root>
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
