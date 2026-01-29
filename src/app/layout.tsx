import type { Metadata } from "next";
import { Inter, Manrope, Space_Grotesk, Syne, JetBrains_Mono, Outfit, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// Premium heading fonts (Clash Display/Cal Sans alternatives)
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Geist Sans alternative (Inter is very similar, we'll use it as base)
// For true Geist, add local font files later
const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Geist Mono alternative (JetBrains Mono is premium monospace)
const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibe Coding — AI Landing Page Generator",
  description: "AI чат арқылы бриф жинап, стиль таңдап, live лендинг шығару.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kk">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${syne.variable} ${manrope.variable} ${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
