import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: '#D3BD9E',
};

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
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${interFont.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://res.cloudinary.com"
        />
      </head>
      <body
        className="overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
