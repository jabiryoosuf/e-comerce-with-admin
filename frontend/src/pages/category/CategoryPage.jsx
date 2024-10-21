import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import ProductCard from "../shop/ProductCard";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    const filtered = products.filter(
      (product) => product.category === categoryName.toLowerCase()
    );
    setFilteredProduct(filtered);
  }, [categoryName]);

  useEffect(()=>{
    window.scrollTo(0,0)
  })

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">{categoryName}</h2>
        <p className="section__subheader">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum modi
          eligendi, veniam laboriosam quod adipisci.
        </p>
      </section>

      {/* product Card  */}
      <div className="section__container">
        <ProductCard products={filteredProduct}/>
      </div>
    </>
  );
};

export default CategoryPage;
