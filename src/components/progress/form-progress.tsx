import { useMemo } from "react";
import { Progress } from "../ui/progress";
import { ChevronLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const FormProgress = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const stepPercent = useMemo(() => {
    if (location.pathname == "/") return convertStepToPercent("select-user");
    return convertStepToPercent(location.pathname as Step);
  }, [location.pathname]);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {stepPercent > 20 && location.pathname != "/" && (
        <ChevronLeft
          onClick={() => {
            navigate(-1);
          }}
        />
      )}
      <Progress
        className="my-4 h-1 text-slate-100"
        value={stepPercent}
        color="red"
      />
    </div>
  );
};

export default FormProgress;

const convertStepToPercent = (step: Step | undefined): number => {
  let stepString = step;
  if (step?.includes("/")) stepString = step.split("/")[1] as Step;
  switch (stepString) {
    case undefined:
      return 0;
    case null:
      return 0;
    case "select-user":
      return 20;
    case "select-interest":
      return 40;
    case "after-interest":
      return 60;
    case "select-math-level":
      return 80;
    case "after-math-level":
      return 100;
    default:
      return 50;
  }
};
