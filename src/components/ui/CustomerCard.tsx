import { star } from "@/constants/images";
import type { customerType } from "@/constants";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

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
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  const animationDelay = index * 200; // Stagger animations by 200ms

  return (
    <div
      ref={elementRef}
      className={`w-full bg-transparent flex flex-col items-center testimonial ${
        index === 0 ? "left" : "right"
      } ${isIntersecting ? "animate" : ""}`}
      style={{
        transitionDelay: `${animationDelay}ms`,
        animationDelay: `${animationDelay}ms`,
      }}
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
