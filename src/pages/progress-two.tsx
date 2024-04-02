import NextButton from "@/components/button/next-button";
import FormProgress from "@/components/progress/form-progress";
import { AppContenxt } from "@/utils/context/app-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoStar } from "react-icons/io5";
const ProgressTwoPage = () => {
  const navigate = useNavigate();
  const appState = useContext(AppContenxt);
  const moveToNext = () => {
    if (appState?.setStep) appState.setStep("learning-path");
    navigate("/learning-path");
  };
  return (
    <main className=" flex flex-col gap-2 p-8 md:px-[15%] ">
      <FormProgress />
      <div className="flex flex-col md:my-12 md:flex-row mx-auto items-center justify-around md:gap-[5%] ">
        <div className="aspect-[2/3]  relative  w-1/4 md:w-[20%] my-12">
          <img
            src="/icons/done.png"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="w-4/5 md:w-[45%] md:mt-12">
          <h1 className=" first-letter:uppercase font-bold tracking-wide mb-4  md:mb-6  text-xl md:text-4xl">
            You're in the right place
          </h1>
          <div className="flex gap-2 ">
            {new Array(5).fill(1).map((_, index) => (
              <IoStar className=" w-6 h-6 text-yellow-500" key={index} />
            ))}
          </div>
          <h4 className="first-letter:uppercase italic md:text-lg text-slate-700 text-xs mt-2  md:text-lg ">
            "brillint gets you hands-on to help impreove your professional
            skills and knowledge. You'll interact with concepts and solve fun
            problems in math , science, and computer science.""
          </h4>
          <p className="capitalize my-4">- jacob S.</p>
        </div>
      </div>

      <NextButton disabled={false} onClickHandler={moveToNext} />
    </main>
  );
};

export default ProgressTwoPage;
