import type { Metadata } from "next";
import { Gochi_Hand } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const gochi = Gochi_Hand({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GameStock",
  description: "The biggest video games database - GameStock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gochi.className}`}>{children}</body>
    </html>
  );
}
