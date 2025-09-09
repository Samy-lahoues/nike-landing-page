interface Props {
  label: string;
  className?: string;
  iconURL?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
}
const Button = ({
  label,
  iconURL,
  className,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none cursor-pointer
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-primary text-white border-primary"
      } rounded-full ${fullWidth ? "w-full" : "w-fit"} ${className || ""}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
