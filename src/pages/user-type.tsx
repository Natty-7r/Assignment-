import NextButton from "@/components/button/next-button";
import OptionCard from "@/components/card/option.card";
import FormHeader from "@/components/header/form-header";
import FormProgress from "@/components/progress/form-progress";
import { userTypes } from "@/utils/constants/step-values";
import { AppContenxt } from "@/utils/context/app-context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserTypePage = () => {
  const [optionSeleced, setSelectionIndicator] = useState<boolean>(false);
  const { selectUser, userType, setStep } = useContext(AppContenxt);
  const handleSelection = (userType: string) => {
    selectUser(userType);
    setSelectionIndicator(true);
  };
  const navigate = useNavigate();
  const moveToNext = () => {
    setStep("interest");
    navigate("/interest");
  };
  return (
    <main className=" flex flex-col gap-2 p-8 md:px-[15%] ">
      <FormProgress />
      <FormHeader
        headerText=" which describes you best?"
        headerDescription=" this will help us personize your expreience."
      />

      <div className="flex flex-col mx-auto   overflow-y-auto hideable_thin_scrollbar gap-2 mb-6 mt-6  md:mt-8 sm:w-4/5 lg:w-3/5 max-h-[50vh] md:max-h-[65vh]">
        {userTypes.map(({ type, description, iconString }, index: number) => (
          <OptionCard
            key={index}
            title={type}
            description={description}
            iconString={iconString}
            handleClick={handleSelection}
            selectedValue={userType}
          />
        ))}
      </div>
      <NextButton
        disabled={
          userType?.trim() == "" || (!optionSeleced && userType?.trim() == "")
        }
        onClickHandler={moveToNext}
      />
    </main>
  );
};

export default UserTypePage;
