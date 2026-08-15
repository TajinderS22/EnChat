''

import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "EnChat",
  description: "EnChat E2E Chat App ",
};


import Session from "../hook/Session";
import React from 'react';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}  `}>
        <Session>
            {children}
        </Session>

      </body>
      <GoogleAnalytics gaId={'G-8L1GRNKL4B'}/>
    </html>
  );
}
