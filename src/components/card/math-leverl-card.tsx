import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { useEffect, useState } from "react";

const MathLevelCard = ({
  name,
  description,
  formula,
  handleClick,
  selectedValue,
}: MathLevelCardProps) => {
  const [_, setRelaod] = useState(false);

  useEffect(() => {
    setRelaod(true);
  }, []);
  return (
    <Card
      className={cn(
        "aspect-[1/1]   text-sm w-[48%] lg:w-[24%] flex flex-col items-center justify-center",
        selectedValue && selectedValue == name && "border-yellow-600 shadow-lg"
      )}
      onClick={() => handleClick(name)}
    >
      <div className="smb-4 md:mb-6 md:text-xl">{formula}</div>
      <div className="text-center">
        <p className="capitalize text-sm lg:text-base mb-1 ">{name}</p>
        <p className="capitalize text-gray-500 text-base sm:text-lg  text-center ">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default MathLevelCard;
