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
  metadataBase: new URL("https://www.vestvale.com"),
  title: {
    default: "Vestvale – Luxury Home Accessories & Interior Solutions",
    template: "%s | Vestvale",
  },
  description:
    "Discover Vestvale’s premium collection of luxury home accessories, doors, lighting, wallpapers, tiles, and more. Crafted with elegance and durability for timeless interiors.",
  keywords: [
    "Vestvale",
    "home accessories",
    "luxury interiors",
    "modern doors",
    "designer lighting",
    "wallpapers",
    "tiles",
    "door handles",
    "interior design solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.vestvale.com",
    siteName: "Vestvale",
    title: "Vestvale – Luxury Home Accessories & Interior Solutions",
    description:
      "Elevate your living space with Vestvale’s premium doors, lighting, wallpapers, tiles, and home accessories. Quality craftsmanship meets timeless design.",
    images: [
      {
        url: "https://www.vestvale.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vestvale luxury home accessories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vestvale",
    creator: "@vestvale",
    title: "Vestvale – Luxury Home Accessories & Interior Solutions",
    description:
      "Premium doors, lighting, wallpapers, tiles, and accessories that transform your interiors.",
    images: ["https://www.vestvale.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.vestvale.com",
  },
  robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": "large",
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},

  icons: {
    icon: "/favicon.ico",
    shortcut: ["/favicon-16x16.png"],
    apple: ["/apple-touch-icon.png"],
  },
  themeColor: "#F5F1E6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden ${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
