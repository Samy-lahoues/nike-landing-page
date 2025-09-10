import { star } from "../../constants/images";
interface popularProuductsProps {
  imgUrl: string;
  label: string;
  price: number;
  rate: number;
}
const PopularProductCard = ({
  imgUrl,
  label,
  price,
  rate,
}: popularProuductsProps) => {
  return (
    <div className="flex flex-1 flex-col w-full gap-y-8 bg-white autoShow">
      <img
        width={282}
        height={282}
        className="w-[282px] h-[282px] rounded-xl"
        src={imgUrl}
        alt={label.split(" ").slice(0, 3).join(" ")}
      />
      <div className="flex flex-col items-start gap-y-2">
        <div className="flex gap-2.5">
          <img src={star} alt="star icon" />
          <span className="text-typo text-xl font-semibold">({rate})</span>
        </div>
        <h3 className="text-black text-2xl font-bold">{label}</h3>
        <span className="text-primary text-2xl font-bold">${price}0</span>
      </div>
    </div>
  );
};

export default PopularProductCard;
