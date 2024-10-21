import React, { useState } from "react";
import productData from "../../data/products.json";
import ProductCard from "../shop/ProductCard";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProduct, setFilteredProduct] = useState(productData);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = productData.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    setFilteredProduct(filtered);
  };
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Search Products</h2>
        <p className="section__subheader">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum modi
          eligendi, veniam laboriosam quod adipisci.
        </p>
      </section>
      <section className="section__container ">
        <div className="w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Search for product"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar w-full max-w-4xl p-2 border rounded "
          />
          <button
            onClick={handleSearch}
            className="Search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded"
          >
            Search
          </button>
        </div>
        {<ProductCard products={filteredProduct} />}
      </section>
    </>
  );
};

export default Search;
