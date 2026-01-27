import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mohamed Megahed | Frontend developer",
  description:
    "Turning designs into pixel-perfect, responsive websites. Specializing in high-performance UIs and SEO-friendly code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${outfit.variable}  antialiased`}>{children}</body>
    </html>
  );
}
