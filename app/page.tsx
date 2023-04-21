import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

import { SlidePanel } from "../Components/SlidePanel";
import LeaderBoard from "../Components/LeaderBoard";
import { Products } from "../Components/Products";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="container relative z-10 m-auto flex flex-col h-full w-full flex-1 bg-black">
      <div className="mx-auto flex w-full flex-row justify-between max-h-[550px]">
        <SlidePanel />
        <LeaderBoard />
      </div>

      <Products />
    </main>
  );
}
