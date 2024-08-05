import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "../styles/globals.css";
import { Nav } from "@/ui/Nav";

export const metadata: Metadata = {
  title: "Pedro Braga",
  icons: "@/public/images/home/logo.png",
  description: "Generated by create next app",
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
