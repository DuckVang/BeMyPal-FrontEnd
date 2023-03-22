import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative z-10 flex h-full w-full flex-1 bg-black">
      <div className=" mx-auto mt-16 grid max-w-screen-xl flex-1 grid-cols-main grid-rows-main gap-y-24 gap-x-12 grid-areas-main [&>*]:bg-[var(--color-2)]">
        <div className="MainPanel max-w-[var(--main-cont-width)] grid-in-a"></div>
        <div className="SecondPanel max-w-[var(--main-cont-width)] grid-in-b"></div>
        <div className="thirdPanel max-w-[var(--side-cont-width)] grid-in-c "></div>
      </div>
    </main>
  );
}
