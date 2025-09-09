import { products } from "../../constants";
import PopularProductCard from "../ui/PopularProductCard";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col gap-y-10">
          <h1 className="text-5xl font-bold leading-14">
            Our <span className="text-primary">Popular</span> Products
          </h1>
          <p className="lg:max-w-lg text-typo text-base leading-7">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value
          </p>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 not-last:sm:gap-6 gap-14">
          {products.map((product) => (
            <PopularProductCard key={product.label} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
