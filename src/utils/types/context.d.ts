type MathLevel = "level1" | "level2" | "level3" | "level4" | "";

type Action = "USERTYPE" | "INTERESET" | "MATHLEVEL" | "STEP";

type Step =
  | "user"
  | "interest"
  | "progress-one"
  | "math-level"
  | "progress-two"
  | "learning-path";

type ActionType = { type: Action; payload: string | MathLevel | Step };

type AppStateType = {
  userType: string;
  intereset: string;
  mathLevel: MathLevel;
  step: Step;

  selectIntereset: (intereset: string) => void;
  selectUser: (userType: string) => void;
  selectMathLevel: (mathLevel: MathLevel) => void;
  setStep: (step: Step) => void;
};
