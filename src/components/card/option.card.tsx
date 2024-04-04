import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

const OptionCard = ({
  handleClick,
  iconString,
  title,
  selectedValue,
  description,
}: OptionCardProps) => {
  return (
    <Card
      className={cn(
        "flex items-center  rounded gap-4  p-3 md:gap-6 xl:p-4 border-gray-100 ",
        selectedValue && selectedValue == title && "border-yellow-600 shadow-lg"
      )}
      onClick={() => handleClick(title)}
    >
      <div className="relative aspect-square h-6 md:h-7   ">
        <img
          src={iconString || "/icons/student.svg"}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      <p className="first-letter:capitalize tracking-wide ">
        {title}
        {description && (
          <span className="pl-2 lowercase font-normal text-gray-400">
            {description}
          </span>
        )}
      </p>
    </Card>
  );
};

export default OptionCard;
