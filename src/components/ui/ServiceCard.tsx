import type { serviceType } from "@/constants";
const ServiceCard = ({ name, description, iconUrl }: serviceType) => {
  return (
    <div className="rounded-xl bg-white shadow-lg px-10 py-16 flex flex-col items-start w-full">
      <div className="p-3 bg-primary rounded-full">
        <img
          src={iconUrl}
          alt={`${name.toLowerCase()} icon`}
          width={24}
          height={24}
          className="w-[24px] h-[24px]"
        />
      </div>
      <h3 className="mt-5 font-bold text-3xl">{name}</h3>
      <p className="info-text mt-3">{description}</p>
    </div>
  );
};
export default ServiceCard;
