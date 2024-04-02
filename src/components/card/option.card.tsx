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
        "flex items-center  rounded gap-4  p-4 md:gap-6 md:p-[1.32rem] border-gray-100 ",
        selectedValue && selectedValue == title && "border-yellow-600 shadow-lg"
      )}
      onClick={() => handleClick(title)}
    >
      <div className="relative aspect-square h-6   ">
        <img
          src={iconString || "/icons/student.svg"}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      <p className="capitalize font-">
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
