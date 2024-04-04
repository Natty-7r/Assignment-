import { useMemo } from "react";
import { Progress } from "../ui/progress";
import { ChevronLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { convertStepToPercent } from "@/utils/constants/progress";

const FormProgress = ({ className }: ClassNameProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const stepPercent = useMemo(() => {
    return convertStepToPercent(
      location.pathname == "/" ? "user" : (location.pathname as Step)
    );
  }, [location.pathname]);

  return (
    <div className={cn("flex items-center gap-2 cursor-pointer", className)}>
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
