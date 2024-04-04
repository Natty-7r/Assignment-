type OptionCardProps = {
  selectedValue?: string;
  title: string;
  description?: string;
  handleClick: Function;
  iconString?: string;
};

type LearnPathCardProps = {
  clickHandler: Function;
  selctedId?: string;
  id: string;
  imageSrc?: string;
  lable?: string;
  headerText?: string;
  headerDescription?: string;
};

type MathLevelCardProps = {
  name: string;
  description: string;
  formula: React.ReactNode;
  handleClick: Function;
  selectedValue?: string;
};

type FormHeaderProps = {
  className?: string;
  headerText: string;
  headerDescription: string;
};

type ClassNameProps = {
  className?: string;
};

type NextButtonProps = {
  btnText?: string;
  onClickHandler: () => void;
  disabled: boolean;
};
