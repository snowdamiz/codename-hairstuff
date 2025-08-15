import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CrownCare - Natural Hair Care for Textured Hair | 4A-4C Hair Products",
  description: "Specially formulated for African American hair types 4A-4C. Deep moisture treatment with shea butter, Jamaican black castor oil. Black-owned brand celebrating natural hair.",
  keywords: "African American hair care, 4C hair products, natural hair treatment, textured hair, black hair care, protective styling, edge control, moisture retention, black owned hair products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
