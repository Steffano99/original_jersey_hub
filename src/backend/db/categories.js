import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Club Jerseys",
    description:
      "Jerseys of top football clubs worldwide, worn in domestic league matches and international club competitions.",
  },
  {
    _id: uuid(),
    categoryName: "International Jerseys",
    description:
      "Official jerseys representing national teams from various countries, worn in international competitions.",
  },
  {
    _id: uuid(),
    categoryName: "Graphic T-Shirts",
    description:
      "Express yourself with trendy and artistic designs printed on comfortable and versatile tees for every occasion.",
  },
];