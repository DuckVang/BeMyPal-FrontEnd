export default function Header() {
  return (
    <header className="text-base overflow-hidden">
      <nav className="py-4 px-2 flex justify-between font-medium items-center">
        <div className="flex flex-1">
          <button className="mr-6 ">
            <div className="sphere absolute bg-slate-200 -left-6 -top-5 rounded-full  w-[100px] h-[100px] -z-1"></div>

            <p className="relative z-1">button</p>
          </button>
          <ul className="flex gap-4 justify-self-start">
            <li>Play</li>
            <li>Learn</li>
          </ul>
        </div>

        <input
          className="search-bar mr-7 border-2 border-cyan-200 rounded-md p-0.5"
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
