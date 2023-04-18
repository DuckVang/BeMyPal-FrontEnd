import { FC } from "react";
import Image from "next/image";
export const SlidePanel: FC = () => {
  function handleSignUp() {}

  const Services = [
    {
      img: "https://store-images.s-microsoft.com/image/apps.608.13510798887677013.5c7792f0-b887-4250-8c4e-4617af9c4509.bcd1385a-ad15-450c-9ddd-3ee80c37121a?q=90&w=480&h=270",
      link: "/",
    },
    {
      img: "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1668125812",
      link: "/",
    },
    { img: "none", link: "/" },
  ];

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
      <div className="lower-panel h-1/5"> lower panel</div>
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
