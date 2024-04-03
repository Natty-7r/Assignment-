import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

const MathLevelCard = ({
  name,
  description,
  preview,
  handleClick,
  selectedValue,
}: MathLevelCardProps) => {
  return (
    <Card
      className={cn(
        "aspect-[1/1]   text-sm basis-[48%] md:basis-[24%] flex flex-col items-center justify-center",
        selectedValue && selectedValue == name && "border-yellow-600 shadow-lg"
      )}
      onClick={() => handleClick(name)}
    >
      <p className="mb-4 md:mb-6 md:text-xl">{preview}</p>
      <div className="text-center">
        <p className="capitalize  lg:text-base ">{name}</p>
        <p className="capitalize text-gray-500 text-lg  text-center ">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default MathLevelCard;
