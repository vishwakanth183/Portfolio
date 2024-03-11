import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/src/shared/components/header";

const primaryFont = Josefin_Sans({
  weight: "200",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishwakanth Portfolio",
  description: "Created by Vishwakanth.S",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
