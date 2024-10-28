import React from "react";

const CartModel = ({ products, isOpen, onClose }) => {
  return (
    <div
      className={`fixed z-[1000] inset-0 bg-black bg-opacity-80 transition-opacity ${
        isOpen ? " opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ transition: "opacity 300ms" }}
    >
      <div
        className={`fixed right-0 top-0 md:w-1/3 w-full bg-white h-full overflow-y-auto transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          transition: "transform 300ms cubic-bezire(0.25,0.46,0.45,0.94)",
        }}
      >
        <div className="mt-4 p-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold">Your Cart</h4>
            <button
              onClick={() => onClose()}
              className="text-gray-600 hover:text-gray-900"
            >
              <i className="ri-xrp-line bg-black p-1 text-white"></i>
            </button>
          </div>
          <div>
            {products.lenght === 0 ? (
              <div> Your Cart is empty</div>
            ) : (
              products.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center md:justify-between shadow-md p-5 p-2 mb-4"
                >
                  <div className="flex items-center">
                    <span className="mr-4 px-1 bg-primary text-white rounded-full">
                      0{index + 1}
                    </span>
                    <img
                      src={item.image}
                      alt=""
                      className="object-cover mr-4 size-12"
                    />
                    <div>
                      <h5
                        className="text-lg
                     font-medium"
                      >
                        {item.name}
                      </h5>
                      <p className="text-gray-600 text-sm">
                        ${Number(item.price).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row md:justify-start justify-end items-center mt-2">
                    <button className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover: bg-primary hover:text-white ml-8 ">
                      -
                    </button>
                    <span className="px-2 text-center mx-1">
                      {item.quantity}
                    </span>
                    <button className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover: bg-primary hover:text-white  ">
                      +
                    </button>
                  </div>
                  <div>
                    <button className="text-red-500 hover:text-red-900 ml-4 mr-4">Remove</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModel;
