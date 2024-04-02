import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

const MathLevelCard = ({
  name,
  description,
  preview,
  handleClick,
  selectedValue,
}: {
  name: string;
  description: string;
  preview: string;
  handleClick: Function;
  selectedValue?: string;
}) => {
  return (
    <Card
      className={cn(
        "aspect-[1/1]  p-4 text-sm basis-[45%] md:basis-[24%] flex flex-col items-center justify-center",
        selectedValue && selectedValue == name && "border-yellow-600 shadow-lg"
      )}
      onClick={() => handleClick(name)}
    >
      <p className="mb-2 md:mb-4">{preview}</p>
      <div className="">
        <p className="capitalize  ">{name}</p>
        <p className="capitalize text-gray-500  text-center tracking-wide">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default MathLevelCard;
