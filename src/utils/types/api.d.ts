type Usertype = {
  type: string;
  iconString: string;
  description?: string;
};

type Interest = { type: string; iconString: string };

type MathLevelType = {
  name: string;
  description: string;
  formula: React.ReactNode;
};
type LearningPath = {
  id: string;
  lable?: string;
  headerText: string;
  headerDescription: string;
  imageSrc: string;
};
