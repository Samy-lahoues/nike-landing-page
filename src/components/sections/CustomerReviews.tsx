import CustomerCard from "../ui/CustomerCard";
import { customers } from "@/constants";
const CustomerReviews = () => {
  return (
    <section className="max-container max-sm:mt-12 space-y-16">
      <div className="flex-center flex-col gap-y-8">
        <h1 className="text-5xl font-bold leading-14 max-sm:text-center">
          What Our <span className="text-primary">Customers </span>
          Say?
        </h1>
        <p className="lg:max-w-lg info-text leading-7 text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="grid-container">
        {customers.map((customer) => (
          <CustomerCard key={customer.name} {...customer} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
