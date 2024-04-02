import { createContext } from "react";

// Create Context

export const actions = {
  USERTYPE: "USERTYPE" as Action,
  INTERESET: "INTERESET" as Action,
  MATHLEVEL: "MATHLEVEL" as Action,
};
const { USERTYPE, INTERESET, MATHLEVEL } = actions;

// Initial Value
export const initialState: AppStateType = {
  userType: null,
  intereset: null,
  mathLevel: null,
};

// Reducer
export const reducer = (state: any, action: ActionType): AppStateType => {
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
        userType: payload,
      };
    case MATHLEVEL:
      return {
        ...state,
        mathLevel: payload,
      };
    default:
      return state;
  }
};

export const AppContenxt = createContext<AppStateType>(initialState);
