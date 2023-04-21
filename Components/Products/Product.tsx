import { FC } from "react";
import createRandomUser from "../../utils/testUser";

export const Product: FC = () => {
  const user = createRandomUser();

  return (
    <div className="Product w-32 h-24 ">
      <div className="upper flex flex-row">
        <div className="avatar">
          <div className="w-16 h-16">
            <img src={user.avatar} />
          </div>
        </div>
        <div className="name">{user.firstName + " " + user.lastName}</div>
      </div>
    </div>
  );
};
