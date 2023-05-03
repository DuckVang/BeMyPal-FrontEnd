"use client";

import "./globals.css";
import Header from "../Components/Header";
import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <html lang="en" data-theme="mytheme">
      <body className="h-screen min-h-screen bg-base-100">
        {pathName != "/Register" && <Header />}

        {children}
      </body>
    </html>
  );
}
