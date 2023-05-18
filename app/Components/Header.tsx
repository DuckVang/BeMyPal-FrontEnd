import SearchBar from "./SearchBar";
import Link from "next/link";
import Image from "next/image";
import mascotIcon from "../../public/mascot.svg";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 overflow-hidden bg-base-200 py-3 px-6 text-base ">
      <nav className="flex flex-row items-center justify-between  font-medium ">
        <div className="flex flex-1 text-xl">
          <button className="mr-6 w-24 ">
            <Image
              className="h-[5rem] -top-1 absolute w-fit"
              priority
              src={mascotIcon}
              alt="mascot"
            ></Image>
          </button>
          <ul className="flex gap-4 justify-self-start">
            <li>Play</li>
            <li>Learn</li>
          </ul>
        </div>

        {/* <SearchBar /> */}

        <div className="flex gap-3 text-sm">
          <Link href={`/Register`}>
            <button className="w-18 h-8 rounded-2xl bg-[#303030] px-4">
              Login
            </button>
          </Link>
          <button className="w-18 h-8 rounded-2xl bg-[#AF32F0] px-4">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}
