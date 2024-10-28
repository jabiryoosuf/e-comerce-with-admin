import React from "react";
import { Link } from "react-router-dom";
import RatingStar from "../../components/RatingStar";
import {useDispatch} from "react-redux";
import { addToCart } from "../../redux/features/cart/CartSlice";

const ProductCard = ({ products }) => {
  // console.log(products);

  const dispatch = useDispatch();
  
  const handleAddToCart = (products) => {
    dispatch(addToCart(products));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <div key={index} className="product__card">
          <div className="relative">
            <Link to={`/shop/${product.id}`}>
              <img
                src={product.image}
                alt="product image"
                className="max-h-96 md:min-h-64 w-full object-cover hover:scale-105 transition-all duration-300"
              />
            </Link>
            <div className="absolute top-3 right-3 hover:block">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleAddToCart(product);
                }}
              >
                <i className="ri-shopping-cart-2-line bg-primary text-white hover:bg-primary-dark p-1.5"></i>
              </button>
            </div>
            {/* product description  */}
            <div className="product__card__content ">
              <h4>{product.name}</h4>
              <p>
                ${product.price}
                {product?.oldPrice ? <s>${product?.oldPrice}</s> : null}
                <RatingStar rating={product.rating} />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
