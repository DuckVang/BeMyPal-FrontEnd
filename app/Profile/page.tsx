import { faker } from "@faker-js/faker";
import Image from "next/image";

import createRandomUser from "../../utils/testUser";
export default function Home() {
  const user = createRandomUser();
  return (
    <main className="container relative z-10 m-auto flex w-full flex-col bg-base-100 px-16 ">
      <section className="relative my-6 flex h-48 w-full rounded-2xl bg-gradient-to-r from-blue-700 to-purple-600">
        <img
          className="mask mask-circle relative -left-14 -bottom-5 aspect-square w-44 object-cover"
          src={user.avatar}
          alt="profile"
        ></img>

        <div className="my-auto flex w-3/5 flex-col gap-3">
          <h1 className="text-3xl font-semibold">{user.firstName}</h1>
          <div className="flex gap-2 font-light">
            <div className=" badge-primary-focus badge bg-opacity-75">
              Nisi voluptate
            </div>
            <div className=" badge-primary-focus badge bg-opacity-75"> Nulla </div>
          </div>
          <p className="light bg-neutral-focus bg-opacity-75 ">
            Consequat magna eu nisi laboris aliquip do in cupidatat consectetur
          </p>
        </div>
      </section>

      <section className="mt-5 grid h-96 w-full grid-cols-7 gap-16">
        <div className="col-span-5 rounded-2xl bg-neutral px-5 py-4">
          <h1 className="text-2xl">About me</h1>
          <p className="my-5 font-extralight">
            Dolor laboris anim occaecat magna sit tempor aliqua. Esse quis
            veniam ut aliquip amet. Nostrud quis incididunt sunt do veniam sit
            esse velit. Aute cupidatat officia proident aliqua pariatur est ex
            nostrud. Nostrud cupidatat esse ea quis magna adipisicing excepteur
            veniam nostrud. Elit aute sit ipsum excepteur ullamco aute.
          </p>
        </div>
        <div className="col-span-2  rounded-2xl bg-neutral "></div>
      </section>
    </main>
  );
}
