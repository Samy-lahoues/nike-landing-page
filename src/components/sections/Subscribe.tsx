import Button from "../ui/Button";
const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container max-sm:mt-12 flex-between max-lg:flex-col"
    >
      <h1 className="font-palanquin capitalize text-5xl lg:max-w-md font-bold leading-16">
        Sign Up for <span className="text-primary">Updates </span> & Newsletter
      </h1>
      <div className="relative sm:w-lg md:w-xl w-full sm:border sm:border-solid sm:border-typo rounded-full sm:p-6 max-sm:mt-7 max-lg:mt-16">
        <input
          className="input w-full"
          type="email"
          placeholder="subscribe@nike.com"
        />
        <Button
          className={`sm:absolute sm:right-20 sm:bottom-1/2 sm:translate-1/2 max-lg:hidden`}
          label="Sign Up"
        />
      </div>
      <Button
        className={`lg:hidden mt-4 w-full sm:w-lg md:w-xl`}
        label="Sign Up"
      />
    </section>
  );
};

export default Subscribe;
