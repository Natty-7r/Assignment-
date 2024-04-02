import NextButton from "@/components/button/next-button";
import FormProgress from "@/components/progress/form-progress";
import { AppContenxt } from "@/utils/context/app-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ProgressOne = () => {
  const navigate = useNavigate();
  const { setStep } = useContext(AppContenxt);

  const moveToNext = () => {
    setStep("select-math-level");
    navigate("/select-math-level");
  };
  return (
    <main className=" flex flex-col gap-2 p-8 md:px-[15%] ">
      <FormProgress />

      <div className="flex flex-col md:my-12 md:flex-row mx-auto items-center justify-around md:gap-[20%] ">
        <div className="aspect-[2/3]  relative basis-[25%]">
          <img
            src="/icons/student.svg"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="basis-[45%] md:mt-12">
          <h1 className=" first-letter:uppercase font-bold tracking-wide md:mb-6  text-xl md:text-4xl">
            You're in the right place
          </h1>
          <h4 className="first-letter:uppercase md:text-lg text-slate-700 text-xs mt-2  md:text-lg ">
            brillint gets you hands-on to help impreove your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math , science, and computer science.
          </h4>
        </div>
      </div>
      <NextButton disabled={false} onClickHandler={moveToNext} />
    </main>
  );
};

export default ProgressOne;