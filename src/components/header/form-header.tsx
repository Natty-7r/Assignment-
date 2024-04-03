import { cn } from "@/lib/utils";

const FormHeader = ({
  headerText,
  className,
  headerDescription,
}: FormHeaderProps) => {
  return (
    <header className={cn("text-center", className)}>
      <h1 className=" first-letter:uppercase font-bold  md:mb-2  text-xl md:text-3xl">
        {headerText}
      </h1>
      <h4 className="first-letter:uppercase text-slate-700 text-xs  md:text-base text-slate-600">
        {headerDescription}
      </h4>
    </header>
  );
};

export default FormHeader;
