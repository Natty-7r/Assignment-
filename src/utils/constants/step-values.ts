import { getMathimaticalExpressions } from "./math-formula";

export const userTypes: Usertype[] = [
  {
    type: "student",
    description: "or soon to be enrolled",
    iconString: "/icons/users/student.png",
  },
  {
    type: "professional",
    description: "persuing a career",
    iconString: "/icons/users/professional.png",
  },
  {
    type: "parent",
    description: "of a school-age child",
    iconString: "/icons/users/parent.png",
  },
  { type: "lifelong learner", iconString: "/icons/users/woman.png" },
  { type: "teacher", iconString: "/icons/users/teacher.png" },
  { type: "other", iconString: "/icons/users/other.png" },
];

export const interestList: Interest[] = [
  {
    type: "learning specific skills to advance career",
    iconString: "/icons/interesets/chart.png",
  },
  {
    type: "explorng new topics I'm interseted in ",
    iconString: "/icons/interesets/glob.png",
  },
  {
    type: "refreshing my math foudations",
    iconString: "/icons/interesets/maths.png",
  },
  {
    type: "exerciseing my brain to stary sharp ",
    iconString: "/icons/interesets/arrow.png",
  },
  { type: "domething else ", iconString: "/icons/interesets/eyes.png" },
];

export const mathLevels: MathLevelType[] = [
  {
    name: "arithmetic",
    description: "introuductory",
    formula: getMathimaticalExpressions("arithmetic"),
  },
  {
    name: "basic algebra",
    description: "foundational",
    formula: getMathimaticalExpressions("basic algebra"),
  },
  {
    name: "intermediate algebra",
    description: "intermediate",
    formula: getMathimaticalExpressions("intermediate algebra"),
  },
  {
    name: "caculus",
    description: "advanced",
    formula: getMathimaticalExpressions("caculus"),
  },
];

export const learningpaths: LearningPath[] = [
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
