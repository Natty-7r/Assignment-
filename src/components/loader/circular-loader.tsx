import { cn } from "@/lib/utils";

const CircularLoader = ({ className }: ClassNameProps) => {
  return (
    <div
      className={cn(
        className,
        " rounded-full border-8 border-yellow-500 animate-spin"
      )}
    ></div>
  );
};

export default CircularLoader;
