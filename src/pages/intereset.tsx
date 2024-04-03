import NextButton from "@/components/button/next-button";
import OptionCard from "@/components/card/option.card";
import FormHeader from "@/components/header/form-header";
import FormProgress from "@/components/progress/form-progress";
import { interestList } from "@/utils/constants/step-values";
import { AppContenxt } from "@/utils/context/app-context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const InterestsPage = () => {
  const navigate = useNavigate();
  const [optionSeleced, setSelectionIndicator] = useState<boolean>(false);
  const { setStep, selectIntereset, intereset } = useContext(AppContenxt);

  const handleSelection = (intereset: string) => {
    selectIntereset(intereset);
    setSelectionIndicator(true);
  };

  const moveToNext = () => {
    setStep("progress-one");
    navigate("/progress-one");
  };

  return (
    <main className=" flex flex-col gap-2 p-6 md:px-[15%] ">
      <FormProgress />
      <FormHeader
        headerText=" which are you most intereseted in?"
        headerDescription=" choose just one. This will help us get you started   (but won't limit your experience)."
      />

      <div className="flex flex-col mx-auto   overflow-y-auto hideable_thin_scrollbar gap-3 my-3  md:mt-6 sm:w-4/5 lg:w-3/5 max-h-[62vh] md:max-h-[62vh]">
        {interestList.map(({ type, iconString }, index: number) => (
          <OptionCard
            key={index}
            title={type}
            iconString={iconString}
            handleClick={handleSelection}
            selectedValue={intereset}
          />
        ))}
      </div>

      <NextButton
        disabled={
          intereset?.trim() == "" || (!optionSeleced && intereset?.trim() == "")
        }
        onClickHandler={moveToNext}
      />
    </main>
  );
};

export default InterestsPage;
