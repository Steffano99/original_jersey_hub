import { ProductCategoryCard } from "./component/ProductCategory/ProductCategoryCard";
import { Footer } from "./component/Footer/Footer";

import { useDataContext } from "../../context/data/DataContext";

import "./landing.mobile.layout.css";
import "./landing.desktop.layout.css";


export const Landing = () => {
  const { categories } = useDataContext();

  return (
    <div>
      <div className="hero-container">
        <div className="hero-image-container">
        </div>
      </div>

      <div className="categories-container">
        <h1>Explore Categories</h1>
        <div className="category">
          {categories.map((category) => (
            <ProductCategoryCard key={category._id} category={category} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
