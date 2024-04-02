import LearnPathCard from "@/components/card/learning-path-card";
import FormHeader from "@/components/header/form-header";
import CircularLoader from "@/components/loader/circular-loader";
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
      <main className="  flex flex-col h-screen  justify-center items-center">
        <CircularLoader className="w-12 h-11" />
        <h1 className=" font-bold text-xl first-letter:uppercase  my-6 px-[10%] text-center ">
          finding learning path recommendations for you based on your responses
        </h1>
      </main>
    );
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

    imageSrc: "/icons/math.png",
  },
  {
    id: "#22222",
    headerText: "mathemacical thinking",
    headerDescription:
      "build your foundationsl skills in algebra, geometry, and probability.",
    imageSrc: "/icons/math.png",
  },
];
export default LearningPathPage;
