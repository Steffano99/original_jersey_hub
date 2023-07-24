import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Jerseys",
    description:
      "Official jerseys of top football clubs and national teams, as well as limited edition or retro jerseys",
  },
  {
    _id: uuid(),
    categoryName: "Equipment",
    description:
      "High-quality footballs, training equipment, shin guards, and goalkeeper gloves.",
  },
  {
    _id: uuid(),
    categoryName: "Collectibles",
    description:
      "Limited edition signed memorabilia, football cards, and other collectibles from legendary players and iconic moments.",
  },
];