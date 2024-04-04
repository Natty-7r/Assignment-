import LearnPathCard from "@/components/card/learning-path-card";
import FormHeader from "@/components/header/form-header";
import CircularLoader from "@/components/loader/circular-loader";
import { learningpaths } from "@/utils/constants/step-values";
import { useEffect, useState } from "react";

const LearningPathPage = () => {
  const [selctedId, setSelectedId] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const selectCard = (id: string) => {
    setSelectedId(id);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading)
    return (
      <main className=" py-8 px-6  flex flex-col h-screen   justify-center items-center">
        <CircularLoader className="w-12 h-[2.95rem]" />
        <h1 className=" font-bold text-xl first-letter:uppercase  my-6 px-[10%] text-center ">
          finding learning path recommendations for you based on your responses
        </h1>
      </main>
    );
  return (
    <main className=" flex flex-col px-6 pt- sm:p-12 sm:p-24  md:px-[10%] lg:my-24 lg:justify-center ">
      <FormHeader
        headerText=" learning paths based on your answers"
        headerDescription="choose one to get started. You can switch anytime."
      />
      <div className="flex gap-5 flex-col lg:flex-row my-8  lg:mx-auto lg:w-[70%]">
        {learningpaths.map(
          (
            { id, headerText, headerDescription, lable, imageSrc },
            index: number
          ) => (
            <LearnPathCard
              clickHandler={selectCard}
              selctedId={selctedId}
              id={id}
              key={index}
              lable={lable}
              imageSrc={imageSrc}
              headerText={headerText}
              headerDescription={headerDescription}
            />
          )
        )}
      </div>
    </main>
  );
};

export default LearningPathPage;
