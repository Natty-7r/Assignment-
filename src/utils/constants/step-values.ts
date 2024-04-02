import { getMathimaticalExpressions } from "../helper/level";

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

export const mathLevels: any[] = [
  {
    name: "arithmetic",
    description: "introuductory",
    preview: getMathimaticalExpressions("arithmetic"),
  },
  {
    name: "basic algebra",
    description: "foundational",
    preview: getMathimaticalExpressions("basic algebra"),
  },
  {
    name: "intermediate algebra",
    description: "intermediate",
    preview: getMathimaticalExpressions("intermediate algebra"),
  },
  {
    name: "caculus",
    description: "advanced",
    // previewText : ` "4 X 1/2 =  ?",`,
    preview: getMathimaticalExpressions("caculus"),
  },
];
