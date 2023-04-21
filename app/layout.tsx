'use client'

import "./globals.css";
import Header from "../Components/Header";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen min-h-screen">
        <Header />

        {children}
      </body>
    </html>
  );
}
