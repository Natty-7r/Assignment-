import { cn } from "@/lib/utils";

const FormHeader = ({
  headerText,
  className,
  headerDescription,
}: {
  className?: string;
  headerText: string;
  headerDescription: string;
}) => {
  return (
    <header className={cn("text-center", className)}>
      <h1 className=" first-letter:uppercase font-bold tracking-wide md:mb-4  text-xl md:text-3xl">
        {headerText}
      </h1>
      <h4 className="first-letter:uppercase text-slate-700 text-xs mt-2 md:text-base">
        {headerDescription}
      </h4>
    </header>
  );
};

export default FormHeader;
