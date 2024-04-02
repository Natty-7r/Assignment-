type MathLevel = "level1" | "level2" | "level3" | "level4" | "";

type Action = "USERTYPE" | "INTERESET" | "MATHLEVEL" | "STEP";

type Step =
  | "select-user"
  | "select-interest"
  | "after-interest"
  | "select-math-level"
  | "after-math-level"
  | "finished";

type ActionType = { type: Action; payload: string | MathLevel | Step };

type AppStateType =
  | {
      userType?: string;
      intereset?: string;
      mathLevel?: MathLevel;
      step?: Step;

      selectIntereset?: (intereset: string) => void;
      selectUser?: (userType: string) => void;
      selectMathLevel?: (mathLevel: MathLevel) => void;
      setStep?: (step: Step) => void;
    }
  | undefined
  | null;
