export default function Header() {
  return (
    <header className="relative z-0 overflow-hidden bg-[#202020] text-base">
      <nav className="flex items-center justify-between py-4 px-2 font-medium [&>*]:bg-inherit">
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

        <input
          className="search-bar mr-7 rounded-md border-2 border-cyan-200 p-0.5"
          type="text"
          placeholder="Search"
        />

        <div className="flex gap-3">
          <div>Log in</div>
          <div>Sign in</div>
        </div>
      </nav>
    </header>
  );
}
