import { useMemo } from "react";
import { Progress } from "../ui/progress";
import { ChevronLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const FormProgress = ({ className }: ClassNameProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const stepPercent = useMemo(() => {
    if (location.pathname == "/") return convertStepToPercent("user");
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
    case "user":
      return 15;
    case "interest":
      return 30;
    case "progress-one":
      return 45;
    case "math-level":
      return 60;
    case "progress-two":
      return 100;

    default:
      return 50;
  }
};
