import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { Providers } from './components/provider';
import Nav from "./components/navbar";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Lazaro / Persona",
  description: "A persona portfolio for John Lazaro, full-stack developer.",
};

/**
 * This is the main layout of all the pages
 * @param param0 
 * @returns 
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="persona-shell">
          <div className="persona-grid">
            <Nav />
            <Providers>
              <main className="persona-main">
                {children}
              </main>
            </Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
