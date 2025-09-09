import { offer } from "../../constants/images";
import { arrowRight } from "@/constants/images";
import Button from "../ui/Button";
const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain"
          alt="Shoe Promotion"
        />
      </div>
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold leading-14">
            <span className="text-primary">Special </span>Offer
          </h1>
          <p className="lg:max-w-xl info-text leading-7 mt-4">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="lg:max-w-xl leading-7 info-text mt-6">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <div className="mt-11 flex max-sm:flex-col max-sm:gap-4 gap-3">
            <Button label="Shop now" iconURL={arrowRight} />
            <Button
              label="Learn more"
              textColor="text-typo"
              backgroundColor="bg-white"
              borderColor="bg-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
