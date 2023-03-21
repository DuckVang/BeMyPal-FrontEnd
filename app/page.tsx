import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative z-10 flex h-full w-full flex-1 bg-black">
      <div className=" grid flex-1 grid-cols-main grid-rows-main grid-areas-main [&>*]:bg-white gap-3 m-4">
        <div className="MainPanel grid-in-a"></div>
        <div className="SecondPanel grid-in-b"></div>
        <div className="thirdPanel grid-in-c"></div>
      </div>
    </main>
  );
}
