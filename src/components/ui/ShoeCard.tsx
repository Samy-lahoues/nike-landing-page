interface ShoeCardProps {
  imgUrl: string;
  changeBigShoeImg: (imgUrl: string) => void;
  bigShoeImg: string;
  title: string;
}
const ShoeCard = ({ imgUrl, bigShoeImg, changeBigShoeImg }: ShoeCardProps) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl) {
      changeBigShoeImg(imgUrl);
    }
  };
  return (
    <div
      className={`border-2 border-solid ${imgUrl === bigShoeImg ? "border-primary" : "border-transparent"} rounded-xl cursor-pointer max-sm:flex-1 overflow-hidden`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-cover bg-center bg-[url('/src/assets/images/thumbnail-background.svg')] sm:w-40 sm:h-40 max-sm:p-4">
        <img
          width={127}
          height={103}
          className="object-contain"
          src={imgUrl}
          alt="shoe collection"
        />
      </div>
    </div>
  );
};
export default ShoeCard;
