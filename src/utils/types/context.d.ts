type MathLevel = "level1" | "level2" | "level3" | "level4";

type AppStateType = {
  userType?: string | null;
  intereset?: string | null;
  mathLevel?: MathLevel | null;

  selectIntereset?: (intereset: string) => void;
  selectUser?: (userType: string) => void;
  selectMathLevel?: (mathLevel: MathLevel) => void;
} | null;

type Action = "USERTYPE" | "INTERESET" | "MATHLEVEL";

type ActionType = { type: Action; payload: string | MathLevel };
