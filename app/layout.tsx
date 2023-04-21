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
      <body className="flex flex-col h-max">
        <Header />

        {children}
      </body>
    </html>
  );
}
