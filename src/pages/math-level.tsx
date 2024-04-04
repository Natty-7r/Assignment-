import NextButton from "@/components/button/next-button";
import MathLevelCard from "@/components/card/math-leverl-card";
import FormHeader from "@/components/header/form-header";
import FormProgress from "@/components/progress/form-progress";
import { mathLevels } from "@/utils/constants/step-values";
import { AppContenxt } from "@/utils/context/app-context";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MathLevelPage = () => {
  const [optionSeleced, setSelectionIndicator] = useState<boolean>(false);
  const { setStep, selectMathLevel, mathLevel } = useContext(AppContenxt);
  const [r, setRelaod] = useState(false);
  const handleSelection = (mathLevel: MathLevel) => {
    selectMathLevel(mathLevel);
    setSelectionIndicator(true);
  };
  const navigate = useNavigate();
  const moveToNext = () => {
    setStep("progress-two");
    navigate("/progress-two");
  };

  useEffect(() => {
    setRelaod(true);
  }, [r]);
  return (
    <main className=" flex flex-col gap-2  py-8 px-6 sm:p-12 md:px-[15%] ">
      <FormProgress />
      <FormHeader
        className="my-4"
        headerText=" what is your math comfort level?"
        headerDescription=" choose the highets level you feel confident in - you can always adjust later.."
      />

      <div className="flex   mx-auto flex-wrap justify-around overflow-y-auto hideable_thin_scrollbar gap-2 mb-6 mt-6  md:my-12 sm:w-4/5 lg:w-4/5 max-h-[55vh] md:max-h-[62vh]">
        {mathLevels.map(({ name, description, formula }, index: number) => (
          <MathLevelCard
            key={index}
            name={name}
            description={description}
            formula={formula}
            handleClick={handleSelection}
            selectedValue={mathLevel}
          />
        ))}
      </div>

      <NextButton
        disabled={
          mathLevel?.trim() == "" || (!optionSeleced && mathLevel?.trim() == "")
        }
        onClickHandler={moveToNext}
      />
    </main>
  );
};

export default MathLevelPage;
