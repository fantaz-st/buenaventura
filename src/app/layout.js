import { Tienne, Nunito_Sans } from "next/font/google";
import "./reset.css";
import "./globals.css";

import { ReactLenis } from "lenis/react";
import Header from "./Components/Header/Header";

const nunito = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});
const tienne = Tienne({ subsets: ["latin"], weight: "400", style: "normal", variable: "--font-tienne" });

export const metadata = {
  title: "REBELDE",
  description: "done by FANTAZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${tienne.variable} ${nunito.variable}`}>
        <ReactLenis root>
          <Header />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
