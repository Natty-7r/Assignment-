import { Fraction } from "@/components/math/fraction";
import { Sqrt } from "@/components/math/sqrt";

export const getMathimaticalExpressions = (level: string) => {
  switch (level) {
    case "caculus":
      return (
        <math className="flex items-center gap-[.2rem] ">
          <msub className="">
            <mtext className=" pl-8-"> ∫</mtext>
            <mn>2</mn>
          </msub>
          <msup className="translate-x-[-90%] ">
            <mtext className="opacity-0  block "> ∫</mtext>
            <mn>2</mn>
          </msup>
          <msup className="translate-x-[-60%] ">
            <mi className="math-text ">x</mi>
            <mn>2</mn>
          </msup>
          <mtext className=" flex translate-x-[-40%] ">d = ? </mtext>
        </math>
      );

    case "basic algebra":
      return (
        <div className=" ">
          3<span className="math-text">x</span> + 5 = 4
        </div>
      );
    case "intermediate algebra":
      return (
        <div className="">
          <Fraction>
            <math className="flex items-center text-center tracking-wider">
              <mtext> -b ± </mtext>
              <Sqrt>
                <msup>
                  <mi className="math-text">b</mi>
                  <mn>2</mn>
                </msup>
                - 4ac
              </Sqrt>
            </math>
            <p className="block text-center">
              <mtext> 2a </mtext>
            </p>
          </Fraction>
        </div>
      );

    case "arithmetic":
      return (
        <div className="flex items-center gap-2">
          5 ×{" "}
          <Fraction>
            <span>1</span>
            <span>2</span>
          </Fraction>
          = ?
        </div>
      );
  }
};
