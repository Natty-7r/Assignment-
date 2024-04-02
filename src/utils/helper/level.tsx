export const getMathimaticalExpressions = (level: string) => {
  switch (level) {
    case "caculus":
      return (
        <>
          ∫<sub>0</sub>
          <sup>l</sup> x<sup>2</sup> dx = ?
        </>
      );
    case "basic algebra":
      return <>3x+5=4</>;
    case "intermediate algebra":
      return (
        <>
          <span className="text-nowrap;">-</span>
          <span className="text-nowrap;">
            b ± √
            <span className="overline;">
              b<sup>2</sup> - 4ac
            </span>
          </span>{" "}
          / 2a
        </>
      );

    case "arithmetic":
      return (
        <>
          5 × <sup>1</sup>&frasl;<sub>2</sub> = ?
        </>
      );
  }
};
