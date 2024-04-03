import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

const LearnPathCard = ({
  id,
  selctedId,
  clickHandler,
  lable,
  imageSrc,
  headerText,
  headerDescription,
}: LearnPathCardProps) => {
  return (
    <Card
      className={cn(
        "relative flex w-full lg:w-[45%]  items-center p-4  lg:px-4 lg:py-6",
        id && id == selctedId && "border-yellow-600 shadow-lg"
      )}
      onClick={() => clickHandler(id)}
    >
      {lable && (
        <p className="absolute top-0 font-medium left-[50%] translate-x-[-50%]  translate-y-[-50%] bg-yellow-500 text-nowrap rounded-full text-xs uppercase  px-2 py-1">
          {lable}
        </p>
      )}
      <div className="w-3/4">
        <h1 className=" capitalize font-bold text-lg sm:text-xl ">
          {headerText}
        </h1>
        <h4 className="first-letter:uppercase text-slate-700 text-sm mt-1 lg:text-base  ">
          {headerDescription}
        </h4>
      </div>
      <div className="relative  aspect-[1/1] w-1/4">
        <img
          src={imageSrc || "/icons/student.svg"}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </Card>
  );
};

export default LearnPathCard;
