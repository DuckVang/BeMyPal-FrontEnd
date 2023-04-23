import { FC } from "react";
import Image from "next/image";
import { faker } from "@faker-js/faker";
export const SlidePanel: FC = () => {
  function handleSignUp() {}

  const Services = [];
  for (let index = 0; index < 10; index++) {
    Services.push({
      img: faker.image.business(2000, 1000, true),
      link: "/",
    });
  }

  return (
    <div className="flex w-[var(--main-cont-width)] flex-col gap-12 ">
      <div className="h-4/5 ">
        <div className="list-of-services flex-basis carousel h-full ">
          {Services.map((element, index) => {
            return (
              <Service key={index} img={element.img} link={element.link} />
            );
          })}
        </div>
      </div>
      <div className="lower-panel h-1/5 bg-slate-400"> lower panel</div>
    </div>
  );
};

const Service = (props: { img: string; link: string }) => {
  return (
    <a className="carousel-item max-h-full w-full max-w-full" href={props.link}>
      <img src={props.img} alt="" className="w-full object-fill" />
    </a>
  );
};
