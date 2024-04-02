import OptionCard from "@/components/card/option.card";
import FormHeader from "@/components/header/form-header";
import FormProgress from "@/components/progress/form-progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { interestList } from "@/utils/constants/step-values";
import { AppContenxt } from "@/utils/context/app-context";
import { useContext, useState } from "react";

const InterestsPage = () => {
  const [optionSeleced, setSelectionIndicator] = useState<boolean>(false);
  const appState = useContext(AppContenxt);
  const selectUser = (intereset: string) => {
    if (appState?.selectIntereset) appState.selectIntereset(intereset);
    setSelectionIndicator(true);
  };
  return (
    <main className=" flex flex-col gap-2 p-8 md:px-[15%] ">
      <FormProgress />
      <FormHeader
        headerText=" which are you most intereseted in?"
        headerDescription=" choose just one. This will help us get you started   (but won't limit your experience)."
      />

      <div className="flex flex-col mx-auto   overflow-y-auto hideable_thin_scrollbar gap-3 mb-6 mt-6  md:mt-8 sm:w-4/5 lg:w-3/5 max-h-[50vh] md:max-h-[62vh]">
        {interestList.map(({ type, iconString }, index: number) => (
          <OptionCard
            key={index}
            title={type}
            iconString={iconString}
            handleClick={selectUser}
            selectedValue={appState?.intereset}
          />
        ))}
      </div>
      <Button
        disabled={!optionSeleced}
        className={cn(
          "w-fit mx-auto capitalize px-12 text-lg ",
          !optionSeleced && "opacity-0"
        )}
        size={"lg"}
      >
        {" "}
        Contitue
      </Button>
    </main>
  );
};

export default InterestsPage;
