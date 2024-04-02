import OptionCard from "@/components/card/option.card";
import FormHeader from "@/components/header/form-header";
import FormProgress from "@/components/progress/form-progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { userTypes } from "@/utils/constants/userTypes";
import { AppContenxt } from "@/utils/context/app-context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserTypePage = () => {
  const [optionSeleced, setSelectionIndicator] = useState<boolean>(false);
  const AppState = useContext(AppContenxt);
  const selectUser = (userType: string) => {
    if (AppState?.selectUser) AppState.selectUser(userType);
    setSelectionIndicator(true);
  };
  const navigate = useNavigate();
  const moveToNext = () => {
    if (AppState?.setStep) AppState?.setStep("select-interest");
    navigate("/select-interest");
  };
  return (
    <main className=" flex flex-col gap-2 p-8 md:px-[15%] ">
      <FormProgress />
      <FormHeader
        headerText=" which describes you best?"
        headerDescription=" this will help us personize your expreience."
      />

      <div className="flex flex-col mx-auto   overflow-y-auto hideable_thin_scrollbar gap-3 mb-6 mt-6  md:mt-8 sm:w-4/5 lg:w-3/5 max-h-[50vh] md:max-h-[62vh]">
        {userTypes.map(({ type, description, iconString }, index: number) => (
          <OptionCard
            key={index}
            title={type}
            description={description}
            iconString={iconString}
            handleClick={selectUser}
            selectedValue={AppState?.userType}
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
        onClick={moveToNext}
      >
        Contitue
      </Button>
    </main>
  );
};

export default UserTypePage;