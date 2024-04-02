import { useContext, useMemo } from "react";
import { Progress } from "../ui/progress";
import { AppContenxt } from "@/utils/context/app-context";

const FormProgress = () => {
  const appState = useContext(AppContenxt);
  const stepPercent = useMemo(() => {
    return convertStepToPercent(appState?.step);
  }, [appState?.step]);
  return (
    <Progress
      className="my-4 h-1 text-slate-100"
      value={stepPercent}
      color="red"
    />
  );
};

export default FormProgress;

const convertStepToPercent = (step: Step | undefined): number => {
  switch (step) {
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
