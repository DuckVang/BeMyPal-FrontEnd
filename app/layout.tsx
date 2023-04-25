'use client'

import "./globals.css";
import Header from "../Components/Header";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className="h-screen min-h-screen bg-base-100">
        <Header />

        {children}
      </body>
    </html>
  );
}
