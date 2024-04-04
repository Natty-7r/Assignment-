import { cn } from "@/lib/utils";

export const Fraction = ({
  className,
  children,
}: {
  className?: string;
  children: any[];
}) => {
  return (
    <div className={cn(className, "flex-col gap-1 w-fit")}>
      <p className=" w-full">{children[0]}</p>
      <p className="w-full border-b border-black "></p>
      <p className="w-full">{children[1]}</p>
    </div>
  );
};

export const Sqrt = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => {
  return (
    <msqrt className={cn(className)}>
      <mi className="flex p-[.1rem]">{children}</mi>
    </msqrt>
  );
};
