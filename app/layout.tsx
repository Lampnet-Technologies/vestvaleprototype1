import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vestvale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`overflow-x-hidden ${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
