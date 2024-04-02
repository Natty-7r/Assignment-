import { createContext } from "react";

// Create Context

export const actions = {
  USERTYPE: "USERTYPE" as Action,
  INTERESET: "INTERESET" as Action,
  MATHLEVEL: "MATHLEVEL" as Action,
  STEP: "STEP" as Action,
};
const { USERTYPE, INTERESET, MATHLEVEL, STEP } = actions;

// Initial Value
export const initialState: AppStateType = {
  userType: "",
  intereset: "",
  mathLevel: "level1",
  step: "select-user",
};

// Reducer
export const reducer = (
  state: AppStateType,
  action: ActionType
): AppStateType => {
  const { type, payload } = action;
  switch (type) {
    case INTERESET:
      return {
        ...state,
        intereset: payload,
      };
    case USERTYPE:
      return {
        ...state,
        userType: payload as string,
      };
    case MATHLEVEL:
      return {
        ...state,
        mathLevel: payload as MathLevel,
      };
    case STEP:
      return {
        ...state,
        step: payload as Step,
      };
    default:
      return state;
  }
};

export const AppContenxt = createContext<AppStateType>(initialState);
