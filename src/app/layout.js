import { Tienne, Nunito_Sans, Antonio } from "next/font/google";
import "./reset.css";
import "./globals.css";

import { ReactLenis } from "lenis/react";
import Header from "./Components/Header/Header";

const nunito = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});
const tienne = Tienne({ subsets: ["latin"], weight: ["400", "700"], style: "normal", variable: "--font-tienne" });
const antonio = Antonio({ subsets: ["latin"], weight: ["400", "700"], style: "normal", variable: "--font-antonio" });

export const metadata = {
  title: "REBELDE",
  description: "done by FANTAZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${tienne.variable} ${nunito.variable} ${antonio.variable}`}>
        <ReactLenis root>
          <Header />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
