import { star } from "@/constants/images";
import type { customerType } from "@/constants";
interface CustomerCardProps extends customerType {
  index: number;
}

const CustomerCard = ({
  name,
  openion,
  rate,
  imgUrl,
  index,
}: CustomerCardProps) => {
  return (
    <div
      className={`w-full bg-transparent flex flex-col items-center testimonial ${index === 0 ? "left" : "right"}`}
    >
      <img
        src={imgUrl}
        className="rounded-full w-[120px] h-[120px]"
        width={120}
        height={120}
        alt={`${name} image`}
      />
      <p className="lg:max-w-sm mt-6 text-center info-text">{openion}</p>
      <div className="flex items-center gap-x-2 mt-3">
        <img src={star} alt="star-icon" />
        <span className="text-typo text-xl">({rate})</span>
      </div>
      <h3 className="text-3xl font-bold mt-4">{name}</h3>
    </div>
  );
};
export default CustomerCard;
