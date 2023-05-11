import SearchBar from "./SearchBar";
import Link from "next/link";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 overflow-hidden bg-base-200 py-3 px-4 text-base">
      <nav className="flex flex-row items-center justify-between  font-medium ">
        <div className="flex flex-1 text-xl">
          <button className="mr-6 ">
            <div className="sphere -z-1 absolute -left-8 -top-2 h-[100px] w-[100px] rounded-full bg-[#D9D9D9]"></div>

            <p className="z-1 relative ">button</p>
          </button>
          <ul className="flex gap-4 justify-self-start">
            <li>Play</li>
            <li>Learn</li>
          </ul>
        </div>

        {/* <SearchBar /> */}

        <div className="flex gap-3 text-sm">
          <Link href={`/Register`}>
            <button className="w-18 h-8 rounded-md bg-[#303030] px-4">
              Login
            </button>
          </Link>
          <button className="w-18 h-8 rounded-md bg-[#AF32F0] px-4">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}
