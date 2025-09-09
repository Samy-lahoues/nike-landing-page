import Button from "../ui/Button";
import { bigShoe } from "@/constants/images";
const SuperQuality = () => {
  return (
    <section id="about-us" className="max-container max-sm:mt-12">
      <div className="flex max-lg:flex-col max-sm:gap-y-12 sm:justify-between items-center">
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin capitalize text-5xl lg:max-w-lg font-bold leading-14">
            We Provide You <span className="text-primary"> Super </span>
            <span className="text-primary"> Quality </span>
            shoes
          </h2>
          <p className="info-text mt-4 lg:max-w-lg">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="info-text mt-6">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11">
            <Button label="View details" />
          </div>
        </div>
        <img
          src={bigShoe}
          height={522}
          width={570}
          className="object-contain max-lg:mt-10"
          alt="shoe-img"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
