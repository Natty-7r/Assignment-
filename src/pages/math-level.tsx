import NextButton from "@/components/button/next-button";
import MathLevelCard from "@/components/card/math-leverl-card";
import FormHeader from "@/components/header/form-header";
import FormProgress from "@/components/progress/form-progress";
import { mathLevel } from "@/utils/constants/step-values";
import { AppContenxt } from "@/utils/context/app-context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const MathLevelPage = () => {
  const [optionSeleced, setSelectionIndicator] = useState<boolean>(false);
  const appState = useContext(AppContenxt);
  const selectUser = (mathLevel: MathLevel) => {
    if (appState?.selectMathLevel) appState.selectMathLevel(mathLevel);
    setSelectionIndicator(true);
  };
  const navigate = useNavigate();
  const moveToNext = () => {
    if (appState?.setStep) appState?.setStep("after-math-level");
    navigate("/after-math-level");
  };
  return (
    <main className=" flex flex-col gap-2 p-8 md:px-[15%] ">
      <FormProgress />
      <FormHeader
        className="my-4"
        headerText=" what is your math comfort level?"
        headerDescription=" choose the highets level you feel confident in - you can always adjust later.."
      />

      <div className="flex   mx-auto flex-wrap justify-around overflow-y-auto hideable_thin_scrollbar gap-2 mb-6 mt-6  md:mt-12 sm:w-4/5 lg:w-4/5 max-h-[55vh] md:max-h-[62vh]">
        {mathLevel
          .slice(0, 4)
          .map(({ name, description, preview }, index: number) => (
            <MathLevelCard
              key={index}
              name={name}
              description={description}
              preview={preview}
              handleClick={selectUser}
              selectedValue={appState?.mathLevel}
            />
          ))}
      </div>

      <NextButton
        disabled={
          appState?.mathLevel?.trim() == "" ||
          (!optionSeleced && appState?.mathLevel?.trim() == "")
        }
        onClickHandler={moveToNext}
      />
    </main>
  );
};

export default MathLevelPage;
