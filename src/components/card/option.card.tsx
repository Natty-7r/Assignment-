import { Card } from "../ui/card";

const OptionCard = ({}: {
  Icon?: React.ComponentType<React.ComponentProps<any>>;
  title?: string;
  description?: string;
}) => {
  return (
    <Card className="flex items-center gap-6 p-5 py-6 my-2 shadow-none rounded-sm border-gray-100 ">
      <div className="relative aspect-square h-6   ">
        <img
          src="/icons/student.svg"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      <p className="capitalize font-medium">
        Student{" "}
        <span className="lowercase font-normal text-gray-400">
          {" "}
          or soon be enrolled
        </span>
      </p>
    </Card>
  );
};

export default OptionCard;
