import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brandon Wong | Dev",
  description: "Frontend enthusiast, web developer",
  metadataBase: new URL("https://www.brandonwongck.com"),
  keywords: ["howmuch", "brandonwongck", "Brandon Wong"],
  authors: [{ name: "Brandon Wong", url: "https://www.brandonwongck.com" }],
  creator: "Brandon Wong",
  openGraph: {
    url: "https://www.brandonwongck.com",
    siteName: "Brandon Wong | Dev",
    images: "/og-image.png",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
