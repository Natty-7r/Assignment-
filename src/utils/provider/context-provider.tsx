import { ReactNode, useCallback, useReducer } from "react";
import {
  initialState,
  AppContenxt,
  reducer,
  actions,
} from "../context/app-context";

const { USERTYPE, INTERESET, MATHLEVEL } = actions;

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setStep = useCallback((userType: Step) => {
    dispatch({
      type: USERTYPE,
      payload: userType,
    });
  }, []);
  const selectUser = useCallback((userType: string) => {
    dispatch({
      type: USERTYPE,
      payload: userType,
    });
  }, []);
  const selectIntereset = useCallback((intereset: string) => {
    dispatch({
      type: INTERESET,
      payload: intereset,
    });
  }, []);
  const selectMathLevel = useCallback((mathLevel: MathLevel) => {
    dispatch({
      type: MATHLEVEL,
      payload: mathLevel,
    });
  }, []);

  return (
    <AppContenxt.Provider
      value={{
        step: state?.step,
        intereset: state?.intereset,
        userType: state?.userType,
        mathLevel: state?.mathLevel,
        selectIntereset,
        selectUser,
        selectMathLevel,
        setStep,
      }}
    >
      {children}
    </AppContenxt.Provider>
  );
};

export default ContextProvider;
