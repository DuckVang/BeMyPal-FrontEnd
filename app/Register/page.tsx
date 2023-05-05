export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-1 bg-primary">
        <div className="m-auto">
          <h1 className="text-8xl font-bold">Be my pal</h1>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center font-bold">
        <div className="mx-20">
          <h1 className="mb-14 text-5xl">Welcome to BeMyPal</h1>
          <div className="types mb-8 flex gap-2">
            <button className="btn-outline btn-primary btn-sm btn rounded-full">
              Email
            </button>
            <button className="btn-outline btn-primary btn-sm btn rounded-full">
              Phone
            </button>
          </div>
          <div className="form-control font-semibold mb-3">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="test@mail.com"
              className="input-bordered input"
            />
          </div>
          <div className="form-control font-semibold">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input-bordered input"
            />
          </div>
          <button className="btn-primary btn w-fit float-right mt-8 rounded-full px-8">Login</button>
        </div>
      </div>
    </div>
  );
}
