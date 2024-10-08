import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import { Nav } from "@/app/components/Nav";

export const metadata: Metadata = {
  metadataBase: new URL('https://pedrobragadev.com'),
  title: "Pedro Braga",
  description: "Software Engineer and Front-End Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <link rel="icon" href="/favicon.ico" sizes="any"/>
      <body className="bg-[#111010] font-medium antialiased" >
        <Nav />
        {children}
      </body>
    </html>
  );
}
