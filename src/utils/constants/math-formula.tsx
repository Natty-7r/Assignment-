import { MathJaxFormula } from "mathjax3-react";

export const getMathimaticalExpressions = (level: string): React.ReactNode => {
  switch (level) {
    case "caculus":
      return <MathJaxFormula formula="$$\int_{0}^{L} x^2dx =?$$" />;

    case "basic algebra":
      return <MathJaxFormula formula="$$3x + 5 = 4$$" />;

    case "intermediate algebra":
      return (
        <MathJaxFormula formula="$$\frac{{-b \pm \sqrt{{b^2 - 4ac}}}}{{2a}}$$" />
      );

    case "arithmetic":
      return <MathJaxFormula formula="$$5 \times \frac{1}{2} = ?$$" />;
    default:
      return <MathJaxFormula formula="$$5 \times \frac{1}{2} = ?$$" />;
  }
};
