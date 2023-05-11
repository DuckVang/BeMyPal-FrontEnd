"use client";

import "./globals.css";
import Header from "../Components/Header";
import { usePathname, useRouter } from "next/navigation";
import Head from "next/head";
import { Montserrat } from "@next/font/google"

const montserrat = Montserrat({ subsets: ["latin"],  variable: '--montserrat-font' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <html lang="en" data-theme="mytheme" className={montserrat.className} >
      <Head>
        <title>Be my pal</title>
     
      </Head>
      <body className="h-screen min-h-screen bg-base-100 ">
        {pathName != "/Register" && <Header />}

        {children}
      </body>
    </html>
  );
}
