import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
export const products = [
  {
    _id: uuid(),
    imgSrc:
      "https://footballmonk.in/wp-content/uploads/2023/06/Barcelona-home-23-24-1.jpg.webp",
    categoryName: "Club Jerseys",
    price: 950,
    originalPrice: 1899,
    productName: "FC Barcelona Home Kit 2023-24",
    productDescription:
      "FC Barcelona's iconic home jersey, representing the Blaugrana spirit that featured top talents like Messi and Neymar.",
    inStock: true,
    averageRating: 4.2,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://footballmonk.in/wp-content/uploads/2023/06/Man-United-home-23-24-1.jpg.webp",
    categoryName: "Club Jerseys",
    price: 999,
    originalPrice: 1899,
    productName: "Manchester United Home Kit 2023-24",
    productDescription:
      "Official jersey of Manchester United, showcasing the Red Devils' legacy and star players like Rashford and Bruno Fernandes.",
    inStock: true,
    averageRating: 4.8,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://footballmonk.in/wp-content/uploads/2023/06/Real-madrid-home-1.jpg",
    categoryName: "Club Jerseys",
    price: 910,
    originalPrice: 1899,
    productName: "Real Madrid Home Kit 2023-24",
    productDescription:
      "Famous white jersey of Real Madrid, embodying the Galacticos' tradition of excellence with players like Benzema and Modrić.",
    inStock: true,
    averageRating: 4.7,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://footballmonk.in/wp-content/uploads/2023/07/Inter-Miami-Home-23-24-1.jpg",
    categoryName: "Club Jerseys",
    price: 1800,
    originalPrice: 2500,
    productName: "Inter Miami Home Jersey 2023",
    productDescription:
      "Lionel Messi at Inter Miami, reflecting the Argentine superstar's impact on the MLS.",
    inStock: true,
    averageRating: 4,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://footballmonk.in/wp-content/uploads/2023/01/Al-Nassr-Ronaldo-Home-3.jpg.webp",
    categoryName: "Club Jerseys",
    price: 1750,
    originalPrice: 2500,
    productName: "Al Nassr Home Ronaldo Kit 2022-23",
    productDescription:
      "Jersey for Cristiano Ronaldo at Al Nassr, bringing the Portuguese legend's brilliance to Saudi Arabian football.",
    inStock: true,
    averageRating: 3.5,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://footballmonk.in/wp-content/uploads/2023/01/Argentina-3-star-Messi-World-cup-home-kit-1.jpg.webp",
    categoryName: "International Jerseys",
    price: 1500,
    originalPrice: 1999,
    productName: "Argentina 3 Star Home World Cup Messi kit 2022-23",
    productDescription:
      "Official jersey of the Argentina national football team, representing the pride of the Albiceleste",
    inStock: true,
    averageRating: 4.9,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://footballmonk.in/wp-content/uploads/2022/10/Portugal-Ronaldo-World-cup-home-22-23-kit-1.jpg.webp",
    categoryName: "International Jerseys",
    price: 1370,
    originalPrice: 1999,
    productName: "Portugal Home World Cup Ronaldo Kit 2022-23",
    productDescription:
      "Authentic jersey of the Portugal national football team, showcasing the skill of Cristiano Ronaldo and the Seleção.",
    inStock: true,
    averageRating: 4.4,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://footballmonk.in/wp-content/uploads/2022/11/Brazil-World-cup-home-22-23-kit-custom-0.jpg.webp",
    categoryName: "International Jerseys",
    price: 1250,
    originalPrice: 1999,
    productName: "Brazil World Cup Home 22-23 Kit",
    productDescription:
      "Iconic jersey of the Brazil national football team, reflecting the Samba flair and rich footballing history.",
    inStock: true,
    averageRating: 3,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://footballmonk.in/wp-content/uploads/2022/10/England-World-cup-home-22-23-kit-1.jpg.webp",
    categoryName: "International Jerseys",
    price: 1100,
    originalPrice: 1999,
    productName: "England World Cup Home 22-23 Kit",
    productDescription:
      "Classic jersey of the England national football team, symbolizing the Three Lions' pursuit of glory.",
    inStock: true,
    averageRating: 3.1,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://footballmonk.in/wp-content/uploads/2022/11/France-Home-World-Cup-22-23-Kit-1.jpg.webp",
    categoryName: "International Jerseys",
    price: 999,
    originalPrice: 1999,
    productName: "France Home World Cup Kit 22-23",
    productDescription:
      "Stylish jersey of the France national football team, epitomizing Les Bleus' elegance on the pitch.",
    inStock: true,
    averageRating: 3.6,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://footballmonk.in/wp-content/uploads/2023/01/FC20Barcelona20CLASS-OF-201120Black.jpg.webp",
    categoryName: "Graphic T-Shirts",
    price: 420,
    originalPrice: 699,
    productName: "FC Barcelona Class Of 2011 Graphic Round Neck Tshirt",
    productDescription: "",
    inStock: false,
    averageRating: 3.6,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://footballmonk.in/wp-content/uploads/2023/01/HALA-MADRID-Typography20Black.jpg.webp",
    categoryName: "Graphic T-Shirts",
    price: 575,
    originalPrice: 699,
    productName: "Hala Madrid Typography Graphic Round Neck Tshirt",
    productDescription:
      "Celebrate your love for Real Madrid with this stylish tee featuring an artistic 'Hala Madrid' design.",
    inStock: true,
    averageRating: 2.7,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://footballmonk.in/wp-content/uploads/2023/01/1999-Man-United20Treble20Black.jpg.webp",
    categoryName: "Graphic T-Shirts",
    price: 599,
    originalPrice: 699,
    productName: "1999 Man United Treble Graphic Round Neck Tshirt",
    productDescription:
      "Commemorate Manchester United's historic treble-winning season with this nostalgic and stylish tee.",
    inStock: true,
    averageRating: 4.9,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://footballmonk.in/wp-content/uploads/2023/01/Chelsea20UP-THE-BLUES20Black.jpg.webp",
    categoryName: "Graphic T-Shirts",
    price: 450,
    originalPrice: 699,
    productName: "Chelsea Up The Blues Graphic Round Neck Tshirt",
    productDescription:
      "Show your support for Chelsea FC with this trendy tee featuring an inspiring 'Up The Blues' graphic design.",
    inStock: true,
    averageRating: 4.4,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://footballmonk.in/wp-content/uploads/2023/01/Ya-Gunners-Ya-Arsenal-Motto-White.jpg.webp",
    categoryName: "Graphic T-Shirts",
    price: 400,
    originalPrice: 699,
    productName: "Ya Gunners Ya Arsenal Motto Graphic Round Neck Tshirt",
    productDescription:
      "Embrace the spirit of Arsenal FC with this iconic tee featuring the famous 'Ya Gunners Ya' motto",
    inStock: true,
    averageRating: 3.8,
  },
];