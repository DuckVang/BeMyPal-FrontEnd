import { FC } from "react";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import mascotIcon from "../public/mascot-2.svg";

export const SlidePanel: FC = () => {
  function handleSignUp() {}

  const Services = [];
  for (let index = 0; index < 10; index++) {
    Services.push({
      img: faker.image.image(2000, 1000, true),
      link: "/",
    });
  }

  return (
    <div className="b relative col-span-2 flex flex-col gap-12">
      <div className="relative h-4/5">
        <div className="list-of-services flex-basis carousel absolute h-full rounded-2xl">
          {Services.map((element, index) => {
            return (
              <Service
                key={index}
                img={element.img}
                link={element.link}
                index={index}
              />
            );
          })}
        </div>
        <div className="absolute bottom-0 flex w-full justify-center gap-2 py-2 ">
          <a href="#item1" className="btn-xs btn-circle btn"></a>
          <a href="#item2" className="btn-xs btn-circle btn"></a>
          <a href="#item3" className="btn-xs btn-circle btn"></a>
        </div>
      </div>
      <div className="lower-panel h-1/5 rounded-2xl bg-neutral">
        <Image
          className="h-md w-fit my-auto"
          priority
          src={mascotIcon}
          alt="mascot"
        ></Image>
      </div>
    </div>
  );
};

const Service = (props: { img: string; link: string; index: number }) => {
  return (
    <a
      className="carousel-item max-h-full w-full max-w-full"
      href={props.link}
      id={"item" + props.index}
    >
      <img
        src={props.img}
        alt=""
        className="w-full object-fill contrast-50 filter"
      />
    </a>
  );
};
