import React, { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../../data/products.json"

const TrendingProducts = () => {

  const [visibleproduct,setVisibleproduct] = useState(8);

  const loadMoreProduct =()=>{
    setVisibleproduct(prevCount => prevCount + 4)
  }

  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Products</h2>
      <p className="section__subheader mb-12">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati
        quia eligendi, animi libero totam. Beatae suscipit iusto vitae mollitia
        velit. Autem sequi voluptates, fuga consectetur at aspernatur sed quis.
      </p>


      {/* product card  */}
     <div className="mt-12">
     <ProductCard products={products.slice(0,visibleproduct)}/>
     </div>

     
     {/* load more button  */}
     <div className="product__btn">
      {
        visibleproduct < products.length&& (
          <button className="btn" onClick={loadMoreProduct}>Load More</button>
        )
      }
     </div>
    </section>
  );
};

export default TrendingProducts;
