import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

import { SlidePanel } from "../Components/SlidePanel";
import LeaderBoard from "../Components/LeaderBoard";

import { Product } from "../Components/Product";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const users = [];
  for (let i = 0; i < 20; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    users.push(<Product />);
  }

  return (
    <main className="container relative z-10 m-auto flex w-full flex-col bg-base-100 px-16  ">
      <div className="my-6 grid max-h-[750px] min-h-[550px] grid-cols-3 gap-8 ">
        <SlidePanel />
        <LeaderBoard />
      </div>
      <div className="Products grid grid-cols-3 gap-8">{users}</div>
    </main>
  );
}
