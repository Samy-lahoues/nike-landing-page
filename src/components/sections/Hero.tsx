import { useState, useEffect, useRef } from "react";

import { shoes, statistics } from "../../constants";
import Button from "../ui/Button";
import ShoeCard from "../ui/ShoeCard";
import { shoe1 } from "../../constants/images";
import { arrowRight } from "../../constants/images";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(shoe1);
  const heroTextRef = useRef<HTMLDivElement>(null);

  const handleChangeBigShowImg = (imgUrl: string) => {
    setBigShoeImg(imgUrl);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-hero-animated", "true");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      },
    );

    if (heroTextRef.current) {
      observer.observe(heroTextRef.current);
    }

    return () => {
      if (heroTextRef.current) {
        observer.unobserve(heroTextRef.current);
      }
    };
  }, []);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container sm:px-16 px-8"
    >
      <div
        ref={heroTextRef}
        className="relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:w-full pt-28 heroTextContainer"
        style={{ zIndex: 30 }}
      >
        <p className="text-xl font-montserrat text-primary heroSubtitle">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold heroMainTitle">
          <span
            className="xl:bg-white xl:whitespace-nowrap relative pr-10 heroTitleLine1"
            style={{ zIndex: 50, position: "relative" }}
          >
            The New Arrival
          </span>
          <br />
          <span className="text-primary inline-block mt-3 heroTitleLine2">
            Nike
          </span>{" "}
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 max-xl:max-w-full sm:max-w-sm heroDescription">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <div className="heroButton">
          <Button label="Shop now" iconURL={arrowRight} />
        </div>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 max-sm:gap-8 heroStats">
          {statistics.map((stat, index) => (
            <div key={index} className="heroStatItem">
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-[url('/src/assets/images/collection-background.svg')] bg-cover bg-center"
        style={{ zIndex: 1 }}
      >
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative"
          style={{ zIndex: 2 }}
        />

        <div
          className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6"
          style={{ zIndex: 10 }}
        >
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                title={`bigShoe ${index}`}
                imgUrl={image}
                changeBigShoeImg={handleChangeBigShowImg}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
