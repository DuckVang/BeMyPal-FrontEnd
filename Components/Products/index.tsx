import { FC } from "react";
import { Product } from "./Product";

export const Products: FC = () => {
  const users = [];
  for (let i = 0; i < 20; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    users.push(<Product />);
  }
  return <div className="Products grid grid-cols-4 gap-3">{users}</div>;
};
