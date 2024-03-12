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
  description: "Hi this is vishwakanth here",
  keywords:
    "Vishwakanth, Vishwakanth.S,Vishwakanth Portfolio,VK portfolio,Vishwa portfolio,Vishwa,figma,photoshop,react-native,resume",
  icons: {
    icon: ["/favicon.png?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
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
