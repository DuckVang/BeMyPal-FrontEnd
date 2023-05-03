import Login from "./Login";
import SignUp from "./SignUp";
import SearchBar from "./SearchBar";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 overflow-hidden bg-base-200 text-base py-2">
      <nav className="flex flex-row items-center justify-between  font-medium ">
        <div className="flex flex-1">
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

        <div className="flex gap-3">
          <Login />
          <SignUp />
        </div>
      </nav>
    </header>
  );
}
