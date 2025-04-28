import { Inter } from "next/font/google";
import "./reset.css";
import "./globals.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { ReactLenis } from "lenis/react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"], style: "normal", variable: "--font-inter" });

export const metadata = {
  title: "REBELDE",
  description: "done by FANTAZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <ReactLenis root>
          <Header />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
