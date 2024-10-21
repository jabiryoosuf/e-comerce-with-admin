import React from "react";
import { Link, useParams } from "react-router-dom";
import RatingStar from "../../../components/RatingStar";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Single Product page</h2>
        <div className="section__subheader space-x-2">
          <span className="hover:text-primary">
            <Link to="/">Home</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">
            <Link to="/shop">Shop</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">ProductName</span>
        </div>
      </section>
      <section className="section__container mt-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Product image   */}
          <div className="md:w-1/2 w-full">
            <img
              className="rounded-md w-full h-auto"
              src="https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-4"> Product name</h3>
            <p className="text-xl text-primary mb-4">
              $100 <s>$130</s>
            </p>
            <p className="text-gray-400 mb-4">Product DEscription</p>
            {/* additional product info */}
            <div>
              <p>
                <strong>Category :</strong> accessories
              </p>
              <p>
                <strong>Color :</strong> red
              </p>
              <div className="flex items-center gap-1 ">
                <strong> Rating :</strong>
                <RatingStar rating={"4"} />
              </div>
            </div>
            <button className="mt-6 px-6 py-3 bg-primary text-white rounded-md">Add to Cart</button>
          </div>
        </div>
      </section>
      {/* display review  */}
      <section className="section__container mt-8"></section>
    </>
  );
};

export default SingleProduct;
