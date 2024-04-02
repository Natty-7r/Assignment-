import LearnPathCard from "@/components/card/learning-path-card";
import FormHeader from "@/components/header/form-header";
import { useState } from "react";

const LearningPathPage = () => {
  const [selctedId, setSelectedId] = useState<string | undefined>(undefined);

  const selectCard = (id: string) => {
    setSelectedId(id);
  };
  return (
    <main className=" flex flex-col gap-2 p-8 md:px-[18%] py-[20%] md:py-[10%] md:py-[5%]  ">
      <FormHeader
        headerText=" learning paths based on your answers"
        headerDescription="choose one to get started. You can switch anytime."
      />
      <div className="flex gap-5 flex-col lg:flex-row my-12  lg:mx-auto lg:w-4/5">
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

const learningpaths: any[] = [
  {
    id: "#11111",
    lable: "most popular",
    headerText: "foundation math",
    headerDescription:
      "build your foundationsl skills in algebra, geometry, and probability.",
    imageSrc: "/icons/student.svg",
  },
  {
    id: "#22222",
    headerText: "mathemacical thinking",
    headerDescription:
      "build your foundationsl skills in algebra, geometry, and probability.",
    imageSrc: "/icons/student.svg",
  },
];
export default LearningPathPage;
