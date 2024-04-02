import { getMathimaticalExpressions } from "../helper/level";

export const userTypes: Usertype[] = [
  { type: "student", description: "or soon to be enrolled", iconString: "" },
  { type: "professional", description: "persuing a career", iconString: "" },
  { type: "parent", description: "of a school-age child", iconString: "" },
  { type: "lifelong learner", iconString: "" },
  { type: "teacher", iconString: "" },
  { type: "other", iconString: "" },
];

export const interestList: Interest[] = [
  { type: "learning specific skills to advance career", iconString: "" },
  { type: "explorng new topics I'm interseted in ", iconString: "" },
  { type: "refreshing my math foudations", iconString: "" },
  { type: "exerciseing my brain to stary sharp ", iconString: "" },
  { type: "domething else ", iconString: "" },
];

export const mathLevel: any[] = [
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
