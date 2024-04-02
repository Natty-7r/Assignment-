import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const NextButton = ({
  btnText = "Continue",
  onClickHandler,
  disabled,
}: {
  btnText?: string;
  onClickHandler: () => void;
  disabled: boolean;
}) => {
  return (
    <Button
      disabled={disabled}
      className={cn("w-fit mx-auto capitalize px-12 text-lg ")}
      size={"lg"}
      onClick={onClickHandler}
    >
      {btnText}
    </Button>
  );
};

export default NextButton;