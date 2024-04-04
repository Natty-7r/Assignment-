import { cn } from "@/lib/utils";

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
