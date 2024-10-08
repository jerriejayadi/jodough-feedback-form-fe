import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LocalFont from "next/font/local";
import Image from "next/image";
import { ContextProvider } from "./context";
import Background from "./background";

const inter = Inter({ subsets: ["latin"] });
const skrapbook = LocalFont({
  src: "../../public/fonts/Skrapbook.ttf",
  display: "swap",
  variable: "--font-skrapbook",
});
const sixHands = LocalFont({
  src: "../../public/fonts/SixHandsMarker.ttf",
  display: "swap",
  variable: "--font-six-hands",
});

export const metadata: Metadata = {
  title: "Jodough",
  description: "Jodough Feedback Form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${skrapbook.className} ${sixHands.className} bg-[#294023] max-w-[425px] mx-auto`}
      >
        <ContextProvider>
          {/* <Background /> */}
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
