export const convertStepToPercent = (step: Step | undefined): number => {
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
