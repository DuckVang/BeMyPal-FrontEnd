import createRandomUser from "../utils/testUser";
export default function LeaderBoard() {
  function handleSignUp() {}
  const arr = [];
  for (let index = 0; index < 5; index++) {
    arr.push(createRandomUser());
  }
  return (
    <div className=" rounded-2xl bg-neutral">
      <h1 className="my-6 text-center text-3xl font-semibold">Leaderboard</h1>
      <div className="mx-2 flex  flex-col gap-2">
        {arr.map((user, index) => {
          return (
            <div
              className="flex gap-3 bg-base-200 py-3 px-2 items-center rounded-xl"
              key={index}
            >
              <div className="text-2xl font-bold">{index}</div> 
              <div className="align-middle h-fit">{user.firstName + " " + user.lastName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
