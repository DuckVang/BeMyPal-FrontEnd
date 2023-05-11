import { FC } from "react";
import createRandomUser from "../utils/testUser";

export const Product: FC = () => {
  const user = createRandomUser();

  return (
    <div className="Product min-w-64 min-h-48 card-bordered card card-compact w-full bg-neutral">
      <figure>
        <img src={user.avatar} />
      </figure>

      <div className="card-body">
        <div className="upper flex flex-row justify-between">
          <div className="title w-fit text-xl">
            {user.firstName + " " + user.lastName}
          </div>
          <div className="rating h-fit self-end">
            <div className="mask mask-star bg-yellow-400"></div>
            <div className="rate">
              4.5 <span className="text-xs text-gray-50">(109)</span>
            </div>
          </div>
        </div>
        <div className="badge-primary badge">{user.subscriptionTier}</div>
        <div className="card-normal">{user.description}</div>
      </div>
    </div>
  );
};
