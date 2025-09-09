import ServiceCard from "../ui/ServiceCard";
import { services } from "../../constants";
const Services = () => {
  return (
    <section id="services" className="max-container max-sm:mt-12">
      <div className="grid-container">
        {services.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}
      </div>
    </section>
  );
};
export default Services;
