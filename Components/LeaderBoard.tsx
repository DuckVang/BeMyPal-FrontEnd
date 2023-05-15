import createRandomUser from "../utils/testUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
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
              className="flex items-center gap-3 rounded-xl bg-base-200 py-3 px-2"
              key={index}
            >
              <div className="mx-3 w-2 text-2xl font-bold">{index + 1}</div>
              <div className="align-middle ">
                <h2 className="h-fit">
                  {user.firstName + " " + user.lastName}
                </h2>
                <p className="text-xs text-primary-focus">level X</p>
              </div>
              <div className="ml-auto mr-3 text-sm">
                {Math.floor(Math.random() * 2) == 0 ? (
                  <FontAwesomeIcon icon={faArrowUp} />
                ) : (
                  <FontAwesomeIcon icon={faArrowDown} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
